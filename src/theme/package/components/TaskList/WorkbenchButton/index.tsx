import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';

export default function WorkbenchButton(): JSX.Element {
    return (
        <Tooltip
            placement='top'
            title='Open in Workbench'
        >
            <IconButton
                aria-label='open in workbench'
                onClick={() => console.log('Not Yet Implemented')}
            >
                <LoginOutlinedIcon />
            </IconButton>
        </Tooltip>
    );
};
