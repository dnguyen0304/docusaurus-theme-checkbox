import type { Plugin } from '@docusaurus/types';

export default function themeTaskList(): Plugin<undefined> {
    return {
        name: 'docusaurus-theme-task-list',

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
