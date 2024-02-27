import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  assetsInclude: ['**/*.glb'],
  plugins: [tsconfigPaths(),react()],
})
