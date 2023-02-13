import Box from '@mui/material/Box';
import MuiLinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import useTaskListThemeConfig from '../../hooks/useTaskListThemeConfig';

interface StyledBoxProps {
    readonly barColor: React.CSSProperties['color'];
};

const StyledBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'barColor'
})<StyledBoxProps>(({ barColor }) => ({
    width: '100%',
    '&.MuiBox-root .MuiLinearProgress-bar': {
        backgroundColor: barColor,
    },
    '&.MuiBox-root .MuiLinearProgress-root::before': {
        backgroundColor: barColor,
    },
}));

interface Props extends LinearProgressProps {
    readonly value: number;
};

export default function LinearProgress(props: Props): JSX.Element {
    const {
        progressBar: {
            color: barColor,
        },
    } = useTaskListThemeConfig();

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
        }}>
            <StyledBox barColor={barColor}>
                <MuiLinearProgress
                    // This is a fallback. Set color in the styled component for
                    // higher specificity.
                    color='inherit'
                    variant='determinate'
                    {...props}
                />
            </StyledBox>
            <Box sx={{ minWidth: '10%' }}>
                <Typography variant='body2'>
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
};
