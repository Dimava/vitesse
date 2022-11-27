// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,

  plugins: [
    'vue',
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    '@antfu',
    'xo',
  ],

  overrides: [
    {
      files: '**/*.md',
      rules: {
        'no-unused-vars': 'off',
      },
    },
  ],

  rules: {
    indent: 'off',
    'no-undef': 'off',
    semi: 'off',
    'object-curly-spacing': 'off',
    'no-void': 'off',
    'capitalized-comments': 'off',
    'new-cap': 'off',
    'no-console': 'warn',
  },

})
