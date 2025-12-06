import React from 'react'

export type FestivalGenreCardProps = {
  title: string
  subtitle: string
  background: string
  onClick?: () => void
  className?: string
}

export default function FestivalGenreCard({
  title,
  subtitle,
  background,
  onClick,
  className,
}: FestivalGenreCardProps) {
  return (
    <article
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : -1}
      className={`relative w-[170px] md:w-[190px] shrink-0 ${className ?? ''}`}
    >
      <div
        className="
          group overflow-hidden rounded-xl 
          text-white cursor-pointer
          transition-transform hover:-translate-y-0.5
        "
        style={{
          background: `${background}, linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2))`,
        }}
      >
        <div className="aspect-square flex flex-col justify-end p-4">
          <div>
            <h3 className="text-base md:text-lg font-semibold leading-tight">
              {title}
            </h3>
            <p className="text-sm text-white/80 mt-0.5">{subtitle}</p>
          </div>
        </div>
      </div>
    </article>
  )
}
