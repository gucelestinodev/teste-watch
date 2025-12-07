import { useMemo, useRef } from 'react'
import FestivalGenreCard, { type FestivalGenreCardProps } from '../Card/FestivalGenreCard'

export type FestivalItem = Pick<
  FestivalGenreCardProps,
  'title' | 'subtitle' | 'background' | 'onClick'
>

type Slot = {
  index: number
  node: React.ReactNode
  key?: string
}

export type FestivalCarouselProps = {
  items: FestivalItem[]
  slots?: Slot[]
}

export default function FestivalCarousel({ items, slots = [] }: FestivalCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const drag = useRef({ down: false, startX: 0, scrollLeft: 0, moved: false })
  const DRAG_THRESHOLD = 6

  const onDown = (clientX: number) => {
    const el = scrollerRef.current
    if (!el) return
    drag.current.down = true
    drag.current.moved = false
    drag.current.startX = clientX + el.scrollLeft
    drag.current.scrollLeft = el.scrollLeft
    el.classList.add('grabbing')
  }

  const onMove = (clientX: number) => {
    const el = scrollerRef.current
    if (!el || !drag.current.down) return
    const next = drag.current.startX - clientX
    if (!drag.current.moved && Math.abs(next - drag.current.scrollLeft) > DRAG_THRESHOLD) {
      drag.current.moved = true
    }
    if (drag.current.moved) el.scrollLeft = next
  }

  const onUp = () => {
    const el = scrollerRef.current
    drag.current.down = false
    el?.classList.remove('grabbing')
  }

  const onClickCapture: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (drag.current.moved) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  const slotsByIndex = useMemo(() => {
    const m = new Map<number, Slot[]>()
    for (const s of slots) m.set(s.index, [...(m.get(s.index) ?? []), s])
    return m
  }, [slots])

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={scrollerRef}
        className="
          flex gap-4 md:gap-5
          overflow-x-auto
          no-scrollbar
          cursor-grab select-none
          w-full max-w-full
        "
        onMouseDown={(e) => onDown(e.clientX)}
        onMouseMove={(e) => onMove(e.clientX)}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        onTouchStart={(e) => onDown(e.touches[0].clientX)}
        onTouchMove={(e) => onMove(e.touches[0].clientX)}
        onTouchEnd={onUp}
        onClickCapture={onClickCapture}
      >
        {items.map((item, i) => (
          <div key={`fest-${i}`} className="flex items-stretch gap-4 md:gap-5">
            <FestivalGenreCard {...item} />
            {slotsByIndex.get(i)?.map((s, j) => (
              <div key={s.key ?? `slot-${i}-${j}`} className="shrink-0">
                {s.node}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
