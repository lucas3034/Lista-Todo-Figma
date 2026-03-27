import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function TaskInput({ onAdd }) {
  const [value, setValue] = useState('')

  const handleSubmit = () => {
    const trimmed = value.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setValue('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit()
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-[27px] w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your task here.."
        className="w-full sm:flex-1 sm:w-auto h-[52px] sm:h-[59px] px-4 sm:px-5 rounded-xl bg-input-bg text-text-primary text-[16px] sm:text-[24px] placeholder:text-[#a9a9a9] shadow-card outline-none border-none font-sans"
      />
      <button
        onClick={handleSubmit}
        className="h-[52px] sm:h-[59px] px-5 sm:px-6 rounded-xl bg-btn-primary text-white text-[16px] sm:text-[24px] font-bold shadow-card flex items-center justify-center gap-2 hover:opacity-80 transition-opacity whitespace-nowrap sm:w-auto w-full"
      >
        <Plus size={20} strokeWidth={2.5} className="sm:w-6 sm:h-6" />
        Add
      </button>
    </div>
  )
}
