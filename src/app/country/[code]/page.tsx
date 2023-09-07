import InfoTable from '@/app/components/InfoTable/InfoTable'
import InfoTableRow from '@/app/components/InfoTable/InfoTableRow'
import Flag from '@/app/components/Flag'
import Pill from '@/app/components/pill'
import { RestCountries } from '@/types/RestCountries'
import Link from 'next/link'

// TODO: Remove this awful any
async function getCountryData(code: string): Promise<RestCountries[]> {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function CountryName({ params }: { params: { code: string } }) {
  const [data] = await getCountryData(params.code)

  const information: [string, () => any][] = [
    ['capital', function () {
      return data.capital[0]
    }],
    ['population', function () {
      return data.population.toLocaleString("en-US")
    }],
    ['independent', function () {
      return data.independent ? 'Yes' : 'No'
    }],
    ['continents', function () {
      return data.continents?.map((continent: string, index: number) => (
        <Pill key={`${continent}-${index}`}>{continent}</Pill>
      ))
    }],
    ['borders with', function () {
      return data.borders?.map((countryCode: string, index: number) => (
        <Pill key={`${countryCode}-${index}`}>
          <Link href={countryCode}>
            {countryCode}
          </Link>
        </Pill>
      ))
    }]
  ]

  return (
    <main className="box-border flex min-h-screen flex-col items-center justify-center bg-zinc-900 lg:p-24">
      <Flag url={data.flags.svg} alt={data.flags.alt} />
      <InfoTable hide name={data.name.common} official={data.name.official}>
        {
          information.map((piece, index) =>
          (
            <InfoTableRow key={`${piece[0]}-${index}`} label={piece[0]}>
              <>{piece[1]()}</>
            </InfoTableRow>
          )
          )
        }
      </InfoTable>
    </main>
  )
}
