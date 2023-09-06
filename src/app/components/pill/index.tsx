import classNames from 'classnames'

type Variants = 'primary' | 'secondary' | 'neutral'

export default function Pill({
  children,
  fancy = false,
  variant = 'neutral'
}: {
  children: React.ReactNode,
  fancy?: boolean,
  variant?: Variants
}) {

  const variants: { [K in Variants]: string[] } = {
    primary: [
      `border-primary-400`,
      `bg-gradient-to-b`,
      `from-primary-950`,
      `to-primary-800`,
      `text-primary-400`
    ],
    secondary: [
      `border-secondary-400`,
      `bg-gradient-to-b`,
      `from-secondary-950`,
      `to-secondary-800`,
      `text-secondary-400`
    ],
    neutral: [
      `border-zinc-400`,
      `bg-gradient-to-b`,
      `from-zinc-950`,
      `to-zinc-800`,
      `text-zinc-400`
    ]
  }

  const fancyClasses = variants[variant]

  const classes = classNames(
    "inline rounded-full border px-2 py-1 text-xs",
    fancy ? fancyClasses : ['border-zinc-600', 'text-zinc-300']
  )

  return (
    <div className={classes}>
      {children}
    </div>
  )
}
