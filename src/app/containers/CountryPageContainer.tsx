"use client"

import InfoTable from '@/app/components/InfoTable/InfoTable'
import InfoTableRow from '@/app/components/InfoTable/InfoTableRow'
import Flag from '@/app/components/Flag'
import Pill from '@/app/components/pill'
import { RestCountries } from '@/types/RestCountries'
import Link from 'next/link'

export default function CountryPageContainer({ country, hide = false }: { country: RestCountries, hide?: boolean }) {
  const information: [string, () => any][] = [
    ['capital', function () {
      return country.capital?.[0]
    }],
    ['population', function () {
      return country.population.toLocaleString("en-US")
    }],
    ['independent', function () {
      return country.independent ? 'Yes' : 'No'
    }],
    ['continents', function () {
      return country.continents?.map((continent: string, index: number) => (
        <Pill key={`${continent}-${index}`}>{continent}</Pill>
      ))
    }],
    ['borders with', function () {
      return country.borders?.map((countryCode: string, index: number) => (
        <Pill key={`${countryCode}-${index}`}>
          <Link href={`/country/${countryCode}`}>
            {countryCode}
          </Link>
        </Pill>
      ))
    }]
  ]

  return (
    <>
      <Flag url={country?.flags?.svg} alt={country?.flags?.alt} />
      <InfoTable hide={hide} name={country.name.common} official={country.name.official}>
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
    </>
  )
}
