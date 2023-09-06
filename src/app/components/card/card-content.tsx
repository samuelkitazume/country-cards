import { Eye } from 'lucide-react'

export default function CardContent({
  children,
  hide = false
}: {
  children: React.ReactNode,
  hide?: boolean
}) {
  return (
    <div className="relative flex flex-col items-center gap-4 overflow-hidden p-4 pb-10 text-zinc-100">
      {
        hide &&
        <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-lg">
          <div className="flex items-center justify-center gap-3">
            <Eye className="inline" /><span>View</span>
          </div>
        </div>
      }
      {children}
    </div>
  )
}
