import Image from 'next/image'

export interface FlagProperties {
  url: string
  alt: string
}

export default function Flag({ url, alt }: FlagProperties) {
  return (
    <div className="relative self-center w-72 h-48 mt-12 mb-8 rounded-xl overflow-hidden bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-zinc-950">
      <Image
        className="object-cover"
        src={url}
        fill={true}
        alt={alt}
      />
    </div>
  )
}
