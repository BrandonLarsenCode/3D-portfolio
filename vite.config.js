import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/3D-portfolio",
  build: {
    minify: 'terser', // Specify Terser as the minifier
    terserOptions: {
      warnings: false,
    },
    chunkSizeWarningLimit: 2000, // Adjust this value to your preferred chunk size limit (in kilobytes)
    rollupOptions: {
      external: ['react-dom/client'],
    },
  },
});