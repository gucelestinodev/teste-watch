import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import Card3 from '../assets/famosos/DreamTheate.png'
import avril from '../videos/avril.mp4'
import ExclusiveCarousel from '../components/Carousel/ExclusiveCarousel'
import BannerCarousel from '../components/Banner/BannerCarousel'
import FestivalCarousel from '../components/Carousel/FestivalCarousel'

import HeroVideo from '../components/Hero/HeroVideo'
import { yesterday, exclusiveItems, banners, banners2, festivalItems, rockItems, liveItems, lineUp, watchItems } from './utils'
import LiveCarousel from '../components/Carousel/LiveCarousel'
import TeslaAdCard from './TeslaAdCard'
import AirPodsAdCard from './AirPodsAdCard'

export const Home: React.FC = () => {
  return (
    <main className="flex flex-col gap-6">
      <HeroVideo
        src={avril}
        poster={Card3}
        title="Avril Lavigne"
        subtitle="LIVE • Sunset • Singer Camera"
        ctaLabel="Choose your camera"
      />

      <section className="-mt-8">
        <Carousel
          title="Line Up"
          items={lineUp}
          slots={[
            { index: 3, node: <TeslaAdCard />, key: 'tesla-slot' },
          ]}
        />
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch">
            <div className="w-full md:max-w-xs md:flex-[0_0_260px] flex flex-col justify-center">
              <h2 className="text-lg md:text-xl font-semibold mb-1">Festival for you</h2>
              <p className="text-sm text-white/70 mb-4">
                Explore your favorite genres and discover new rhythms to love!
              </p>
              <button
                className="
                  inline-flex items-center justify-center
                  w-24 h-8
                  px-6
                  rounded-[16px]
                  bg-[#E96744]
                  text-[12px] font-semibold leading-none
                  hover:bg-[#D90100] transition
                "
              >
                See All
              </button>
            </div>

            <div className="w-full md:flex-1 overflow-hidden">
              <FestivalCarousel
                items={festivalItems}
                slots={[
                  { index: 1, node: <AirPodsAdCard />, key: 'airpods-slot' },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <BannerCarousel items={banners} mobileHeight={140} />

      <LiveCarousel title="In Live" items={liveItems} />

      <Carousel title="Yesterday Shows" items={yesterday} />

      <ExclusiveCarousel title="Exclusive Content" items={exclusiveItems} />

      <Carousel title="Rock Singers" items={rockItems} />

      <BannerCarousel items={banners2} mobileHeight={140} mobileFit="contain" />

      <Carousel title="Watch Again" items={watchItems} slots={[
        { index: 1, node: <TeslaAdCard />, key: 'tesla-slot' },
      ]} />
    </main>
  )
}

export default Home;