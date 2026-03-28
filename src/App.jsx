import { useState, useMemo, useCallback } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useLocalStorage } from './hooks/useLocalStorage'
import { useThemeContext } from './context/ThemeContext'
import Sidebar from './components/Sidebar/Sidebar'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import FilterBar from './components/FilterBar'
import EmptyState from './components/EmptyState'
import Footer from './components/Footer'

export default function App() {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [filter, setFilter] = useState('all')
  const [sidebarOpen, setSidebarOpen] = useState(() => window.innerWidth >= 768)
  const { theme, toggleTheme } = useThemeContext()

  const filteredTasks = useMemo(() => {
    if (filter === 'active') return tasks.filter((t) => !t.completed)
    if (filter === 'completed') return tasks.filter((t) => t.completed)
    return tasks
  }, [tasks, filter])

  const activeCount = useMemo(() => tasks.filter((t) => !t.completed).length, [tasks])

  const addTask = useCallback((text) => {
    setTasks((prev) => [...prev, { id: crypto.randomUUID(), text, completed: false }])
  }, [setTasks])

  const removeTask = useCallback((id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }, [setTasks])

  const toggleTask = useCallback((id) => {
    setTasks((prev) => prev.map((t) => t.id === id ? { ...t, completed: !t.completed } : t))
  }, [setTasks])

  const editTask = useCallback((id, newText) => {
    setTasks((prev) => prev.map((t) => t.id === id ? { ...t, text: newText } : t))
  }, [setTasks])

  const handleFilterChange = useCallback((f) => setFilter(f), [])
  const handleToggleSidebar = useCallback(() => setSidebarOpen((prev) => !prev), [])

  const isEmpty = tasks.length === 0

  return (
    <div className="flex h-screen overflow-hidden bg-surface font-sans">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-10 md:hidden"
          onClick={handleToggleSidebar}
        />
      )}
      <Sidebar isOpen={sidebarOpen} onToggle={handleToggleSidebar} />

      <main className="flex-1 flex flex-col overflow-y-auto min-w-0 relative">
        <button
          onClick={toggleTheme}
          className="fixed top-3 right-4 sm:top-5 sm:right-8 z-[5] text-text-primary hover:opacity-70 transition-opacity"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon size={28} strokeWidth={1.5} className="sm:w-8 sm:h-8" /> : <Sun size={28} strokeWidth={1.5} className="sm:w-8 sm:h-8" />}
        </button>

        <div className="flex items-center px-4 sm:px-8 md:px-12 xl:px-16 pt-10 sm:pt-16 pb-0 max-w-[689px] w-full self-center mt-0">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={handleToggleSidebar}
              className="md:hidden text-text-primary hover:opacity-70 transition-opacity"
              aria-label="Open menu"
            >
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="4" y1="10" x2="28" y2="10" />
                <line x1="4" y1="16" x2="28" y2="16" />
                <line x1="4" y1="22" x2="28" y2="22" />
              </svg>
            </button>
            <h1 className="text-[32px] sm:text-[48px] font-bold text-text-primary leading-none">My Tasks</h1>
          </div>
        </div>

        <div className="px-4 sm:px-8 md:px-12 xl:px-16 pt-8 flex-1 flex flex-col items-center">
          <div className="w-full max-w-[689px]">
            <TaskInput onAdd={addTask} />

            {!isEmpty && (
              <div className="mt-[30px] mb-[30px]">
                <FilterBar
                  filter={filter}
                  onFilterChange={handleFilterChange}
                  activeCount={activeCount}
                />
              </div>
            )}
          </div>

          {isEmpty ? (
            <EmptyState />
          ) : (
            <div className="w-full max-w-[689px]">
              <TaskList
                tasks={filteredTasks}
                onToggle={toggleTask}
                onEdit={editTask}
                onDelete={removeTask}
              />
            </div>
          )}

          <Footer />
        </div>
      </main>
    </div>
  )
}
