// Vue rules
// https://eslint.vuejs.org/rules/
//
// To be used with pluginVue.configs['flat/recommended'] (Vue 3, Flat Config)
//
import type { Linter } from 'eslint'

export const vueRules: Linter.RulesRecord = {
  // --- Formatting rules disabled in favour of Prettier ---
  'vue/singleline-html-element-content-newline': 'off',
  'vue/max-attributes-per-line': 'off',

  // --- Enforce self-closing on void HTML elements (e.g. <br />) ---
  'vue/html-self-closing': ['error', { html: { void: 'always' } }],

  // --- Security ---
  'vue/no-v-html': 'error',

  // --- Template quality ---
  'vue/attributes-order': 'error',
  'vue/html-button-has-type': 'error',

  // Check that all components used in <template> are explicitly imported
  'vue/no-undef-components': 'error',

  // --- Composition API / Script Setup enforcement ---

  // Restrict to Composition API and <script setup> only (no Options API)
  'vue/component-api-style': ['error', ['script-setup', 'composition']],

  // Enforce TypeScript-style prop declarations: defineProps<{ ... }>()
  // instead of runtime declarations defineProps({ ... })
  'vue/define-props-declaration': ['error', 'type-based'],

  // Enforce TypeScript-style emit declarations: defineEmits<{ ... }>()
  'vue/define-emits-declaration': ['error', 'type-based'],

  // Prefer useTemplateRef() over ref() for template refs (requires Vue >= 3.5)
  'vue/prefer-use-template-ref': 'error',

  // --- SFC structure ---
  'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
  'vue/block-tag-newline': 'error',
  'vue/define-macros-order': 'error',

  // --- Naming ---
  'vue/custom-event-name-casing': 'error',

  // --- Props ---
  // Not needed with TypeScript: types already enforce prop shapes
  'vue/require-default-prop': 'off',

  // --- Allow default export for Vue SFCs ---
  // vue/component-api-style already enforces script-setup style;
  // this override is still needed because import/no-default-export
  // (set to 'error' globally) would otherwise flag .vue files.
  'import/no-default-export': 'off',

  'vue/multi-word-component-names': 'off',
}
