
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'figma:asset/cab3bd892b06f5008d7221e97d84dbd5153e1f1c.png': path.resolve(__dirname, './src/assets/cab3bd892b06f5008d7221e97d84dbd5153e1f1c.png'),
      'figma:asset/1df0aa5645ac6689ada2f014da20f342dac10e67.png': path.resolve(__dirname, './src/assets/1df0aa5645ac6689ada2f014da20f342dac10e67.png'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});