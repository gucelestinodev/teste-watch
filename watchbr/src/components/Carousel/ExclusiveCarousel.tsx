import React, { useRef } from 'react'
import ExclusiveCard, { type ExclusiveCardProps } from '../Card/ExclusiveCard'

export type ExclusiveCarouselItem = Pick<
  ExclusiveCardProps,
  'image' | 'title' | 'subtitle' | 'onClick' | 'hasOverlay'
>

export type ExclusiveCarouselProps = {
  title?: string
  items: ExclusiveCarouselItem[]
}

export default function ExclusiveCarousel({ title, items }: ExclusiveCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const state = useRef<{ down: boolean; startX: number }>({
    down: false,
    startX: 0,
  })

  const onDown = (x: number) => {
    const el = scrollerRef.current
    if (!el) return
    state.current.down = true
    state.current.startX = x + el.scrollLeft
    el.classList.add('grabbing')
  }

  const onMove = (x: number) => {
    const el = scrollerRef.current
    if (!el || !state.current.down) return
    el.scrollLeft = state.current.startX - x
  }

  const onUp = () => {
    const el = scrollerRef.current
    state.current.down = false
    el?.classList.remove('grabbing')
  }

  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-[32px] md:text-xl font-semibold mb-3">
            {title}
          </h2>
        )}

        <div
          ref={scrollerRef}
          className="
            overflow-x-auto pr-1
            scroll-smooth
            snap-x snap-mandatory
            no-scrollbar select-none
            cursor-grab
          "
          onMouseDown={(e) => onDown(e.clientX)}
          onMouseMove={(e) => onMove(e.clientX)}
          onMouseLeave={onUp}
          onMouseUp={onUp}
          onTouchStart={(e) => onDown(e.touches[0].clientX)}
          onTouchMove={(e) => onMove(e.touches[0].clientX)}
          onTouchEnd={onUp}
        >
          <div className="flex gap-4 md:gap-5">
            {items.map((item, i) => (
              <div key={i} className="snap-start">
                <ExclusiveCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
