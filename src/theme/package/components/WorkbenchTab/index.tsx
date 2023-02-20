import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import * as React from 'react';
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
    return (
        <Layout>
            <Tabs />
            <ButtonGroup />
        </Layout>
    );
};
