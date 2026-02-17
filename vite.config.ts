import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'lucide-react'], // Выделяем библиотеки в отдельный файл
          lessons: [
            './components/lessons/Lesson1',
            './components/lessons/Lesson2',
            './components/lessons/Lesson3',
            './components/lessons/Lesson4',
            './components/lessons/Lesson5',
            './components/lessons/Lesson6',
            './components/lessons/Lesson7',
            './components/lessons/Lesson8',
            './components/lessons/Lesson9',
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000, // Увеличиваем лимит предупреждения
  }
})