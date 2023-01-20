// Copied from: https://mui.com/material-ui/react-progress/#linear-with-label

import Box from '@mui/material/Box';
import MuiLinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import * as React from 'react';

interface Props extends LinearProgressProps {
    readonly value: number;
};

export default function LinearProgress(props: Props): JSX.Element {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
        }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <MuiLinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
};
