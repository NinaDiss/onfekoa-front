import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginImport from 'eslint-plugin-import-x'
import pluginOxlint from 'eslint-plugin-oxlint'
import skipFormatting from 'eslint-config-prettier/flat'
import * as vueEslintParser from 'vue-eslint-parser'
import * as tsParser from '@typescript-eslint/parser'
import tseslint from 'typescript-eslint'
import { eslintRules } from './eslint/rules/eslint'
import { getImportRules } from './eslint/rules/import'
import { typescriptRules } from './eslint/rules/typescript'
import { vueRules } from './eslint/rules/vue'

export default defineConfigWithVueTs(
  {
    name: 'onfekoa',
    files: ['**/*.{vue,ts,mts,tsx,cjs}'],
  },
  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**', 'node_modules']),
  ...pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommended,
  tseslint.configs.eslintRecommended,
  tseslint.configs.strict,
  {
    plugins: {
      import: pluginImport,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: ['./tsconfig.json'],
        },
        node: true,
      },
      'import/extensions': ['.js', '.cjs', '.d.ts', '.ts', '.vue', '.json'],
      'import/ignore': ['.vue'],
    },
    rules: {
      ...eslintRules,
      ...getImportRules({ unusedExports: false }),
    },
    ignores: ['node_modules', 'types/**/*.d.ts'],
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.vue'],
      },
    },
    rules: {
      ...typescriptRules,
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.vue'],
      },
    },
    rules: {
      ...typescriptRules,
      ...vueRules,
    },
  },
  {
    files: ['*.config.ts'],
    languageOptions: {
      globals: { process: 'readonly', __dirname: 'readonly' },
    },
    rules: {
      'import/no-default-export': 'off',
    },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      globals: { require: 'readonly', module: 'readonly', __dirname: 'readonly' },
    },
  },
  ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),
  skipFormatting,
)
