export type ExclusiveCardProps = {
  image: string
  title?: string
  subtitle?: string
  onClick?: () => void
  className?: string
  hasOverlay?: boolean
}

export default function ExclusiveCard({
  image,
  title,
  subtitle,
  onClick,
  className,
  hasOverlay = true,
}: ExclusiveCardProps) {
  return (
    <article
      className={`relative w-[260px] md:w-[360px] shrink-0 ${className ?? ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : -1}
    >
      <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/20 transition">
        <div className="aspect-[16/9] relative">
          <img
            src={image}
            alt={title ?? 'Exclusive content'}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />

          {hasOverlay && (
            <>
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[#595959]/30 mix-blend-multiply" />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0) 0%, #000 95%)',
                  }}
                />
              </div>

              <div
                className="
                  pointer-events-none absolute inset-0 rounded-xl
                  opacity-0 group-hover:opacity-100 transition-opacity
                  shadow-[inset_0_0_0_2px_#E96744]
                "
              />

              <div className="absolute left-4 right-4 bottom-3">
                {title && (
                  <h3 className="text-white text-base md:text-lg font-semibold leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,.8)]">
                    {title}
                  </h3>
                )}
                {subtitle && (
                  <p className="text-white/70 text-xs md:text-sm mt-0.5">
                    {subtitle}
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </article>
  )
}
