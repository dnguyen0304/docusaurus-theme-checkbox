import * as React from 'react';
import useLabelsParsed from '../../hooks/useLabelsParsed';
import List from './List';

interface Props {
    readonly children: React.ReactNode;
};

export default function TaskList(
    {
        children,
    }: Props,
): JSX.Element {
    const labels = useLabelsParsed(children);

    return (
        <List labels={labels} />
    );
};
