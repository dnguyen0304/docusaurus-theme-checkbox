import type { KeyHandlers as KeyHandlersType } from '@docusaurus/theme-task-list';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';
import { HotKeys } from 'react-hotkeys';

const Layout = styled(HotKeys)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
});

interface Props {
    readonly setTabIndex: React.Dispatch<React.SetStateAction<number>>;
    readonly tabIndexMax: number;
}

export default function ButtonGroup(
    {
        setTabIndex,
        tabIndexMax,
    }: Props
): JSX.Element {
    const handlePreviousClick = () => {
        setTabIndex(prev => (prev === 0) ? prev : prev - 1);
    };

    const handleNextClick = () => {
        setTabIndex(prev => (prev === tabIndexMax) ? prev : prev + 1);
    };

    const handlers: KeyHandlersType = {
        TAB_PREVIOUS: handlePreviousClick,
        TAB_NEXT: handleNextClick,
    };

    return (
        <Layout handlers={handlers}>
            <Tooltip
                placement='top-start'
                title='Previous Task List'
            >
                <IconButton
                    aria-label='previous task list'
                    onClick={handlePreviousClick}
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
                    onClick={handleNextClick}
                    color='inherit'
                >
                    <KeyboardArrowRightOutlinedIcon />
                </IconButton>
            </Tooltip>
        </Layout>
    );
};
