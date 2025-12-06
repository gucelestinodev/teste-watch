// src/components/Hero/HeroVideo.tsx
import React from 'react'

type HeroVideoProps = {
  src: string
  poster?: string
  title: string
  subtitle?: string
  ctaLabel?: string
  onClickCta?: () => void
}

const HeroVideo: React.FC<HeroVideoProps> = ({
  src,
  poster,
  title,
  subtitle,
  ctaLabel = 'Choose your camera',
  onClickCta,
}) => {
  return (
    <section
      className="
        relative
        w-full
        h-screen            /* ocupa a tela inteira */
        bg-black
        overflow-hidden
      "
    >
      <video
        src={src}
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1E1E22] via-transparent" />

      <div className="absolute left-6 top-6 md:left-10 md:top-10 z-10">
        <h1 className="text-xl md:text-2xl font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,.8)]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-1 text-sm text-white/80 drop-shadow-[0_2px_6px_rgba(0,0,0,.8)]">
            {subtitle}
          </p>
        )}
      </div>

      <button
        onClick={onClickCta}
        className="
          absolute left-6 bottom-6 md:left-10 md:bottom-10 z-10
          inline-flex items-center justify-center
          px-6
          h-8
          rounded-[16px]
          bg-[#E96744]
          text-[12px] font-semibold leading-none
          text-white
          hover:opacity-90 transition
        "
      >
        {ctaLabel}
      </button>
    </section>
  )
}

export default HeroVideo
