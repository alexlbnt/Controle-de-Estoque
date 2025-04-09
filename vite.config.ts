import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        open: true,
        fs: {
            strict: false,
        },
        // Redireciona todas as rotas para index.html
        middlewareMode: false,
    },
    build: {
        outDir: 'dist',
    },
    resolve: {
        alias: {
            '@': '/src',
        },
    },
});