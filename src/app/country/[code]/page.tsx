import { RestCountries } from '@/types/RestCountries'
import CountryPageContainer from '@/app/containers/CountryPageContainer'

async function getCountryData(code: string): Promise<RestCountries[]> {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function CountryPage({ params }: { params: { code: string } }) {
  const [data] = await getCountryData(params.code)

  return (
    <main className="box-border flex min-h-screen flex-col items-center justify-center bg-zinc-900 lg:p-24">
      <CountryPageContainer country={data} />
    </main>
  )
}
