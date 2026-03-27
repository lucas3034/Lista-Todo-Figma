import avatarImg from '../../assets/avatar.png'

export default function ProfileSection() {
  return (
    <div className="flex flex-col items-center gap-2 px-4 py-6">
      <img
        src={avatarImg}
        alt="Jane Doe"
        className="w-[89px] h-[89px] rounded-full object-cover"
      />
      <p className="text-[24px] font-bold text-text-primary mt-1">Jane Doe</p>
      <p className="text-[20px] text-text-muted">janedoe@gmail.com</p>
    </div>
  )
}
