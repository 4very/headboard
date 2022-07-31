import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'

import ViteYaml from '@modyfi/vite-plugin-yaml'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    plugins: [
      eslintPlugin(),
      ViteYaml()
    ]
  },

  // nitro: {
  //   esbuild: {
  //     options: {
  //       target: 'esnext'
  //     }
  //   }
  // },

  /*
   ** Nuxt modules
   */
  modules: [
    // https://tailwindcsss.nuxtjs.org
    'nuxt-windicss'
  ],

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
})
