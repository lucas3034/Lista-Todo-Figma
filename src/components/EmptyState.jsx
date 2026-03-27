import emptyStateImg from '../assets/empty-state.png'

export default function EmptyState() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 py-8 w-full">
      <img
        src={emptyStateImg}
        alt="No tasks"
        className="w-[60%] sm:w-[40%] max-w-[500px] shrink-0"
      />
      <div className="text-[18px] sm:text-[24px] italic text-text-primary max-w-[402px] text-center sm:text-left">
        <p>Empty as my motivation on Monday 😅.</p>
        <p>Let&apos;s start adding stuff!</p>
      </div>
    </div>
  )
}
