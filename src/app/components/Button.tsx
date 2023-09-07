import classNames from 'classnames'
import Link from 'next/link'

export default function Button({
  children,
  text,
  href,
  inline = false,
  primary = false,
  dark = false
}: {
  children?: React.ReactNode
  href: string
  text?: string
  inline?: boolean
  primary?: boolean
  dark?: boolean
}) {
  const base = classNames("flex", "flex-1", "items-center", "justify-center", "w-full")
  const borderClasses = classNames("rounded-lg", "border")
  const variant = {
    primary: [
      `border-primary-400`,
      'bg-primary-700',
      `text-primary-100`
    ],
    neutral: [
      `border-zinc-400`,
      `text-zinc-200`
    ]
  }

  const classes = classNames(base, inline ? [] : [borderClasses, variant[primary ? 'primary' : 'neutral']])

  return (
    <Link className={classes} href={href}>{text ? text : children}</Link>
  )
}
