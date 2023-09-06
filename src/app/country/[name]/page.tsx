import Card from '@/app/components/card'
import Pill from '@/app/components/pill'

// TODO: Remove this awful any
async function getCountryData(name: string): Promise<any> {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function CountryName({ params }: { params: { name: string } }) {
  const [data] = await getCountryData(params.name)

  const information: [string, () => any][] = [
    ['capital', function () {
      return (this as any).capital[0]
    }],
    ['population', function () {
      return (this as any).population.toLocaleString("en-US")
    }],
    ['independent', function () {
      return (this as any).independent ? 'Yes' : 'No'
    }],
    ['continents', function () {
      return (this as any).continents?.map((continent: string, index: number) => (
        <Pill key={`${continent}-${index}`}>{continent}</Pill>
      ))
    }],
    ['borders with', function () {
      return (this as any).borders?.map((countryCode: string, index: number) => (
        <Pill key={`${countryCode}-${index}`}>{countryCode}</Pill>
      ))
    }]
  ]

  return (
    <main className="box-border flex min-h-screen flex-col items-center justify-between p-24">
      <Card.Root>
        <Card.Flag url={data.flags.svg} alt={data.flags.alt} />
        <Card.Content>
          <h1 className="mt-5 text-4xl">{data.name.common}</h1>
          <Pill>{data.name.official}</Pill>
          <div className="mt-4 divide-y divide-dashed divide-zinc-800">
            {
              information.map((piece, index) =>
              (
                <div key={`${piece[0]}-${index}`} className="grid w-72 grid-cols-3 bg-zinc-900 px-4 py-2">
                  <div className="col-span-1 flex items-center text-xs capitalize text-zinc-500">
                    {piece[0]}
                  </div>
                  <div className="col-span-2 flex flex-wrap items-center gap-1 text-xs">
                    {(piece[1].bind(data))()}
                  </div>
                </div>
              )
              )
            }
          </div>
        </Card.Content>
      </Card.Root>
    </main>
  )
}
