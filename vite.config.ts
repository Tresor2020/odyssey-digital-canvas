import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Add if using React/TypeScript

export default defineConfig({
  base: '/', // Matches your custom domain root
  plugins: [react()], // Include if using React
  build: {
    outDir: 'dist', // Ensure this matches the workflow's publish_dir
    assetsDir: 'assets', // Default, but confirm
  },
});
