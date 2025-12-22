// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'aigc-portfolio'; // ← 与你的仓库名一致

export default defineConfig({
  base: `/${repoName}/`, // ✅ 关键！必须加仓库名前缀
  plugins: [react()],
});