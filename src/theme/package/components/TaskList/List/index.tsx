import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useTaskItems } from '../../../contexts/tasks';
import useTaskListThemeConfig from '../../../hooks/useTaskListThemeConfig';
import WorkbenchButton from '../WorkbenchButton';
import styles from '../WorkbenchButton/styles.module.css';
import Item from './Item';
import LinearProgress from './LinearProgress';

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
    readonly path: string;
    readonly taskListId: string;
};

export default function List(
    {
        path,
        taskListId,
    }: Props,
): JSX.Element {
    const {
        progressBar: {
            isEnabled: progressBarIsEnabled,
        },
    } = useTaskListThemeConfig();
    const taskItemsData = useTaskItems(path, taskListId);

    const [progress, setProgress] = React.useState<number>(0);
    const [isCheckedCount, setIsCheckedCount] = React.useState<number>(0);

    React.useEffect(() => {
        const newProgress =
            (taskItemsData.length)
                ? Math.floor(isCheckedCount / taskItemsData.length * 100)
                : 0;
        setProgress(newProgress);
    }, [isCheckedCount]);

    return (
        <StyledBox className='DocupotamusTaskList_layout'>
            {progressBarIsEnabled && <LinearProgress value={progress} />}
            <FormGroup>
                {taskItemsData.map(({ label }, i) => {
                    return (
                        <Item
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
