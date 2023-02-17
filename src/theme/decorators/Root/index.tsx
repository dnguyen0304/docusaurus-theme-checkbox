import * as React from 'react';
import { TasksProvider } from '../../package/contexts/tasks';

interface Props {
    readonly children: React.ReactNode;
};

export default function RootDecorator({ children }: Props): JSX.Element {
    return (
        <TasksProvider>
            {children}
        </TasksProvider>
    );
};
