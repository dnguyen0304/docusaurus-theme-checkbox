declare module '@docusaurus/theme-task-list' {
    interface TaskListThemeConfig {
        readonly checkboxShape: CheckboxShape;
        readonly checkbox: {
            readonly color: React.CSSProperties['color'];
        };
    }

    type CheckboxShape = 'circle' | 'square';
}
