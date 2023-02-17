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

    React.useEffect(() => {
        if (!labels.length) {
            return;
        }
        dispatchTasks({
            type: 'setTaskList',
            path: location.pathname,
            labels,
        });
    }, [labels]);

    return (
        <List labels={labels} />
    );
};
