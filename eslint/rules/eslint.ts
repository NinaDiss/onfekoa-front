// ESLint rules
// https://eslint.org/docs/latest/rules/
//
import type { Linter } from 'eslint'

export const eslintRules: Linter.RulesRecord = {
  // https://eslint.org/docs/latest/rules/#possible-problems
  'no-constructor-return': 'error',
  'no-new-native-nonconstructor': 'error',
  'no-unused-private-class-members': 'error',

  // https://eslint.org/docs/latest/rules/#suggestions
  'block-scoped-var': 'error',
  camelcase: ['error', { allow: ['status_code'] }],
  curly: ['error', 'multi-line'],
  'default-case': 'error',
  'default-case-last': 'error',
  eqeqeq: 'error',
  'new-cap': ['error', { capIsNewExceptions: ['STRING'] }],
  'no-alert': 'error',
  'no-caller': 'error',
  'no-console': 'error',
  'no-empty-static-block': 'error',
  'no-eq-null': 'error',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-implicit-globals': 'error',
  'no-lonely-if': 'error',
  'no-multi-assign': 'error',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-object-constructor': 'error',
  'no-new-wrappers': 'error',
  'no-param-reassign': 'error',
  'no-return-assign': 'error',
  'no-sequences': 'error',
  'no-unneeded-ternary': 'error',
  'no-useless-call': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-concat': 'error',
  'no-useless-constructor': 'error',
  'no-useless-return': 'error',
  'no-var': 'error',
  'object-shorthand': 'error',
  'prefer-const': 'error',
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'require-await': 'error',
  'require-unicode-regexp': 'error',
}
