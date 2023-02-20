import { useLocation } from '@docusaurus/router';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useTasks } from '../../../contexts/tasks';
import List from '../../TaskList/List';

const ClippingBox = styled(Box)({
    width: '100%',
    flexGrow: 1,

    overflowX: 'hidden',
});

const Layout = styled(Box)({
    display: 'grid',
    gridAutoFlow: 'column',
    gridAutoColumns: '100%',
});

export default function WorkbenchTab(): JSX.Element {
    const location = useLocation();
    const { tasks } = useTasks();

    return (
        <ClippingBox>
            <Layout>
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
            </Layout>
        </ClippingBox>
    );
};
