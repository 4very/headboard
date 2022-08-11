import { defineNuxtConfig } from 'nuxt';
// import eslintPlugin from 'vite-plugin-eslint';

import ViteYaml from '@modyfi/vite-plugin-yaml';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  vite: {
    plugins: [
      ViteYaml()
    ]
  },
  /*
   ** Nuxt modules
   */
  modules: [
    'nuxt-windicss',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],

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
        experimentalDecorators: true,
        types: [
          '@modyfi/vite-plugin-yaml/modules'
        ]
      },
      exclude: ['node_modules', '.nuxt', 'dist']
    }
  }
});
