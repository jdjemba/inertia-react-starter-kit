import { defineConfig } from 'oxlint';

export default defineConfig({
	ignorePatterns: ['**/node_modules/**', '**/build/**', '**/.adonisjs/**', '**/public/assets/**'],
	plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'import', 'node', 'react', 'react-perf'],
	jsPlugins: ['@adonisjs/eslint-plugin'],
	categories: {
		correctness: 'error',
		perf: 'error',
	},
	env: {
		builtin: true,
	},
	settings: {
		react: {
			version: '19.3.1',
		},
	},
	rules: {
		'no-array-constructor': 'error',
		complexity: 'error',
		curly: 'error',
		'default-param-last': 'error',
		'guard-for-in': 'error',
		'max-classes-per-file': 'error',
		'max-depth': 'error',
		'max-lines-per-function': 'error',
		'max-nested-callbacks': 'error',
		'max-params': 'error',
		'max-statements': 'error',
		'no-console': 'error',
		'no-else-return': 'error',
		'no-empty': 'error',
		'no-inline-comments': 'error',
		'no-lonely-if': 'error',
		'no-loop-func': 'error',
		'no-magic-numbers': ['error', { ignoreArrayIndexes: true, ignoreTypeIndexes: true }],
		'no-nested-ternary': 'error',
		'no-new-wrappers': 'error',
		'no-param-reassign': 'error',
		'no-plusplus': 'error',
		'no-undefined': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-use-before-define': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'one-var': ['error', 'never'],

		'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
		'import/default': 'off',
		'import/namespace': 'off',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',

		'oxc/approx-constant': 'error',
		'oxc/misrefactored-assign-op': 'error',
		'oxc/no-this-in-exported-function': 'error',
		'oxc/no-const-enum': 'error',
		'oxc/branches-sharing-code': 'error',

		// Suspicious: Code that is likely to be wrong or useless
		'typescript/consistent-return': 'error',
		'typescript/no-shadow': 'error',
		'typescript/no-unnecessary-boolean-literal-compare': 'error',
		'typescript/no-unnecessary-template-expression': 'error',
		'typescript/no-unnecessary-type-arguments': 'error',
		'typescript/no-unnecessary-type-assertion': 'error',
		'typescript/no-unnecessary-type-conversion': 'error',
		'typescript/no-unnecessary-type-parameters': 'error',
		'typescript/no-unsafe-enum-assignment': 'error',
		'typescript/no-unsafe-enum-comparison': 'error',
		'typescript/no-unsafe-type-assertion': 'error',

		// Pedantic: Extra strict rules that may have false positives
		'typescript/ban-ts-comment': 'error',
		'typescript/no-mixed-enums': 'error',
		'typescript/no-unsafe-argument': 'error',
		'typescript/no-unsafe-assignment': 'error',
		'typescript/no-unsafe-call': 'error',
		'typescript/no-unsafe-function-type': 'error',
		'typescript/no-unsafe-member-access': 'error',
		'typescript/no-unsafe-return': 'error',
		'typescript/only-throw-error': 'error',
		'typescript/prefer-enum-initializers': 'error',
		'typescript/prefer-includes': 'error',
		'typescript/prefer-nullish-coalescing': 'error',
		/**
		 * Framework callbacks supply mutable instances; explicit application parameters remain checked.
		 */
		'typescript/prefer-readonly-parameter-types': [
			'error',
			{
				ignoreInferredTypes: true,
				allow: [
					{ from: 'package', package: '@adonisjs/core', name: ['HttpContext'] },
					{ from: 'package', package: 'react', name: ['ReactNode'] },
					{ from: 'package', package: '@inertiajs/core', name: ['Page'] },
				],
			},
		],
		'typescript/prefer-ts-expect-error': 'error',
		'typescript/require-await': 'error',
		'typescript/restrict-plus-operands': 'error',
		'typescript/return-await': 'error',
		'typescript/strict-boolean-expressions': 'error',
		'typescript/strict-void-return': 'error',
		'typescript/switch-exhaustiveness-check': 'error',

		// Style: Idiomatic and consistent style rules
		'typescript/array-type': 'error',
		'typescript/consistent-generic-constructors': ['error', 'type-annotation'],
		'typescript/consistent-indexed-object-style': 'error',
		'typescript/consistent-type-assertions': ['error', { assertionStyle: 'never' }],
		'typescript/consistent-type-definitions': ['error', 'interface'],
		'typescript/consistent-type-exports': 'error',
		'typescript/consistent-type-imports': 'error',
		'typescript/no-unnecessary-qualifier': 'error',
		'typescript/parameter-properties': ['error', { prefer: 'parameter-property' }],
		'typescript/prefer-find': 'error',
		'typescript/prefer-for-of': 'error',
		'typescript/prefer-readonly': 'error',
		'typescript/prefer-string-starts-ends-with': 'error',

		// Restriction: Rules that ban specific patterns or features
		'typescript/explicit-member-accessibility': [
			'error',
			{ accessibility: 'no-public', overrides: { parameterProperties: 'explicit' } },
		],
		'typescript/no-empty-object-type': 'error',
		'typescript/no-explicit-any': 'error',
		'typescript/no-import-type-side-effects': 'error',
		'typescript/no-namespace': 'error',
		'typescript/no-require-imports': 'error',
		'typescript/promise-function-async': 'error',
		'typescript/use-unknown-in-catch-callback-variable': 'error',

		'node/handle-callback-err': ['error', '^(err|error)$'],

		'unicorn/error-message': 'error',
		'unicorn/filename-case': ['error', { case: 'snakeCase' }],
		'unicorn/no-array-for-each': 'error',
		'unicorn/no-await-expression-member': 'error',
		'unicorn/no-instanceof-builtins': 'error',
		'unicorn/prefer-module': 'error',
		'unicorn/prefer-node-protocol': 'error',
		'unicorn/prefer-top-level-await': 'error',
		'unicorn/prefer-type-error': 'error',
		'unicorn/custom-error-definition': 'error',
		'unicorn/prefer-number-properties': 'error',
	},
	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts', '**/*.vue'],
			rules: {
				'constructor-super': 'off',
				'getter-return': 'off',
				'no-class-assign': 'off',
				'no-const-assign': 'off',
				'no-dupe-class-members': 'off',
				'no-dupe-keys': 'off',
				'no-func-assign': 'off',
				'no-import-assign': 'off',
				'no-new-native-nonconstructor': 'off',
				'no-obj-calls': 'off',
				'no-redeclare': 'off',
				'no-setter-return': 'off',
				'no-this-before-super': 'off',
				'no-undef': 'off',
				'no-unreachable': 'off',
				'no-unsafe-negation': 'off',
				'no-var': 'error',
				'no-with': 'off',
				'prefer-const': 'error',
				'prefer-rest-params': 'error',
				'prefer-spread': 'error',
			},
		},
		{
			files: ['**/*.ts'],
			rules: {
				'@adonisjs/prefer-lazy-controller-import': 'error',
				'@adonisjs/prefer-lazy-listener-import': 'error',
				'typescript/triple-slash-reference': 'off',
				/**
				 * Knex query builder return a promise but safe to ignore since they are not executed until you call `.exec()` or similar method.
				 */
				'@typescript-eslint/no-floating-promises': [
					'error',
					{
						allowForKnownSafePromises: [
							{
								from: 'package',
								package: '@adonisjs/lucid',
								name: [
									'ExcutableQueryBuilderContract',
									'ModelQueryBuilderContract',
									'DatabaseQueryBuilderContract',
									'InsertQueryBuilderContract',
									'RawQueryBuilderContract',
									'ChainableContract',
									'RelationQueryBuilderContract',
									'RelationSubQueryBuilderContract',
									'HasManyQueryBuilderContract',
									'HasManyThroughQueryBuilderContract',
									'ManyToManyQueryBuilderContract',
									'ManyToManySubQueryBuilderContract',
								],
							},
							{ from: 'package', package: 'knex', name: 'QueryBuilder' },
						],
					},
				],
			},
		},
		{
			files: ['apps/website/app/middleware/inertia_middleware.ts', 'apps/website/config/logger.ts'],
			rules: {
				/**
				 * These framework APIs distinguish an absent value from null.
				 */
				'no-undefined': 'off',
			},
		},
		{
			files: ['apps/website/database/migrations/*.ts'],
			rules: {
				/**
				 * Lucid requires async hooks but queues schema operations until after they return.
				 */
				'typescript/require-await': 'off',
			},
		},
		{
			files: ['apps/website/config/*.ts', 'apps/website/app/middleware/inertia_middleware.ts'],
			rules: {
				/**
				 * Adonis registers inferred types through declaration merging.
				 */
				'typescript/no-empty-object-type': ['error', { allowInterfaces: 'with-single-extends' }],
			},
		},
		{
			files: ['apps/website/resources/js/**/*.{ts,tsx}', 'apps/website/inertia/**/*.{ts,tsx}'],
			rules: {
				'@adonisjs/no-backend-import-in-frontend': 'error',
				'@adonisjs/prefer-adonisjs-inertia-form': 'error',
				'@adonisjs/prefer-adonisjs-inertia-link': 'error',
				'react/react-in-jsx-scope': 'off',
				'react/jsx-curly-brace-presence': 'error',
				'react/no-children-prop': 'off',
				'react/rules-of-hooks': 'error',
				'react/self-closing-comp': 'error',
			},
		},
	],
	options: { typeAware: true, typeCheck: true },
});
