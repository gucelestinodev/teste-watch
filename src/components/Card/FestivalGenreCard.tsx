import watermarkW from '../../assets/imageW.png'

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
      className={`relative w-52 md:w-52 shrink-0 ${className ?? ''}`}
    >
      <div
        className="
          group relative overflow-hidden rounded-xl
          text-white cursor-pointer
          hover:border-4 border-transparent
          hover:border-[#E96744]
          transition-colors duration-200
          /* sem translate/scale: nada de “crescer” no hover */
        "
        style={{
          background: `${background}, linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2))`,
        }}
      >
        <img
          src={watermarkW}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="
            pointer-events-none select-none
            absolute bottom-2 right-2
            w-14 md:w-30
            opacity-20
          "
        />

        <div className="aspect-square flex flex-col justify-end p-4">
          <div>
            <h3 className="text-base md:text-[32px] font-semibold leading-tight">
              {title}
            </h3>
            <p className="text-[24px] text-white/60">{subtitle}</p>
          </div>
        </div>
      </div>
    </article>
  )
}
