type SectionHeadingProps = {
  id: string
  eyebrow: string
  title: string
  highlight: string
  description: string
}

export function SectionHeading({ id, eyebrow, title, highlight, description }: SectionHeadingProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
      <div>
        <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-12 bg-muted-foreground/40" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 id={id} className="mt-5 font-serif text-5xl font-bold leading-[1.02] tracking-tight text-foreground text-balance md:text-6xl lg:text-7xl">
          {title} <span className="block italic text-primary">{highlight}</span>
        </h2>
      </div>
      <p className="max-w-md text-lg leading-relaxed text-muted-foreground lg:justify-self-end">{description}</p>
    </div>
  )
}
