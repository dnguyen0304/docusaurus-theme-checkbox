import { useLocation } from '@docusaurus/router';
import * as React from 'react';
import { useTasks } from '../../contexts/tasks';
import useLabelsParsed from '../../hooks/useLabelsParsed';
import List from './List';

interface Props {
    readonly children: React.ReactNode;
};

export default function TaskList(
    {
        children,
    }: Props,
): JSX.Element {
    const labels = useLabelsParsed(children);
    const location = useLocation();
    const { dispatchTasks } = useTasks();

    const [taskListId, setTaskListId] = React.useState<string>('');

    React.useEffect(() => {
        if (!labels.length) {
            return;
        }
        const newTaskListId = crypto.randomUUID();
        setTaskListId(newTaskListId);
        dispatchTasks({
            type: 'setTaskList',
            path: location.pathname,
            taskListId: newTaskListId,
            labels,
        });
    }, [labels]);

    return (
        <List
            id={taskListId}
            labels={labels}
        />
    );
};
