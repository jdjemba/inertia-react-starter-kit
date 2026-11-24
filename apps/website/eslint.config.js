// @ts-check

import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
	{
		ignores: ['*.min.*', '*.d.ts', 'build/**', 'public/assets/**', '__snapshots__/**', 'resources/**', '.adonisjs/**'],
	},
	{
		files: ['**/*.{ts,tsx}'],
		extends: [tseslint.configs.base],
		languageOptions: {
			parserOptions: {
				projectService: true,
			},
		},
		rules: {
			'@typescript-eslint/naming-convention': [
				'error',
				{ selector: 'variable', format: ['camelCase', 'UPPER_CASE', 'PascalCase'] },
				{ selector: 'typeLike', format: ['PascalCase'] },
				{ selector: 'class', format: ['PascalCase'] },
				{ selector: 'interface', format: ['PascalCase'], custom: { regex: '^I[A-Z]', match: false } },
			],
		},
	},
);
