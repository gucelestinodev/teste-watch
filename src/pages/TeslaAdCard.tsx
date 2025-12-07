import teslaBg from '../assets/testa.png'
import info from '../assets/info.svg'
import arrow from '../assets/arrow.svg'

function TeslaAdCard() {
    return (
        <article
            className="
                group relative
                w-full md:w-[300px] lg:w-[540px]
                h-[330px]
                rounded-2xl overflow-hidden
                border-3 border-transparent
                hover:border-[#E96744]
                transition-colors duration-200
            "
        >
            <img
                src={teslaBg}
                alt="Tesla Supercharger Technology"
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
            />
            <div className="absolute inset-0 pointer-events-none" />
            <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-between">
                <div className="flex items-center gap-2">
                    <span className="ml-auto text-[11px] px-2 py-1 rounded-full bg-[#E96744] text-white font-light">
                        Announcement
                        <img src={info} alt="" className="inline-block w-2.5 ml-2" />
                    </span>
                </div>

                <div className="absolute md:bottom-16 md:left-88.5 z-10">
                    <a
                        href="https://www.tesla.com/model3"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseDown={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        className="
                            inline-flex items-center justify-center
                            px-4 h-8
                            bg-[#BE1E22] text-[12px] leading-none text-white
                            hover:bg-[#e94749] transition
                            focus:outline-none focus:ring-2 focus:ring-white/40
                        "
                    >
                        <span className="underline underline-offset-2">learn more</span>
                        <img src={arrow} alt="" aria-hidden="true" className="w-3 h-3 ml-2" />
                    </a>
                </div>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
        </article>
    )
}

export default TeslaAdCard
