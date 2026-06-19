// TypeScript rules
// https://typescript-eslint.io/rules/
//
// Presets (eslint-recommended, strict) are applied in eslint.config.ts
// via tseslint.configs.strict — not here.
//
import type { Linter } from 'eslint'

export const typescriptRules: Linter.RulesRecord = {
  // --- Custom rules on top of strict preset ---

  '@typescript-eslint/consistent-type-exports': [
    'error',
    { fixMixedExportsWithInlineTypeSpecifier: false },
  ],
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      prefer: 'type-imports',
      fixStyle: 'inline-type-imports',
    },
  ],
  '@typescript-eslint/no-import-type-side-effects': 'error',

  // Disabled: causes performance issues with large type graphs
  '@typescript-eslint/no-empty-object-type': 'off',

  // --- Extension rules ---
  // Base ESLint rules must be turned off when a @typescript-eslint
  // equivalent exists, to avoid false positives on TypeScript syntax.

  'class-methods-use-this': 'off',
  '@typescript-eslint/class-methods-use-this': 'error',

  'dot-notation': 'off',
  '@typescript-eslint/dot-notation': 'error',

  'no-empty-function': 'off',
  '@typescript-eslint/no-empty-function': 'error',

  'no-implied-eval': 'off',
  '@typescript-eslint/no-implied-eval': 'error',

  'no-invalid-this': 'off',
  '@typescript-eslint/no-invalid-this': 'error',

  'no-loss-of-precision': 'off',
  '@typescript-eslint/no-loss-of-precision': 'error',

  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': 'error',

  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': 'error',

  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],

  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': 'error',
}
