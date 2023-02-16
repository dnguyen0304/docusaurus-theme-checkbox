import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import useTaskListThemeConfig from '../../hooks/useTaskListThemeConfig';
import LinearProgress from '../LinearProgress';
import TaskItem from './Item';
import WorkbenchButton from './WorkbenchButton';

const DELIMITER: string = '- [ ] ';

const StyledBox = styled(Box)({
    position: 'relative',

    '&.MuiBox-root': {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--d9s-space-3xs-2xs)',
        marginTop: 'var(--ifm-leading)',
        marginBottom: 'var(--ifm-leading)',
    },
    '&.MuiBox-root .MuiIconButton-root': {
        position: 'absolute',
        top: '50%',
        right: '0',

        translate: '100% -50%',
    },
    '&.MuiBox-root .MuiIconButton-root .MuiSvgIcon-root': {
        fontSize: 'inherit',
    },
    '&.MuiBox-root .MuiFormGroup-root': {
        paddingLeft: 'var(--d9s-space-xs)',
    },
    '& .MuiFormControlLabel-root + .MuiFormControlLabel-root': {
        marginTop: 'var(--d9s-list-item-gap-2xs)',
    },
});

// Copied from: https://github.com/facebook/docusaurus/blob/a308fb7c81832cca354192fe2984f52749441249/packages/docusaurus-theme-classic/src/theme/CodeBlock/index.tsx#L20
const stringifyChildren = (children: React.ReactNode): string => {
    const hasElement =
        React.Children
            .toArray(children)
            .some((child) => React.isValidElement(child));
    if (hasElement) {
        throw new Error(
            'rendering non-text nodes in a task list is not yet supported'
        );
    }
    return Array.isArray(children) ? children.join('') : (children as string);
};

interface Props {
    readonly children: React.ReactNode;
};

export default function TaskList(
    {
        children,
    }: Props,
): JSX.Element {
    const {
        progressBar: {
            isEnabled: progressBarIsEnabled,
        },
    } = useTaskListThemeConfig();

    const [labels, setLabels] = React.useState<string[]>([]);
    const [progress, setProgress] = React.useState<number>(0);
    const [isCheckedCount, setIsCheckedCount] = React.useState<number>(0);

    React.useEffect(() => {
        const newProgress =
            (labels.length)
                ? Math.floor(isCheckedCount / labels.length * 100)
                : 0;
        setProgress(newProgress);
    }, [isCheckedCount]);

    React.useEffect(() => {
        const stringified = stringifyChildren(children);
        const newLabels =
            stringified
                .split(DELIMITER)
                .filter(item => item.length);
        setLabels(newLabels);
    }, []);

    return (
        <StyledBox className='DocupotamusTaskList_layout'>
            {progressBarIsEnabled && <LinearProgress value={progress} />}
            <FormGroup>
                {labels.map((label, i) => {
                    return (
                        <TaskItem
                            // If items are modified, update how the key is
                            // generated.
                            key={`taskItem-${i}`}
                            label={label}
                            setIsCheckedCount={setIsCheckedCount}
                        />
                    );
                })}
            </FormGroup>
            <WorkbenchButton />
        </StyledBox>
    );
};
