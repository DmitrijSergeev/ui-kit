import { resolve } from 'path'

import { defineConfig } from 'vite'

import { devDependencies, peerDependencies } from './package.json'

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      // the proper extensions will be added
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        'react/jsx-runtime',
        ...Object.keys(peerDependencies),
        ...Object.keys(devDependencies),
      ],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
})
