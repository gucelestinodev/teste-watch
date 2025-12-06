export type ShowCardProps = {
  image: string
  title: string
  onClick?: () => void
  className?: string
  aspect?: '3/4' | '16/9' | '1/1'
}

const ratioClass: Record<NonNullable<ShowCardProps['aspect']>, string> = {
  '3/4': 'aspect-[3/4]',
  '16/9': 'aspect-[16/9]',
  '1/1': 'aspect-square',
}

export default function ShowCard({
  image,
  title,
  onClick,
  className,
  aspect = '3/4',
}: ShowCardProps) {
  return (
    <article
      className={`relative w-[220px] md:w-[260px] shrink-0 ${className ?? ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : -1}
    >
      <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/20 transition">
        <div className={`${ratioClass[aspect]} relative`}>
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />

          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[#595959]/35 mix-blend-multiply" />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, #000 90%)' }}
            />
          </div>

          <div
            className="
              pointer-events-none absolute inset-0 rounded-xl
              opacity-0 group-hover:opacity-100 transition-opacity
              shadow-[inset_0_0_0_2px_#E96744]
            "
          />

          <div className="absolute left-0 right-0 top-[78%] -translate-y-1/2 text-center px-3">
            <h3 className="text-white text-[18px] md:text-base font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,.8)]">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </article>
  )
}
