declare module '@docusaurus/theme-task-list' {
    import { CheckboxProps } from '@mui/material/Checkbox';

    interface TaskListThemeConfig {
        readonly checkbox: {
            readonly color: React.CSSProperties['color'];
            readonly shape: CheckboxShape;
            readonly size: CheckboxProps['size'];
        };
        readonly progressBar: {
            readonly isEnabled: boolean;
            readonly color: React.CSSProperties['color'];
        };
    }

    type CheckboxShape = 'circle' | 'square';
}
