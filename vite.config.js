import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'aigc-portfolio'; // ← 改成你的 GitHub 仓库名

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
});