import TaskCard from './TaskCard'

export default function TaskList({ tasks, onToggle, onEdit, onDelete }) {
  if (tasks.length === 0) {
    return (
      <p className="text-[20px] text-text-muted text-center py-10">
        No tasks match this filter.
      </p>
    )
  }

  return (
    <div className="flex flex-col gap-[30px] w-full">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
