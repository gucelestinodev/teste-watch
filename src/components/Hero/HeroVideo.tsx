import React, { useCallback, useEffect, useRef, useState } from 'react'
import iconCamera from '../../assets/camera.svg'
import iconVolume from '../../assets/som.svg'
import iconExpand from '../../assets/expanded.svg'
import iconSettings from '../../assets/ferramenta.svg'

type HeroVideoProps = {
  src: string
  poster?: string
  title: string
  subtitle?: string
  ctaLabel?: string
  onClickCta?: () => void
  onClickSettings?: () => void
  topGradientHeight?: number
  bottomGradientHeight?: number
}

const HeroVideo: React.FC<HeroVideoProps> = ({
  src,
  poster,
  title,
  subtitle,
  ctaLabel = 'Choose your camera',
  onClickCta,
  onClickSettings,
  topGradientHeight = 132,
  bottomGradientHeight = 128,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const sync = () => setIsMuted(v.muted)
    v.addEventListener('volumechange', sync)
    return () => v.removeEventListener('volumechange', sync)
  }, [])

  const enterFullscreen = async (el: HTMLVideoElement) => {
    try {
      if (el.requestFullscreen) await el.requestFullscreen()
      // @ts-ignore
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen()
      // @ts-ignore
      else if (el.webkitEnterFullscreen) el.webkitEnterFullscreen()
      // @ts-ignore
      else if (el.msRequestFullscreen) el.msRequestFullscreen()
    } catch { }
  }

  const exitFullscreen = async () => {
    try {
      if (document.exitFullscreen) await document.exitFullscreen()
      // @ts-ignore
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen()
      // @ts-ignore
      else if (document.msExitFullscreen) document.msExitFullscreen()
    } catch { }
  }

  const isFullscreenNow = () => document.fullscreenElement

  const toggleFullscreen = useCallback(async () => {
    const video = videoRef.current
    if (!video) return
    if (isFullscreenNow()) {
      await exitFullscreen()
      return
    }
    video.muted = false
    setIsMuted(false)
    try { await video.play() } catch { }
    await enterFullscreen(video)
  }, [])

  const onClickVolume = useCallback(async () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setIsMuted(video.muted)
    if (!video.muted) {
      try { await video.play() } catch { }
    }
  }, [])

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden mb-14 mt-14 md:mt-0">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-1"
        style={{
          height: topGradientHeight,
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.60) 55%, rgba(0,0,0,0.00) 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-1"
        style={{
          height: bottomGradientHeight,
          background:
            'linear-gradient(0deg, rgba(30,30,34,1) 0%, rgba(30,30,34,0.0) 100%)',
        }}
      />
      <div className="absolute left-6 top-6 md:left-10 md:top-22 z-10">
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
          px-6 h-8 rounded-[16px]
          bg-[#E96744] text-[12px] font-semibold leading-none text-white
          hover:bg-[#D90100] transition
        "
      >
        <img src={iconCamera} alt="" aria-hidden="true" className="w-4 h-4 inline-block mr-2" />
        {ctaLabel}
      </button>
      <div
        className="
          absolute right-6 md:right-10 bottom-6 md:bottom-10 z-10
          flex items-center gap-6
        "
      >
        <button
          onClick={toggleFullscreen}
          className="inline-flex items-center justify-center p-0 bg-transparent"
          aria-label="Tela cheia"
          title="Tela cheia"
        >
          <img src={iconExpand} alt="" aria-hidden="true" className="w-[30px] h-[30px]" />
        </button>

        <button
          onClick={onClickVolume}
          className="inline-flex items-center justify-center p-0 bg-transparent"
          aria-label={isMuted ? 'Ativar som' : 'Silenciar som'}
          aria-pressed={!isMuted}
          title={isMuted ? 'Ativar som' : 'Silenciar som'}
        >
          <img
            src={iconVolume}
            alt=""
            aria-hidden="true"
            className={`w-6 h-6 ${isMuted ? 'opacity-60' : 'opacity-100'}`}
          />
        </button>

        <button
          onClick={onClickSettings}
          className="inline-flex items-center justify-center p-0 bg-transparent"
          aria-label="Mais opções"
          title="Mais opções"
        >
          <img src={iconSettings} alt="" aria-hidden="true" className="w-7 h-7" />
        </button>
      </div>
    </section>
  )
}

export default HeroVideo
