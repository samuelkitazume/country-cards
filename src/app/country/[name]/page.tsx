import Image from 'next/image'

async function getData(name: string) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function CountryName({ params }: { params: { name: string } }) {
  const [data] = await getData(params.name)
  console.log('data', data)

  return (
    <main className="border-box flex min-h-screen flex-col items-center justify-between p-24">
      <div className="rounded-3xl w-96 h-[70vh] bg-gradient-to-b from-zinc-900 to-zinc-950 flex item-center flex-col overflow-hidden border-2 border-zinc-600">
        <div className="w-full h-64 bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 self-center relative">
          <Image
            className="object-cover"
            src={data.flags.svg}
            fill={true}
            alt={data.flags.alt}
          />
        </div>
        <div>
          {data.name.common}
        </div>
        <div>
          <small>{data.name.official}</small>
        </div>
      </div>
    </main>
  )
}
