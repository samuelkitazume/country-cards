import { redirect } from 'next/navigation'

export default async function RegionPage({ params }: { params: { name: string, pos: number } }) {
  redirect(`./${params.name}/0`)
}
