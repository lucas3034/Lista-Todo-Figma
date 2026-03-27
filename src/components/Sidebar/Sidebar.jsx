import { ListTodo, Settings, Menu } from 'lucide-react'
import ProfileSection from './ProfileSection'
import SidebarMenuItem from './SidebarMenuItem'

export default function Sidebar({ isOpen, onToggle }) {
  return (
    <aside
      className={`flex flex-col h-screen bg-sidebar shadow-sidebar transition-all duration-300 z-20
        fixed md:relative
        ${isOpen ? 'w-[359px] translate-x-0' : 'w-[80px] -translate-x-full md:translate-x-0'}
      `}
    >
      <div className={`flex items-center ${isOpen ? 'justify-end px-6' : 'justify-center'} pt-6 pb-2`}>
        <button
          onClick={onToggle}
          className="text-text-primary hover:opacity-70 transition-opacity p-2"
          aria-label="Toggle sidebar"
        >
          <Menu size={32} strokeWidth={2} />
        </button>
      </div>

      {isOpen ? (
        <>
          <ProfileSection />
          <div className="mx-auto w-[291px] h-px bg-text-muted opacity-40" />
          <nav className="flex flex-col items-center gap-3 mt-6 px-8">
            <SidebarMenuItem icon={ListTodo} label="My Tasks" isActive={true} isCollapsed={false} />
            <SidebarMenuItem icon={Settings} label="Settings" isActive={false} isCollapsed={false} />
          </nav>
        </>
      ) : (
        <nav className="flex flex-col items-center gap-6 mt-4">
          <SidebarMenuItem icon={ListTodo} label="My Tasks" isActive={true} isCollapsed={true} />
          <SidebarMenuItem icon={Settings} label="Settings" isActive={false} isCollapsed={true} />
        </nav>
      )}
    </aside>
  )
}
