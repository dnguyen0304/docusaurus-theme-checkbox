import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useTasks } from '../../contexts/tasks';
import ButtonGroup from './ButtonGroup';
import Tabs from './Tabs';

const Layout = styled(Box)({
    height: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    color: 'var(--tl-workbench-color-base)',
    padding: 'var(--d9s-space-m)',
    paddingBottom: 'var(--d9s-space-xs)',
});

export default function WorkbenchTab(): JSX.Element {
    const { tasks } = useTasks();

    const [taskListIds, setTaskListIds] = React.useState<string[]>([]);

    React.useEffect(() => {
        setTaskListIds(Array.from(tasks.get(location.pathname)?.keys() ?? []));
    }, [tasks]);

    return (
        <Layout>
            <Tabs taskListIds={taskListIds} />
            <ButtonGroup />
        </Layout>
    );
};
