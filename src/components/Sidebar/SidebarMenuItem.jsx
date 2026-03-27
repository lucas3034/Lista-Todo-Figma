export default function SidebarMenuItem({ icon: Icon, label, isActive, isCollapsed, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 transition-all duration-300 overflow-hidden rounded-xl
        ${isCollapsed ? 'justify-center w-[90px] h-[54px]' : 'px-4 py-3 w-[291px]'}
        ${isActive ? 'bg-menu-active text-menu-active-text font-bold' : 'text-text-primary hover:opacity-70'}
      `}
    >
      <Icon size={32} strokeWidth={isActive ? 2.5 : 2} className="shrink-0" />
      <span
        className={`text-[24px] whitespace-nowrap transition-all duration-300 overflow-hidden
          ${isCollapsed ? 'opacity-0 max-w-0' : 'opacity-100 max-w-[200px]'}
        `}
      >
        {label}
      </span>
    </button>
  )
}
