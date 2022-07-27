module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
    'plugin:vue/vue3-recommended',
  ],
  plugins: ['eslint-plugin-vue'],
  // add your custom rules here
  rules: {
    'vue/html-indent': 0,
    'vue/html-closing-bracket-newline': 0,
  },
}
