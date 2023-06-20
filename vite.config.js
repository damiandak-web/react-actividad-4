import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://damiandak-web.github.io/react-actividad-4/",
  plugins: [react()],
})
