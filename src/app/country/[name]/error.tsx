'use client'

export default function CountryName() {
  return (
    <main className="border-box flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-1 w-96 h-[70vh] rounded-3xl bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
        <div className="rounded-3xl w-full h-full bg-gradient-to-b from-zinc-900 to-zinc-950 p-4">
          <div>
            No country found
          </div>
        </div>
      </div>
    </main>
  )
}
