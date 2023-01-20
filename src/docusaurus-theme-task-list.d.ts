declare module '@docusaurus/theme-task-list' {
    interface TaskListThemeConfig {
        readonly checkbox: {
            readonly color: React.CSSProperties['color'];
            readonly shape: CheckboxShape;
        };
    }

    type CheckboxShape = 'circle' | 'square';
}
