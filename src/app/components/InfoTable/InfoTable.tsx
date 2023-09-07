"use client"

import { Eye } from 'lucide-react'
import Pill from '@/app/components/pill'
import { useState } from 'react'

export default function InfoTable({
  children,
  hide = false,
  name,
  official
}: {
  children: React.ReactNode,
  hide?: boolean,
  name?: string,
  official?: string
}) {
  const [blurred, setBlurred] = useState(hide)

  return (
    <div className="flex flex-col items-center gap-4 overflow-hidden p-4 pb-10 text-zinc-100">
      {
        blurred
          ? <div className="h-12 w-full animate-pulse rounded-full bg-zinc-800" />
          : <h1 className="text-4xl">{name}</h1>
      }
      {
        blurred
          ? <div className="h-8 w-1/2 animate-pulse rounded-full bg-zinc-800" />
          : <Pill>{official}</Pill>
      }
      <div className="relative mt-4 divide-y divide-dashed divide-zinc-800">
        {
          blurred &&
          <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3" onClick={() => setBlurred((val) => !val)}>
              <Eye className="inline" /><span>View</span>
            </div>
          </div>
        }
        {children}
      </div>
    </div>
  )
}
