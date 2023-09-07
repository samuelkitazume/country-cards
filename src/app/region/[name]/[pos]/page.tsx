import { RestCountries } from '@/types/RestCountries'
import CountryPageContainer from '@/app/containers/CountryPageContainer'
import Button from '@/app/components/Button'

async function getRegionData(code: string): Promise<RestCountries[]> {
  const res = await fetch(`https://restcountries.com/v3.1/region/${code}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function RegionPage({ params }: { params: { name: string, pos: number } }) {
  const data = await getRegionData(params.name)

  const max = data.length - 1

  const index = +params.pos
  const prev = index === 0 ? max : index - 1
  const next = index === max ? 0 : index + 1

  return (
    <main className="box-border flex min-h-screen flex-col items-center justify-center bg-zinc-900 lg:p-24">
      <section className="flex grow flex-col">
        <CountryPageContainer country={data[index]} hide={true} />
      </section>
      <footer className="flex h-16 w-full justify-stretch gap-8 p-2">
        <Button href={`${prev}`}>Previus</Button>
        <Button href={`${next}`} primary>Next</Button>
      </footer>
    </main>
  )
}
