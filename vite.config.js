// configuring for legacy browser support with supporting polyfills
// https://github.com/vitejs/vite/tree/main/packages/plugin-legacy
import legacy from '@vitejs/plugin-legacy';

// configuring for multi-page apps
// https://vitejs.dev/guide/build.html#multi-page-app
import { resolve } from 'path';
import { defineConfig } from 'vite';

module.exports = defineConfig({
  plugins: [
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      polyfills: ['es/array/flat-map', 'es/array/some', 'es/array/from'],
      modernPolyfills: ['es/array/flat-map', 'es/array/some', 'es/array/from']
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        sent: resolve(__dirname, 'sent.html')
      }
    }
  }
});
