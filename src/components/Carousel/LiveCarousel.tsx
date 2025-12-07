import React, { useRef } from 'react'
import { CiPlay1 } from 'react-icons/ci'
import livreIcon from '../../assets/livre.png'

export type LiveShowItem = {
  id: string | number
  image: string
  artist: string
  stage: string
  dateTime: string
}

type LiveCardProps = {
  item: LiveShowItem
}

const LiveCard: React.FC<LiveCardProps> = ({ item }) => {
  return (
    <article
      className="
        group
        relative
        w-[360px]
        rounded-lg
        overflow-hidden
        bg-[#3D3D3F]
        border-4 border-transparent
        hover:border-[#E96744]
        transition
        shrink-0
      "
    >
      <div className="relative">
        <img
          src={item.image}
          alt={item.artist}
          className="w-full h-[190px] object-cover"
        />

        {/* Degradê “fumacinha” bem fraquinho subindo */}
        <div
          className="
            pointer-events-none
            absolute inset-x-0 bottom-0
            h-20
            bg-gradient-to-t
            from-[#3D3D3F]
            via-[#3D3D3F]/60
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition-opacity
          "
        />

        <div
          className="
            absolute left-4 bottom-4
            flex items-center gap-2
            opacity-0 group-hover:opacity-100
            transition-opacity
          "
        >
          <img
            src={livreIcon}
            alt="Livre"
            className="w-7 h-7 object-contain"
          />

          <button
            type="button"
            onClick={() =>
              window.open('https://www.youtube.com/@WatchBrasil', '_blank')
            }
            className="
              inline-flex items-center gap-2
              px-3 py-1
              rounded-full
              bg-[#E96744]
              text-[14px] font-semibold
              text-white
              shadow-md
              hover:opacity-90
              transition
            "
          >
            <CiPlay1 size={16} />
            Assistir
          </button>
        </div>
      </div>

      <div className="bg-[#3D3D3F] px-4 py-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium text-[#E96744]">
            {item.artist}
          </span>

          <div className="flex items-center gap-1 text-xs font-medium text-[#FF2828]">
            <span className="inline-block w-2 h-2 rounded-full bg-[#FF2828]" />
            <span>Live</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-[#FAFAFA]">
          <span>{item.stage}</span>
          <span>{item.dateTime}</span>
        </div>
      </div>
    </article>
  )
}

type LiveCarouselProps = {
  title?: string
  items: LiveShowItem[]
}

const LiveCarousel: React.FC<LiveCarouselProps> = ({
  title = 'In Live',
  items,
}) => {
  if (!items.length) return null

  const scrollerRef = useRef<HTMLDivElement>(null)
  const state = useRef<{
    down: boolean
    startX: number
    scrollLeft: number
    dragging: boolean
  }>({
    down: false,
    startX: 0,
    scrollLeft: 0,
    dragging: false,
  })

  const DRAG_THRESHOLD = 5

  const onDown = (x: number) => {
    const el = scrollerRef.current
    if (!el) return
    state.current.down = true
    state.current.startX = x
    state.current.scrollLeft = el.scrollLeft
    state.current.dragging = false
    el.classList.add('grabbing')
  }

  const onMove = (x: number) => {
    const el = scrollerRef.current
    if (!el || !state.current.down) return

    const dx = x - state.current.startX

    if (!state.current.dragging && Math.abs(dx) < DRAG_THRESHOLD) {
      return
    }

    if (!state.current.dragging) {
      state.current.dragging = true
    }

    el.scrollLeft = state.current.scrollLeft - dx
  }

  const onUp = () => {
    const el = scrollerRef.current
    state.current.down = false
    state.current.dragging = false
    el?.classList.remove('grabbing')
  }

  return (
    <section className="w-full">
      <div className="container mx-auto px-5">
        <h2 className="text-lg md:text-[24px] font-bold mb-3">
          {title}
        </h2>

        <div
          ref={scrollerRef}
          className="
            overflow-x-auto pr-1
            scroll-smooth
            snap-x snap-mandatory
            no-scrollbar select-none
            cursor-grab
            pb-2
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
            {items.map((item) => (
              <div key={item.id} className="snap-start">
                <LiveCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiveCarousel
