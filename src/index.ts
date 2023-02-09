import type { Plugin } from '@docusaurus/types';

export default function themeTaskList(): Plugin<undefined> {
    const name = 'task-list';

    return {
        name: `docupotamus-theme-${name}`,

        getThemePath() {
            return '../lib/theme';
        },

        getTypeScriptThemePath() {
            return '../src/theme';
        },
    };
};

export { validateThemeConfig } from './validateThemeConfig';

export const getSwizzleComponentList = (): string[] => [];
