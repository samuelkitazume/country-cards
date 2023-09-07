export default function InfoTableRow({
  children,
  label
}: {
  children: React.ReactNode,
  label: string
}) {
  return (
    <div className="grid w-72 grid-cols-3 bg-zinc-950 px-4 py-2">
      <div className="col-span-1 flex items-center text-xs capitalize text-zinc-500">
        {label}
      </div>
      <div className="col-span-2 flex flex-wrap items-center gap-1 text-xs">
        {
          children
        }
      </div>
    </div>
  )
}
