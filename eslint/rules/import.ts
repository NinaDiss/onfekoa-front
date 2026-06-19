// Import rules
// https://github.com/import-js/eslint-plugin-import/
//
import type { Linter } from 'eslint'

interface ImportRulesOptions {
  unusedExports: boolean
  ignoreExports?: string[]
}

export const getImportRules = (
  { unusedExports, ignoreExports = [] }: ImportRulesOptions,
): Linter.RulesRecord => ({
  'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
  'import/no-unused-modules': [
    unusedExports ? 'error' : 'off',
    { unusedExports, ignoreExports },
  ],
  'import/no-duplicates': ['error', { considerQueryString: true, 'prefer-inline': true }],
  // @typescript-eslint/consistent-type-imports is preferred over this rule
  'import/consistent-type-specifier-style': 'off',
  'import/first': 'error',
  'import/no-named-default': 'error',
  'import/no-default-export': 'error',
})
