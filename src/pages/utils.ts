
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

import cena1 from '../assets/cena1.png'
import cena2 from '../assets/cena2.png'
import cena3 from '../assets/cena3.png'
import cena4 from '../assets/cena4.png'
import cena5 from '../assets/cena5.png'
import cena6 from '../assets/cena6.png'

import { type LiveShowItem } from '../components/Carousel/LiveCarousel'

export const liveItems: LiveShowItem[] = [
  {
    id: 1,
    image: cena1,
    artist: 'Demi Lovato',
    stage: 'Stage Sunset',
    dateTime: 'dd.mm.aa - 00:00 h',
  },
  {
    id: 2,
    image: cena2,
    artist: 'Demi Lovato',
    stage: 'Stage World',
    dateTime: 'dd.mm.aa - 00:00 h',
  },
  {
    id: 3,
    image: cena3,
    artist: 'Demi Lovato',
    stage: 'Stage Favela',
    dateTime: 'dd.mm.aa - 00:00 h',
  },
  {
    id: 4,
    image: cena4,
    artist: 'Demi Lovato',
    stage: 'Stage Favela',
    dateTime: 'dd.mm.aa - 00:00 h',
  },
  {
    id: 5,
    image: cena5,
    artist: 'Demi Lovato',
    stage: 'Stage Favela',
    dateTime: 'dd.mm.aa - 00:00 h',
  },
  {
    id: 6,
    image: cena6,
    artist: 'Demi Lovato',
    stage: 'Stage Favela',
    dateTime: 'dd.mm.aa - 00:00 h',
  },
]


export const yesterday = [
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

export const today = [
    { image: Card2, title: 'Coldplay' },
    { image: Card3, title: 'Billie Eilish' },
    { image: Card4, title: 'Ed Sheeran' },
    { image: Card5, title: 'Ariana Grande' },
    { image: Card1, title: 'Imagine Dragons' },
    { image: Card6, title: 'The Weeknd' },
    { image: Card7, title: 'Bruno Mars' },
    { image: Card8, title: 'Shawn Mendes' },
]

export const exclusiveItems = [
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

export const banners = [
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

export const greenGradient =
    'linear-gradient(336.78deg, #016500 22.25%, #06DE03 124.95%)'
export const blueGradient =
    'linear-gradient(336.78deg, #006A8D 22.25%, #00C0FF 124.95%)'
export const purpleGradient =
    'linear-gradient(336.78deg, #5D008F 22.25%, #C920FF 124.95%)'
export const orangeGradient =
    'linear-gradient(336.78deg, #BF4900 22.25%, #FF6100 124.95%)'
export const pinkGradient =
    'linear-gradient(336.78deg, #A30062 22.25%, #FF009A 124.95%)'
export const broalGradient =
    'linear-gradient(336.78deg, #7A5000 22.25%, #B35300 124.95%)'
export const redGradient =
    'linear-gradient(336.78deg, #FF0100 22.25%, #A80100 124.95%)'

export const festivalItems = [
    { title: 'Rock', subtitle: 'Festival', background: blueGradient },
    { title: 'Pop', subtitle: 'Festival', background: greenGradient },
    { title: 'Funk', subtitle: 'Festival', background: purpleGradient },
    { title: 'Jazz', subtitle: 'Festival', background: orangeGradient },
    { title: 'Samba', subtitle: 'Festival', background: pinkGradient },
    { title: 'MPB', subtitle: 'Festival', background: broalGradient },
    { title: 'Trap', subtitle: 'Festival', background: blueGradient },
    { title: 'Rap', subtitle: 'Festival', background: redGradient },
]