import * as React from 'react';
import { ReactContextError } from './errors';

interface TaskListData {
    readonly items: {
        readonly label: string;
        readonly isChecked: boolean;
    }[];
}

interface PathToTaskListData extends Map<string, TaskListData[]> { };

type Action =
    | {
        type: 'setTaskList';
        path: string;
        labels: string[];
    };

const reducer = (
    prev: PathToTaskListData,
    action: Action,
): PathToTaskListData => {
    const newMapping = new Map(prev);
    // const oldShortcut = newShortcuts[action.index];
    // if (!oldShortcut) {
    //     throw new Error('index out of bounds');
    // }
    if (action.type === 'setTaskList') {
        const taskListData = prev.get(action.path) ?? [];
        taskListData.push({
            items: action.labels.map(label => ({
                label,
                isChecked: false,
            }))
        });
        newMapping.set(action.path, taskListData);
    }
    return newMapping;
};

interface ContextValue {
    readonly tasks: PathToTaskListData;
    readonly dispatchTasks: React.Dispatch<Action>;
};

const Context = React.createContext<ContextValue | undefined>(undefined);

const useContextValue = (): ContextValue => {
    const [tasks, dispatchTasks] = React.useReducer(reducer, new Map());

    return React.useMemo(
        () => ({
            tasks,
            dispatchTasks,
        }),
        [
            tasks,
            dispatchTasks,
        ],
    );
};

interface Props {
    readonly children: React.ReactNode;
};

export const TasksProvider = ({ children }: Props): JSX.Element => {
    const value = useContextValue();

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

export const useTasks = (): ContextValue => {
    const context = React.useContext(Context);
    if (context === undefined) {
        throw new ReactContextError('TasksProvider');
    }
    return context;
};
