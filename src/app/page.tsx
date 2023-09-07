import Button from "@/app/components/Button";

export default function Home() {
  const continents = [
    'africa',
    'south america',
    'north america',
    'central america',
    'europe',
    'asia',
    'oceania',
  ]
  return (
    <main className="box-border flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-900 p-4 lg:p-24">
      {
        continents.map((continent, index) => (
          <Button key={`${continent}-${index}`} href={`/region/${continent}`} text={continent} />
        ))
      }
    </main>
  )
}
