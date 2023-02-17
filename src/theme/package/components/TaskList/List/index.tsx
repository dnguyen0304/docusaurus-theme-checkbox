import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import useTaskListThemeConfig from '../../../hooks/useTaskListThemeConfig';
import TaskItem from '../Item';
import LinearProgress from '../LinearProgress';
import WorkbenchButton from '../WorkbenchButton';
import styles from '../WorkbenchButton/styles.module.css';

const StyledBox = styled(Box)({
    position: 'relative',

    '&.MuiBox-root': {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--d9s-space-3xs-2xs)',
        marginTop: 'var(--ifm-leading)',
        marginBottom: 'var(--ifm-leading)',
    },
    [`&.MuiBox-root:hover .${styles.WorkbenchButton_layout}`]: {
        opacity: 1,
        visibility: 'visible',
    },
    '&.MuiBox-root .MuiFormGroup-root': {
        paddingLeft: 'var(--d9s-space-xs)',
    },
    '& .MuiFormControlLabel-root + .MuiFormControlLabel-root': {
        marginTop: 'var(--d9s-list-item-gap-2xs)',
    },
});

interface Props {
    readonly labels: string[];
};

export default function List(
    {
        labels,
    }: Props,
): JSX.Element {
    const {
        progressBar: {
            isEnabled: progressBarIsEnabled,
        },
    } = useTaskListThemeConfig();

    const [progress, setProgress] = React.useState<number>(0);
    const [isCheckedCount, setIsCheckedCount] = React.useState<number>(0);

    React.useEffect(() => {
        const newProgress =
            (labels.length)
                ? Math.floor(isCheckedCount / labels.length * 100)
                : 0;
        setProgress(newProgress);
    }, [isCheckedCount]);

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
