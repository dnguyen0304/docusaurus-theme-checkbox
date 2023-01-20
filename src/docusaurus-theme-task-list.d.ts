declare module '@docusaurus/theme-task-list' {
    interface TaskListThemeConfig {
        readonly checkboxShape: CheckboxShape;
    }

    type CheckboxShape = 'circle' | 'square';
}
