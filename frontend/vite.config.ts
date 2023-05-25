import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@Img': path.resolve(__dirname, './src/assets/img'),
      '@Data': path.resolve(__dirname, './src/assets/data'),
      '@Styles': path.resolve(__dirname, './src/assets/styles'),
      '@Svg': path.resolve(__dirname, './src/assets/svg'),
      '@Components': path.resolve(__dirname, './src/common/components'),
      '@Utils': path.resolve(__dirname, './src/common/utils'),
      '@Shared': path.resolve(__dirname, './src/common/shared'),
      '@Features': path.resolve(__dirname, './src/features'),
      '@Slices': path.resolve(__dirname, './src/redux/slices'),
      '@Store': path.resolve(__dirname, './src/redux/store.ts'),
    },
  },
  plugins: [react()],
})
