module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended'
  ],
  plugins: ['eslint-plugin-vue'],
  // add your custom rules here
  rules: {
    // 'vue/html-indent': 0,
    // 'vue/html-closing-bracket-newline': 0,
    // 'vue/first-attribute-linebreak': 0,
    indent: ['error', 2],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    semi: ['error', 'always'],
    'linebreak-style': ['error', 'unix']
  }
};
