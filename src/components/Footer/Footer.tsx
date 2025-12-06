import React from 'react'
import LogoFestival from '../../assets/LogoFestival.svg'
import LogoYoutube from '../../assets/footer/LogoYoutube.svg'
import LogoInstagram from '../../assets/footer/LogoInstagram.svg'
import LogoFacebook from '../../assets/footer/LogoFacebook.svg'
import LogoTiktok from '../../assets/footer/LogoTiktok.svg'
import LogoLinkedin from '../../assets/footer/LogoLinkedin.svg'
import LogoTwiter from '../../assets/footer/LogoTwiter.svg'
import AppStore from '../../assets/footer/AppStore.svg'
import PlayStore from '../../assets/footer/PlayStore.svg'

export const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#1E1E22] border-t border-white/10 mt-8">
      <div className="container mx-auto px-5 py-8 text-white space-y-6">

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <p className="text-[12px] leading-[1.3] tracking-[-0.02em] text-[#FAFAFA] max-w-5xl">
            heck the Parental Guidance Rating © 2024 WarnerMedia Direct Latin America, LLC. All rights reserved. Max is used under license.
            © 2024 Globo Comunicação e Participações S.A. All rights reserved. Big Brother Brasil is used under license. The trademarks
            GLOBO®, TV GLOBO®, GLOBO NEWS®, CANAL BRASIL®, SPORTV®, MULTISHOW®, OFF®, GNT®, BIS®, GLOOBINHO®, GLOOB®, VIVA®, MODO VIAGEM®,
            PREMIERE®, and COMBATE® are properties of Globo Comunicação e Participações S.A.
            © 2024 NBCUniversal. All rights reserved. The Universal, Studio Universal, and USA Network trademarks are properties of NBCUniversal.
            © 2024 Telecine Programação De Filmes Ltda. All rights reserved. The registered trademarks TELECINE® and MEGAPIX® are properties of
            Telecine Programação De Filmes Ltda.
            Paramount+ © 2024 Paramount. All rights reserved.
          </p>

          <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
            <img src={LogoFestival} alt="Labs Festival" className="h-11 w-auto" />
            <p className="text-[12px] leading-[1.3] tracking-[-0.02em] text-[#FAFAFA] md:text-right">
              © {year} Watch Brasil. All rights reserved
            </p>
          </div>
        </div>


        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <img src={LogoYoutube} alt="YouTube" className="h-5 w-auto cursor-pointer" />
            <img src={LogoLinkedin} alt="LinkedIn" className="h-5 w-auto cursor-pointer" />
            <img src={LogoInstagram} alt="Instagram" className="h-5 w-auto cursor-pointer" />
            <img src={LogoFacebook} alt="Facebook" className="h-5 w-auto cursor-pointer" />
            <img src={LogoTiktok} alt="TikTok" className="h-5 w-auto cursor-pointer" />
            <img src={LogoTwiter} alt="X / Twitter" className="h-5 w-auto cursor-pointer" />
          </div>

          <div className="flex items-center gap-4">
            <img src={PlayStore} alt="Download na Play Store" className="h-8 w-auto" />
            <img src={AppStore} alt="Download na App Store" className="h-9 w-auto" />
          </div>
        </div>

        <div className="pt-2">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-10 text-[16px] font-medium leading-none tracking-[-0.02em]">
            <a href="#" className="text-[#FAFAFA]">
              About Labs Festival
            </a>
            <a href="#" className="text-[#FAFAFA]">
              Terms of use and privacy
            </a>
            <a href="#" className="text-[#FAFAFA]">
              Send feedback
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
