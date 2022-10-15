import { defineNuxtConfig } from 'nuxt';
// import eslintPlugin from 'vite-plugin-eslint';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  css: [
    '~/assets/css/main.css'
  ],
  /*
   ** Nuxt modules
   */
  modules: [
    'nuxt-windicss',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore']
      }
    ],
    '@vueuse/nuxt'
  ],
  imports: {
    dirs: ['stores']
  },

  components: {
    global: true,
    dirs: ['~/components']
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        jsx: 'preserve',
        target: 'ES2018',
        module: 'ESNext',
        moduleResolution: 'Node',
        lib: ['ESNext', 'ESNext.AsyncIterable', 'DOM'],
        esModuleInterop: true,
        allowJs: true,
        sourceMap: true,
        strict: true,
        noEmit: true,
        experimentalDecorators: true
      },
      exclude: ['node_modules', '.nuxt', 'dist']
    }
  }
});
