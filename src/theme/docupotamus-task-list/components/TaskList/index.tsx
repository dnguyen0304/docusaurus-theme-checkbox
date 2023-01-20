import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import LinearProgress from '../LinearProgress';
import TaskItem from './Item';

const DELIMITER: string = '- [ ] ';

const StyledFormGroup = styled(FormGroup)({
    marginBottom: 'var(--ifm-leading)',
    paddingLeft: '1rem',
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
        children: rawChildren,
    }: Props,
): JSX.Element {
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
        const children = stringifyChildren(rawChildren);
        const newLabels =
            children
                .split(DELIMITER)
                .filter(item => item.length);
        setLabels(newLabels);
    }, []);

    return (
        <Box>
            <LinearProgress progress={progress} />
            <StyledFormGroup>
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
            </StyledFormGroup>
        </Box>
    );
};
