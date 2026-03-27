import { useState, useRef, useEffect } from 'react'
import { Square, SquareCheck, Pencil, Trash2 } from 'lucide-react'

export default function TaskCard({ task, onToggle, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(task.text)
  const inputRef = useRef(null)

  useEffect(() => {
    if (isEditing) inputRef.current?.focus()
  }, [isEditing])

  const handleEditSubmit = () => {
    const trimmed = editValue.trim()
    if (trimmed) onEdit(task.id, trimmed)
    setIsEditing(false)
  }

  const handleEditKeyDown = (e) => {
    if (e.key === 'Enter') handleEditSubmit()
    if (e.key === 'Escape') {
      setEditValue(task.text)
      setIsEditing(false)
    }
  }

  return (
    <div className="w-full min-h-[60px] sm:min-h-[84px] py-3 sm:py-0 rounded-xl bg-card shadow-card flex items-center px-3 sm:px-6 gap-3 sm:gap-4">
      <button
        onClick={() => onToggle(task.id)}
        className="text-text-primary hover:opacity-70 transition-opacity shrink-0"
        aria-label={task.completed ? 'Mark as active' : 'Mark as completed'}
      >
        {task.completed ? (
          <SquareCheck size={20} strokeWidth={2} className="sm:w-6 sm:h-6" />
        ) : (
          <Square size={20} strokeWidth={2} className="sm:w-6 sm:h-6" />
        )}
      </button>

      <div className="flex-1 min-w-0 relative">
        {isEditing ? (
          <input
            ref={inputRef}
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleEditKeyDown}
            onBlur={handleEditSubmit}
            className="w-full bg-transparent outline-none text-[16px] sm:text-[24px] text-text-primary font-sans border-b border-text-muted"
          />
        ) : (
          <span
            className={`text-[16px] sm:text-[24px] block truncate ${
              task.completed ? 'text-text-muted line-through' : 'text-text-primary'
            }`}
          >
            {task.text}
          </span>
        )}
      </div>

      <div className="flex items-center gap-3 sm:gap-[26px] shrink-0">
        <button
          onClick={() => {
            setEditValue(task.text)
            setIsEditing(true)
          }}
          className="text-text-primary hover:opacity-70 transition-opacity"
          aria-label="Edit task"
        >
          <Pencil size={18} strokeWidth={2} className="sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-text-primary hover:opacity-70 transition-opacity"
          aria-label="Delete task"
        >
          <Trash2 size={18} strokeWidth={2} className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  )
}
