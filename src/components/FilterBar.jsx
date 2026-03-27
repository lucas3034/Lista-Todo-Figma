const FILTERS = ['all', 'active', 'completed']

export default function FilterBar({ filter, onFilterChange, activeCount }) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-1 text-[14px] sm:text-[20px]">
        {FILTERS.map((f, i) => (
          <span key={f} className="flex items-center">
            <button
              onClick={() => onFilterChange(f)}
              className={`capitalize transition-colors hover:opacity-80 ${
                filter === f ? 'text-text-primary font-bold' : 'text-text-muted'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
            {i < FILTERS.length - 1 && (
              <span className="text-text-muted mx-1">|</span>
            )}
          </span>
        ))}
      </div>
      <span className="text-[14px] sm:text-[20px] text-text-muted">
        {activeCount} {activeCount === 1 ? 'task' : 'tasks'} left
      </span>
    </div>
  )
}
