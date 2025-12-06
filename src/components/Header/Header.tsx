import React, { useState } from 'react'
import LogoFestival from '../../assets/LogoFestival.svg'
import music from '../../assets/music.svg'
import live from '../../assets/live.svg'
import sparkless from '../../assets/sparkless.svg'
import iconDropdown from '../../assets/iconDropdown.svg'
import { LuHouse } from "react-icons/lu";
import PersonIcon from '../../assets/person.svg'
import iconSettings from '../../assets/settings.svg'
import iconSettingsWhite from '../../assets/settingsWhite.svg'

type NavItem = {
  label: string
  href?: string
  icon?: React.ReactNode
  dropdown?: boolean
  menuTitle?: string
  options?: string[]
}

const nav: NavItem[] = [
  { label: 'Home', href: '#', icon: <LuHouse /> },
  { label: 'Live', href: '#', icon: <img src={live} alt="Live" /> },
  {
    label: 'Musical Styles',
    icon: <img src={music} alt="Musical Styles" />,
    dropdown: true,
    menuTitle: 'Styles:',
    options: ['Rock', 'Pop', 'Funk', 'MPB', 'Jazz', 'Trap', 'Rap'],
  },
  {
    label: 'Exclusive Content',
    icon: <img src={sparkless} alt="Exclusive Content" />,
    dropdown: true,
    menuTitle: 'Content:',
    options: ['Back Stage', 'Interviews', 'Lestest News', 'Last Editions', 'Watch Again'],
  },
]

export const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [, setSettingsActive] = useState(false)

  const toggleMenu = (label: string) => {
    setOpenMenu(prev => prev === label ? null : label)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14">

      <div
        className="
          absolute inset-0
          backdrop-blur-sm
          pointer-events-none
        "
        style={{
          background:
            'linear-gradient(180deg, #2B2B2E 0%, rgba(43, 43, 46, 0.6) 54.69%, rgba(43, 43, 46, 0) 100%),' +
            'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
        }}
      />

      <div className="relative container mx-auto px-5 h-full flex items-center gap-8 text-white">
        <a href="#" className="flex items-center shrink-0">
          <img src={LogoFestival} alt="Festival" className="h-10 w-auto" />
        </a>
        <nav className="flex items-center gap-6 text-sm whitespace-nowrap">
          {nav.map((item) =>
            !item.dropdown ? (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-2 px-2 py-2 rounded-md hover:text-white/90"
              >
                {item.icon}
                {item.label}
              </a>
            ) : (
              <div key={item.label} className="relative" onMouseLeave={() => setOpenMenu(null)}>
                <button
                  onClick={() => toggleMenu(item.label)}
                  className="inline-flex items-center gap-2 px-2 py-2 hover:text-white/90"
                >
                  {item.icon}
                  {item.label}
                  <img
                    src={iconDropdown}
                    className={`w-4 h-4 transition-transform ${openMenu === item.label ? 'rotate-180' : ''
                      }`}
                    alt=""
                  />                </button>
                {openMenu === item.label && (
                  <div
                    className="
                      absolute left-0 top-full
                      min-w-40
                      bg-[#19191C]
                      shadow-lg
                      z-50
                    "
                  >
                    <p className="px-2 py-2 text-[18px] font-semibold text-white">{item.menuTitle}</p>
                    <ul className="pb-1">
                      {item.options?.map(opt => (
                        <li key={opt}>
                          <button
                            onClick={() => setOpenMenu(null)}
                            className="
                                w-full text-left
                                px-2 py-1.5
                                text-[18px]
                                text-white/70
                                hover:bg-[#E96744]
                                hover:text-white
                              "
                          >
                            {opt}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          )}
        </nav>
        <div className="ml-auto flex items-center gap-2 relative">
          <div className="w-8 h-8 rounded-full bg-[#E96744] flex items-center justify-center">
            <img src={PersonIcon} alt="User" className="w-4 h-4 text-white" />
          </div>
          <div
            className="relative"
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              onClick={() => {
                toggleMenu("profile")
                setSettingsActive(prev => !prev)
              }}
              className={`
                flex items-center gap-2 text-sm
                transition-colors "text-white"
                hover:text-white/90
              `}
            >
              Peter Parker
              <img
                src={openMenu === "profile" ? iconSettings : iconSettingsWhite}
                alt="Settings"
                className="w-4 h-4"
              />            </button>
            {openMenu === "profile" && (
              <div
                className="
                  absolute top-full mt-2
                  -left-6
                  min-w-30
                  bg-[#19191C]
                  shadow-lg
                  z-50
                "
                role="menu"
              >
                <p className="px-2 py-2 text-[18px] font-semibold text-white">
                  My Profile
                </p>
                <ul className="pb-1">
                  {["Help"].map((opt) => (
                    <li key={opt}>
                      <button
                        onClick={() => setOpenMenu(null)}
                        className="
                          w-full text-left
                          px-2 py-1.5
                          text-[18px]
                          text-white/70
                          hover:bg-[#E96744]
                          hover:text-white
                        "
                        role="menuitem"
                      >
                        {opt}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        </div>
      </div>
    </header>
  )
}