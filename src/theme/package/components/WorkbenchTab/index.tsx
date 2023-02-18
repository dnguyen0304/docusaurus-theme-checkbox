import { useLocation } from '@docusaurus/router';
import Box from '@mui/material/Box';
import * as React from 'react';
import { useTasks } from '../../contexts/tasks';
import List from '../TaskList/List';

export default function WorkbenchTab(): JSX.Element {
    const location = useLocation();
    const { tasks } = useTasks();

    return (
        <Box>
            {Array
                .from(tasks.get(location.pathname)?.keys() ?? [])
                .map(taskListId => {
                    return (
                        <List
                            path={location.pathname}
                            taskListId={taskListId}
                        />
                    );
                })
            }
        </Box>
    );
};
