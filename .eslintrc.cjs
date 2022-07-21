/* eslint-disable no-undef */

require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {

  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript',
  ],
  rules: {
    'vue/no-unused-vars': 'warn',
    'no-unused-vars': 'warn',
    // base
    'vue/attributes-order': 'warn',
    'vue/first-attribute-linebreak': ['warn', {
      multiline: 'below',
      singleline: 'ignore',
    }],
    'vue/html-closing-bracket-newline': 'warn',
    'vue/html-closing-bracket-spacing': ['warn'],
    'vue/html-indent': ['warn', 2],
    'vue/html-quotes': ['warn'],
    'vue/html-self-closing': 'warn',
    'vue/max-attributes-per-line': [1, {
      multiline: 1,
      singleline: 5,
    }],
    'vue/multiline-html-element-content-newline': 'warn',
    'vue/mustache-interpolation-spacing': 'warn',
    'vue/no-multi-spaces': ['warn', {
      ignoreProperties: false,
    }],
    'vue/no-spaces-around-equal-signs-in-attribute': ['warn'],
    'vue/order-in-components': 'warn',
    'vue/require-explicit-emits': ['warn'],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/this-in-template': ['warn'],
    'vue/multi-word-component-names': 'off',
  }
}