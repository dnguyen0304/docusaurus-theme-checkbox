import type { KeyMap as KeyMapType } from '@docusaurus/theme-task-list';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { HotKeys } from 'react-hotkeys';
import { useTasks } from '../../contexts/tasks';
import ButtonGroup from './ButtonGroup';
import Tabs from './Tabs';

const keyMap: KeyMapType = {
    TAB_PREVIOUS: 'left',
    TAB_NEXT: 'right',
};

const Layout = styled(HotKeys)({
    height: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    color: 'var(--tl-workbench-color-base)',
    padding: 'var(--d9s-space-m)',
    paddingBottom: 'var(--d9s-space-xs)',
});

const useTaskListIds = (): string[] => {
    const { tasks } = useTasks();

    const [taskListIds, setTaskListIds] = React.useState<string[]>([]);

    React.useEffect(() => {
        setTaskListIds(Array.from(tasks.get(location.pathname)?.keys() ?? []));
    }, [tasks]);

    return taskListIds;
};

export default function WorkbenchTab(): JSX.Element {
    const taskListIds = useTaskListIds();

    const [tabIndex, setTabIndex] = React.useState<number>(0);
    const [tabIndexMax, setTabIndexMax] = React.useState<number>(0);

    React.useEffect(() => {
        setTabIndexMax(taskListIds.length - 1);
    }, [taskListIds]);

    return (
        <Layout keyMap={keyMap}>
            <Tabs
                taskListIds={taskListIds}
                tabIndex={tabIndex}
            />
            <ButtonGroup
                setTabIndex={setTabIndex}
                tabIndexMax={tabIndexMax}
            />
        </Layout>
    );
};
