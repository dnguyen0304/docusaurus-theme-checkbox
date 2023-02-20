import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';

const Layout = styled(Box)({
    // width: '100%',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    // padding: 'var(--d9s-space-m)',
});

export default function ButtonGroup(): JSX.Element {
    return (
        <Layout>
            <Tooltip
                placement='top-start'
                title='Previous Task List'
            >
                <IconButton
                    aria-label='previous task list'
                    onClick={() => console.log('Not Yet Implemented')}
                    color='inherit'
                >
                    <KeyboardArrowLeftOutlinedIcon />
                </IconButton>
            </Tooltip>
            <Tooltip
                placement='top'
                title='Scroll to Task List'
            >
                <IconButton
                    aria-label='scroll to task list'
                    onClick={() => console.log('Not Yet Implemented')}
                    color='inherit'
                >
                    <TagOutlinedIcon sx={{ transform: 'skewX(-10deg)' }} />
                </IconButton>
            </Tooltip>
            <Tooltip
                placement='top-end'
                title='Next Task List'
            >
                <IconButton
                    aria-label='next task list'
                    onClick={() => console.log('Not Yet Implemented')}
                    color='inherit'
                >
                    <KeyboardArrowRightOutlinedIcon />
                </IconButton>
            </Tooltip>
        </Layout>
    );
};
