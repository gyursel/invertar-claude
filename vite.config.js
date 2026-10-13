import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: process.env.BASE44_PREVIEW_MODE === '1' ? true : false,
  },
});
