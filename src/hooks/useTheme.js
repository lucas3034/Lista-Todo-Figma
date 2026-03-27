import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export function useTheme() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#101828' : '#f3f4f6')
  }, [theme])

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))

  return { theme, toggleTheme }
}
