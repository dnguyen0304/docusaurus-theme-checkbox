// Copied from: https://mui.com/material-ui/react-progress/#linear-with-label

import Box from '@mui/material/Box';
import MuiLinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import useThemeConfig from '../../hooks/useThemeConfig';

interface Props extends LinearProgressProps {
    readonly value: number;
};

export default function LinearProgress(props: Props): JSX.Element {
    const {
        progressBar: {
            color,
        },
    } = useThemeConfig();

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
        }}>
            <Box sx={{
                color,
                width: '100%',
            }}>
                <MuiLinearProgress
                    color='inherit'
                    variant='determinate'
                    {...props}
                />
            </Box>
            <Box sx={{ minWidth: '10%' }}>
                <Typography variant='body2' color='text.secondary'>{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
};
