export default function Card({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-[70vh] w-96 flex-col items-center rounded-3xl bg-main-background bg-left-bottom shadow-lg shadow-black ">
      {children}
    </div>
  )
}
