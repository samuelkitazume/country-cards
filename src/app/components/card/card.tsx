export default function Card({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-[70vh] w-96 flex-col items-center rounded-3xl bg-gradient-to-b from-stone-800 to-zinc-950 shadow-lg shadow-zinc-400">
      {children}
    </div>
  )
}
