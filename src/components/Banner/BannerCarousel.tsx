import { useEffect, useState } from "react"

export type BannerItem = {
  image: string
  title?: string
  subtitle?: string
  buttonLabel?: string
  buttonColor?: string
  onClickButton?: () => void
}

export type BannerCarouselProps = {
  items: BannerItem[]
  autoPlay?: boolean
  interval?: number
}

export default function BannerCarousel({
  items,
  autoPlay = true,
  interval = 4500,
}: BannerCarouselProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % items.length)
    }, interval)
    return () => clearInterval(timer)
  }, [items.length, autoPlay, interval])

  const goTo = (i: number) => setIndex(i)
  const current = items[index]

  return (
    <section className="py-8">
      <div className="container mx-auto px-5">
        <div className="w-full bg-white p-4 shadow-lg">
          <div className="relative overflow-hidden">
            <img
              src={current.image}
              alt={current.title ?? "Banner"}
              className="w-full h-[220px] md:h-80 object-cover"
            />

            {current.buttonLabel && (
              <button
                onClick={current.onClickButton}
                className="
                  absolute right-6 bottom-6 px-5 py-2
                  text-white font-semibold text-sm shadow-md
                  hover:opacity-90 transition
                "
                style={{
                  backgroundColor: current.buttonColor ?? "#16a34a",
                }}
              >
                {current.buttonLabel} →
              </button>
            )}
          </div>

          <div className="flex justify-center gap-2 mt-3">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`
                  h-2.5 w-2.5 rounded-full transition 
                  ${i === index ? "bg-[#E96744]" : "bg-[#E96744]/50"}
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
