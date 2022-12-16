/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';

const vitestConfig: VitestUserConfigInterface = {
  test: {
    // vitest config, with helpful vitest typing :)
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //@ts-expect-error
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
})