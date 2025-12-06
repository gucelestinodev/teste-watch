import React, { useRef } from 'react'
import FestivalGenreCard, {
  type FestivalGenreCardProps,
} from '../Card/FestivalGenreCard'

export type FestivalItem = Pick<
  FestivalGenreCardProps,
  'title' | 'subtitle' | 'background' | 'onClick'
>

export type FestivalCarouselProps = {
  items: FestivalItem[]
}

export default function FestivalCarousel({ items }: FestivalCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const drag = useRef({ down: false, startX: 0, scrollLeft: 0 })

  const onDown = (clientX: number) => {
    const el = scrollerRef.current
    if (!el) return
    drag.current.down = true
    drag.current.startX = clientX
    drag.current.scrollLeft = el.scrollLeft
    el.style.cursor = "grabbing"
  }

  const onMove = (clientX: number) => {
    const el = scrollerRef.current
    if (!el || !drag.current.down) return
    const walk = clientX - drag.current.startX
    el.scrollLeft = drag.current.scrollLeft - walk
  }

  const onUp = () => {
    drag.current.down = false
    if (scrollerRef.current) scrollerRef.current.style.cursor = "grab"
  }

  return (
    <div className="w-full overflow-hidden">  
      <div
        ref={scrollerRef}
        className="
          flex gap-4 md:gap-5
          overflow-x-auto
          no-scrollbar
          cursor-grab
          select-none
          w-full
          max-w-full
        "
        onMouseDown={(e) => onDown(e.clientX)}
        onMouseMove={(e) => onMove(e.clientX)}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        onTouchStart={(e) => onDown(e.touches[0].clientX)}
        onTouchMove={(e) => onMove(e.touches[0].clientX)}
        onTouchEnd={onUp}
      >
        {items.map((item, i) => (
          <FestivalGenreCard key={i} {...item} />
        ))}
      </div>
    </div>
  )
}

