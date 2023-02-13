import Box from '@mui/material/Box';
import MuiLinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import useTaskListThemeConfig from '../../hooks/useTaskListThemeConfig';

interface Props extends LinearProgressProps {
    readonly value: number;
};

export default function LinearProgress(props: Props): JSX.Element {
    const {
        progressBar: {
            color,
        },
    } = useTaskListThemeConfig();

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
                <Typography
                    color='var(--ifm-color-emphasis-700)'
                    variant='body2'
                >
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
};
