// eslint-disable-next-line nuxt/no-cjs-in-config
const colors = require('tailwindcss/colors')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'head',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.module.rules.push({
        test: /config\/.*\.ya?ml$/,
        use: 'yaml-loader',
      })
    },
    // extend(config) {
    //   config.module.rules.push({
    //     test: /\.ts$/,
    //     exclude: /node_modules|vue\/src/,
    //     loader: 'ts-loader',
    //     options: { appendTsSuffixTo: [/\.vue$/] },
    //   })
    // },
  },

  tailwindcss: {
    config: {
      mode: 'jit',
      darkMode: 'class',
      content: ['./src/**/*.{js,jsx,ts,tsx}'],
      variants: {
        opacity: ({ after }) => after(['disabled']),
      },
      theme: {
        colors: {
          'off-white1': '#f0ebd8',
          'off-white2': '#f4ece2',
          blue1: '#748cab',
          blue2: '#3e5c76',
          blue3: '#1d2d44',
          blue4: '#0d1321',
          green1: '#a2a182',
          green2: '#687259',
          tan: '#e6cebc',
          red1: '#ba6f4d',
          red2: '#8e412e',
          rose: colors.rose,
        },
        extend: {
          boxShadow: {
            '3xl':
              'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            '4xl': 'rgb(38, 57, 77) 0px 20px 30px -10px',
            'inner-md':
              'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;',
            'inner-lg':
              'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset',
            'inner-xl':
              'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
            'inner-2xl':
              'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
          },
          padding: {
            '1/2': '50%',
            full: '100%',
          },
          minHeight: {
            'screen-75': '75vh',
          },
        },
      },
      plugins: [],
    },
  },
}
