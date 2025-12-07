import { useMemo, useRef } from 'react'
import ExclusiveCard, { type ExclusiveCardProps } from '../Card/ExclusiveCard'

export type ExclusiveCarouselItem = Pick<
  ExclusiveCardProps,
  'image' | 'title' | 'subtitle' | 'onClick' | 'hasOverlay'
>

type Slot = {
  index: number
  node: React.ReactNode
  key?: string
}

export type ExclusiveCarouselProps = {
  title?: string
  items: ExclusiveCarouselItem[]
  slots?: Slot[]
}

export default function ExclusiveCarousel({ title, items, slots = [] }: ExclusiveCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const state = useRef({ down: false, startX: 0, scrollLeft: 0, moved: false })
  const DRAG_THRESHOLD = 6

  const onDown = (x: number) => {
    const el = scrollerRef.current
    if (!el) return
    state.current.down = true
    state.current.moved = false
    state.current.startX = x + el.scrollLeft
    state.current.scrollLeft = el.scrollLeft
    el.classList.add('grabbing')
  }

  const onMove = (x: number) => {
    const el = scrollerRef.current
    if (!el || !state.current.down) return
    const next = state.current.startX - x
    if (!state.current.moved && Math.abs(next - state.current.scrollLeft) > DRAG_THRESHOLD) {
      state.current.moved = true
    }
    if (state.current.moved) el.scrollLeft = next
  }

  const onUp = () => {
    const el = scrollerRef.current
    state.current.down = false
    el?.classList.remove('grabbing')
  }

  const onClickCapture: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (state.current.moved) {
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
    <section>
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-lg md:text-[24px] font-bold mb-3">
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
          onClickCapture={onClickCapture}
        >
          <div className="flex gap-4 md:gap-5">
            {items.map((item, i) => (
              <div key={`ex-item-${i}`} className="flex snap-start gap-4 md:gap-5">
                <ExclusiveCard {...item} />
                {slotsByIndex.get(i)?.map((s, j) => (
                  <div key={s.key ?? `slot-${i}-${j}`} className="snap-start">
                    {s.node}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
