import Image from 'next/image'

export interface FlagProperties {
  url: string
  alt: string
}

export default function Flag({ url, alt = 'Country flag. Sorry, we don\'t have more details at the moment' }: FlagProperties) {
  return (
    <div className="relative mb-8 mt-12 h-48 w-72 self-center overflow-hidden rounded-xl bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-zinc-950">
      <Image
        priority
        className="object-cover"
        src={url}
        fill={true}
        alt={alt}
      />
    </div>
  )
}
