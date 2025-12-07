import { useEffect, useMemo, useState } from "react"
import arrow from '../../assets/arrow.svg'

export type BannerItem = {
  image: string
  title?: string
  subtitle?: string
  buttonLabel?: string
  buttonColor?: string
  onClickButton?: () => void
  buttonHref?: string
  buttonTarget?: "_self" | "_blank" | "_parent" | "_top"
  focalPoint?: string
}

export type BannerCarouselProps = {
  items: BannerItem[]
  autoPlay?: boolean
  interval?: number
  mobileFit?: "contain" | "cover"
  mobileHeight?: number
}

function ButtonInforme({
  label,
  href,
  target = "_self",
  onClick,
  bg = "#16a34a",
}: {
  label: string
  href?: string
  target?: "_self" | "_blank" | "_parent" | "_top"
  onClick?: () => void
  bg?: string
}) {
  const className = `
    absolute right-4 bottom-4 md:right-6 md:bottom-6
    inline-flex items-center justify-center gap-2
    px-5 py-0
    h-[35px] w-auto
    text-white font-medium text-[16px] leading-none
    shadow-md hover:opacity-90 transition
  `
  return href ? (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={className}
      style={{
        backgroundColor: bg
      }}
    >
      <span>{label}</span>
      <img src={arrow} alt="" aria-hidden="true" className="w-4 h-4 inline-block" />
    </a>
  ) : (
    <button
      type="button"
      onClick={onClick}
      className={className}
      style={{
        backgroundColor: bg
      }}
    >
      <span>{label}</span>
      <img src={arrow} alt="" aria-hidden="true" className="w-4 h-4 inline-block" />
    </button>
  )
}

export default function BannerCarousel({
  items,
  autoPlay = true,
  interval = 4500,
  mobileFit = "contain",
  mobileHeight = 260,
}: BannerCarouselProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!autoPlay || items.length <= 1) return
    const timer = setInterval(() => setIndex(i => (i + 1) % items.length), interval)
    return () => clearInterval(timer)
  }, [items.length, autoPlay, interval])

  const current = items[index]

  const imgFitClass = useMemo(() => {
    const mobile = mobileFit === "contain" ? "object-contain" : "object-cover"
    return `object-center ${mobile} md:object-cover`
  }, [mobileFit])

  return (
    <section className="py-8">
      <div className="container mx-auto px-5">
        <div className="w-full bg-white px-4 pt-4 pb-3 shadow-lg">
          <div
            className="relative overflow-hidden bg-black h-(--mh) md:h-[400px]"
            style={{ ["--mh" as any]: `${mobileHeight}px` }}
          >
            <img
              src={current.image}
              alt={current.title ?? "Banner"}
              className={`w-full ${imgFitClass} transition-all h-(--mh) md:h-full`}
              style={{ objectPosition: current.focalPoint ?? "center center" }}
            />

            {current.buttonLabel && (
              <ButtonInforme
                label={current.buttonLabel}
                href={current.buttonHref}
                target={current.buttonTarget}
                onClick={current.onClickButton}
                bg={current.buttonColor}
              />
            )}
          </div>

          <div className="flex justify-center gap-1 mt-3">
            {items.map((_, i) => {
              const active = i === index
              return (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Ir para banner ${i + 1}`}
                  aria-current={active ? 'true' : 'false'}
                  className={`
                    w-3 h-3 rounded-full transition
                    ${active ? 'bg-[#E96744] scale-100' : 'bg-[#E96744]/50 scale-[0.6667]'}
                  `}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
