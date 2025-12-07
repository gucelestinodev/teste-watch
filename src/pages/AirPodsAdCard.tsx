import airpodsBg from '../assets/AirPods.png'
import info from '../assets/info.svg'
import arrow from '../assets/arrow.svg'

function AirPodsAdCard() {
    return (
        <article
            className="
        group relative
        w-full md:w-[300px] lg:w-[440px]
        h-[216px]
        rounded-2xl overflow-hidden
        border-4 border-transparent
        hover:border-[#E96744]
        transition-colors duration-200
      "
        >
            <img
                src={airpodsBg}
                alt="AirPods — Spatial Audio"
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />

            <div className="absolute inset-0 md:p-2 flex flex-col">
                <div className="flex items-center gap-2">
                    <span className="ml-auto text-[11px] px-2 py-1 rounded-full bg-[#E96744] text-white font-light">
                        Announcement
                        <img src={info} alt="" className="inline-block w-2.5 ml-2" />
                    </span>
                </div>

                <div className="absolute md:bottom-8 md:left-56 z-10">
                    <a
                        href="https://www.apple.com/airpods-pro/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseDown={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        className="
                            inline-flex items-center justify-center
                            bg-transparent text-[12px] leading-none text-white
                            focus:outline-none focus:ring-2 focus:ring-white/40
                        "
                    >
                        <span className="underline underline-offset-2">buy now</span>
                        <img src={arrow} alt="" aria-hidden="true" className="w-3 h-3 ml-2" />
                    </a>
                </div>
            </div>
        </article>
    )
}

export default AirPodsAdCard
