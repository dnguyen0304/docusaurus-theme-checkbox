import { useLocation } from '@docusaurus/router';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import * as React from 'react';
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

interface Props {
    readonly taskListIds: string[];
}

export default function Tabs({ taskListIds }: Props): JSX.Element {
    const location = useLocation();

    return (
        <ClippingBox>
            <Layout>
                {taskListIds.map(taskListId => {
                    return (
                        <List
                            path={location.pathname}
                            taskListId={taskListId}
                        />
                    );
                })}
            </Layout>
        </ClippingBox>
    );
};
