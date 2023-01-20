import type { TaskListThemeConfig } from '@docusaurus/theme-task-list';
import type {
    ThemeConfig,
    ThemeConfigValidationContext
} from '@docusaurus/types';
import { Joi } from '@docusaurus/utils-validation';

const DEFAULT_THEME_CONFIG: TaskListThemeConfig = {
    checkboxShape: 'square',
    checkbox: {
        color: 'var(--ifm-color-primary)',
    },
};

// TODO(dnguyen0304): Investigate missing labels.
// TODO(dnguyen0304): Fix incorrect ThemeConfig type.
export const ThemeConfigSchema = Joi.object<ThemeConfig>({
    docupotamusTaskList: Joi.object({
        checkboxShape: Joi
            .string()
            .valid('square', 'circle')
            .default(DEFAULT_THEME_CONFIG.checkboxShape),
        checkbox: Joi.object({
            color: Joi
                .string()
                .default(DEFAULT_THEME_CONFIG.checkbox.color),
        })
            .default(DEFAULT_THEME_CONFIG.checkbox),
    })
        .label('themeConfig.docupotamusTaskList')
        .default(DEFAULT_THEME_CONFIG),
});

export const validateThemeConfig = ({
    validate,
    themeConfig,
}: ThemeConfigValidationContext<ThemeConfig>): ThemeConfig => {
    return validate(ThemeConfigSchema, themeConfig);
};
