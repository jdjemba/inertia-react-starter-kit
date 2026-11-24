import { defineConfig } from 'oxfmt';

export default defineConfig({
	arrowParens: 'always',
	bracketSameLine: true,
	bracketSpacing: true,
	htmlWhitespaceSensitivity: 'ignore',
	ignorePatterns: ['**/.adonisjs/**', '**/build/**', '**/public/assets/**', '**/*.edge', '*.yml'],
	printWidth: 120,
	proseWrap: 'never',
	quoteProps: 'as-needed',
	semi: true,
	singleQuote: true,
	trailingComma: 'all',
	useTabs: true,
	sortImports: {
		internalPattern: ['~/', '#'],
		newlinesBetween: false,
		order: 'asc',
		groups: [
			['side_effect_style', 'side_effect'],
			['builtin', 'external'],
			['internal', 'subpath'],
			['parent', 'sibling', 'index'],
			'style',
			'unknown',
		],
	},
	sortPackageJson: true,
	sortTailwindcss: { functions: ['cn', 'cx', 'tv'] },
});
