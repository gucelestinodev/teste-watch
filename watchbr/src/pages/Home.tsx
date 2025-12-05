import React from 'react'
import { Container } from '../components/Container/Container'
import Carousel from '../components/Carousel/Carousel'

import Card from '../assets/famosos/Card.png'
import Card1 from '../assets/famosos/Card1.png'
import Card2 from '../assets/famosos/Card2.png'
import Card3 from '../assets/famosos/Card3.png'
import Card4 from '../assets/famosos/Card4.png'
import Card5 from '../assets/famosos/Card5.png'
import Card6 from '../assets/famosos/Card6.png'
import Card7 from '../assets/famosos/Card7.png'
import Card8 from '../assets/famosos/Card8.png'

import Tenis from '../assets/famosos/Tenis.svg'
import Microfone from '../assets/famosos/Microfone.jpg'
import CaixasShow from '../assets/famosos/CaixasShow.jpg'

import Cerveja from '../assets/cerveja.png'
import CocaCola from '../assets/coca-cola.png'
import Pincel from '../assets/cerveja.png'

import ExclusiveCarousel from '../components/Carousel/ExclusiveCarousel'
import BannerCarousel from '../components/Banner/BannerCarousel'
import FestivalCarousel from '../components/Carousel/FestivalCarousel'

export const Home: React.FC = () => {
  const yesterday = [
    { image: Card, title: 'Cantor' },
    { image: Card1, title: 'Marshmello' },
    { image: Card2, title: 'Alok' },
    { image: Card3, title: 'Rita Ora' },
    { image: Card4, title: 'Dream Theater' },
    { image: Card5, title: 'Dua Lipa' },
    { image: Card5, title: 'Dua Lipa' },
    { image: Card6, title: 'Dua Lipa' },
    { image: Card7, title: 'Dua Lipa' },
    { image: Card8, title: 'Dua Lipa' },
  ]

  const today = [
    { image: Card2, title: 'Coldplay' },
    { image: Card3, title: 'Billie Eilish' },
    { image: Card4, title: 'Ed Sheeran' },
    { image: Card5, title: 'Ariana Grande' },
    { image: Card1, title: 'Imagine Dragons' },
    { image: Card6, title: 'The Weeknd' },
    { image: Card7, title: 'Bruno Mars' },
    { image: Card8, title: 'Shawn Mendes' },
  ]

  const exclusiveItems = [
    {
      image: CaixasShow,
      title: 'Back Stage',
      subtitle: 'Festival',
    },
    {
      image: Microfone,
      title: 'Interviews',
      subtitle: 'Festival',
    },
    {
      image: Tenis,
      hasOverlay: false,
    },
    {
      image: CaixasShow,
      title: 'Behind the Scenes',
      subtitle: 'Festival',
    },
    {
      image: CaixasShow,
      title: 'Behind the Scenes',
      subtitle: 'Festival',
    },
    {
      image: CaixasShow,
      title: 'Behind the Scenes',
      subtitle: 'Festival',
    },
  ]

  const banners = [
    {
      image: Cerveja,
      buttonLabel: 'GET A TASTE OF AMSTERDAM',
      buttonColor: '#00833D',
    },
    {
      image: CocaCola,
      buttonLabel: 'Learn more',
      buttonColor: '#E10600',
    },
    {
      image: Pincel,
      buttonLabel: 'Discover',
      buttonColor: '#00833D',
    },
  ]

  const greenGradient =
    'linear-gradient(336.78deg, #016500 22.25%, #06DE03 124.95%)'
  const blueGradient =
    'linear-gradient(336.78deg, #006A8D 22.25%, #00C0FF 124.95%)'
  const purpleGradient =
    'linear-gradient(336.78deg, #5D008F 22.25%, #C920FF 124.95%)'
  const orangeGradient =
    'linear-gradient(336.78deg, #BF4900 22.25%, #FF6100 124.95%)'
  const pinkGradient =
    'linear-gradient(336.78deg, #A30062 22.25%, #FF009A 124.95%)'
  const broalGradient =
    'linear-gradient(336.78deg, #7A5000 22.25%, #B35300 124.95%)'
  const redGradient =
    'linear-gradient(336.78deg, #FF0100 22.25%, #A80100 124.95%)'

  const festivalItems = [
    { title: 'Rock', subtitle: 'Festival', background: blueGradient },
    { title: 'Pop', subtitle: 'Festival', background: greenGradient },
    { title: 'Funk', subtitle: 'Festival', background: purpleGradient },
    { title: 'Jazz', subtitle: 'Festival', background: orangeGradient },
    { title: 'Samba', subtitle: 'Festival', background: pinkGradient },
    { title: 'MPB', subtitle: 'Festival', background: broalGradient },
    { title: 'Trap', subtitle: 'Festival', background: blueGradient },
    { title: 'Rap', subtitle: 'Festival', background: redGradient },
  ]

  return (
    <main className="flex flex-col gap-10 py-8">
      <Container>
        <h2 className="text-2xl font-semibold mb-2">
          Bem-vindo(a) à Watch Brasil 🎬
        </h2>
        <p className="text-white/70">
          Aqui você encontra transmissões ao vivo, filmes, séries e shows — tudo
          em um só lugar.
        </p>
      </Container>

      <ExclusiveCarousel title="Exclusive Content" items={exclusiveItems} />

      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch">
            <div className="w-full md:max-w-xs md:flex-[0_0_260px] flex flex-col justify-center">
              <h2 className="text-lg md:text-xl font-semibold mb-1">
                Festival for you
              </h2>
              <p className="text-sm text-white/70 mb-4">
                Explore your favorite genres and discover new rhythms to love!
              </p>

              <button
                className="
                  inline-flex items-center justify-center
                  w-[96px] h-8
                  px-6
                  rounded-[16px]
                  bg-[#E96744]
                  text-[12px] font-semibold leading-none
                  hover:opacity-90 transition
                "
              >
                See All
              </button>
            </div>

            <div className="w-full md:flex-1 overflow-hidden">
              <FestivalCarousel items={festivalItems} />
            </div>
          </div>
        </div>
      </section>

      <BannerCarousel items={banners} />

      <Carousel title="Yesterday Shows" items={yesterday} />

      <ExclusiveCarousel title="Exclusive Content" items={exclusiveItems} />

      <Carousel title="Rock Singers" items={today} />

      <BannerCarousel items={banners} />

      <Carousel title="Watch Again" items={today} />
    </main>
  )
}

export default Home;