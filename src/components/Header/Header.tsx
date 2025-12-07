import React, { useState } from 'react'
import LogoFestival from '../../assets/LogoFestival.svg'
import music from '../../assets/music.svg'
import live from '../../assets/live.svg'
import sparkless from '../../assets/sparkless.svg'
import iconDropdown from '../../assets/iconDropdown.svg'
import { LuHouse } from 'react-icons/lu'
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
  const [openMenu, setOpenMenu] = useState<string | null>(null) // desktop dropdown
  const [, setSettingsActive] = useState(false)

  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [mobileOpenSubmenus, setMobileOpenSubmenus] = useState<Record<string, boolean>>({})

  const toggleMenu = (label: string) => {
    setOpenMenu(prev => (prev === label ? null : label))
  }

  const toggleMobileMenu = () => setIsMobileOpen(v => !v)

  const toggleMobileSubmenu = (label: string) =>
    setMobileOpenSubmenus(prev => ({ ...prev, [label]: !prev[label] }))

  const closeAll = () => {
    setOpenMenu(null)
    setIsMobileOpen(false)
    setMobileOpenSubmenus({})
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, #2B2B2E 0%, rgba(43, 43, 46, 0.6) 60%, rgba(43, 43, 46, 0) 100%),' +
            'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
        }}
      />
      <div className="relative container mx-auto px-5 h-full flex items-center gap-3 md:gap-8 text-white">
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 -ml-2"
          aria-label="Abrir menu"
          aria-expanded={isMobileOpen}
          onClick={toggleMobileMenu}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <a href="#" className="flex items-center shrink-0">
          <img
            src={LogoFestival}
            alt="Festival"
            className="h-8 w-auto sm:h-9 md:h-10 transition-[height]"
          />
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm whitespace-nowrap">
          {nav.map(item =>
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
                  aria-haspopup="menu"
                  aria-expanded={openMenu === item.label}
                >
                  {item.icon}
                  {item.label}
                  <img
                    src={iconDropdown}
                    className={`w-4 h-4 transition-transform ${openMenu === item.label ? 'rotate-180' : ''}`}
                    alt=""
                  />
                </button>
                {openMenu === item.label && (
                  <div
                    className="absolute left-0 top-full min-w-40 bg-[#19191C] shadow-lg z-50"
                    role="menu"
                  >
                    <p className="px-2 py-2 text-[18px] font-semibold text-white">{item.menuTitle}</p>
                    <ul className="pb-1">
                      {item.options?.map(opt => (
                        <li key={opt}>
                          <button
                            onClick={() => setOpenMenu(null)}
                            className="w-full text-left px-2 py-1.5 text-[18px] text-white/70 hover:bg-[#E96744] hover:text-white"
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
            )
          )}
        </nav>
        <div className="ml-auto flex items-center gap-2 relative">
          <div className="w-8 h-8 rounded-full bg-[#E96744] flex items-center justify-center">
            <img src={PersonIcon} alt="User" className="w-4 h-4 text-white" />
          </div>

          <div className="relative" onMouseLeave={() => setOpenMenu(null)}>
            <button
              onClick={() => {
                toggleMenu('profile')
                setSettingsActive(prev => !prev)
              }}
              className="flex items-center gap-2 text-sm transition-colors hover:text-white/90"
              aria-haspopup="menu"
              aria-expanded={openMenu === 'profile'}
            >
              Peter Parker
              <img
                src={openMenu === 'profile' ? iconSettings : iconSettingsWhite}
                alt="Settings"
                className="w-4 h-4"
              />
            </button>

            {openMenu === 'profile' && (
              <div
                className="absolute top-full mt-2 -left-6 min-w-30 bg-[#19191C] shadow-lg z-50"
                role="menu"
              >
                <p className="px-2 py-2 text-[18px] font-semibold text-white">My Profile</p>
                <ul className="pb-1">
                  {['Help'].map(opt => (
                    <li key={opt}>
                      <button
                        onClick={() => setOpenMenu(null)}
                        className="w-full text-left px-2 py-1.5 text-[18px] text-white/70 hover:bg-[#E96744] hover:text-white"
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
        {isMobileOpen && (
          <div
            className="md:hidden fixed inset-0 z-40"
            aria-hidden="true"
            onClick={closeAll}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div
              className="absolute top-14 left-0 right-0 bg-[#19191C] border-t border-white/10 max-h-[70vh] overflow-y-auto"
              role="dialog"
              aria-label="Menu"
              onClick={e => e.stopPropagation()}
            >
              <nav className="p-3 space-y-1">
                {nav.map(item =>
                  !item.dropdown ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/10"
                      onClick={closeAll}
                    >
                      {item.icon}
                      <span className="text-base">{item.label}</span>
                    </a>
                  ) : (
                    <div key={item.label} className="border-t border-white/10 first:border-t-0">
                      <button
                        className="w-full flex items-center justify-between gap-3 px-3 py-3 hover:bg-white/10"
                        onClick={() => toggleMobileSubmenu(item.label)}
                        aria-expanded={!!mobileOpenSubmenus[item.label]}
                        aria-controls={`mobile-sub-${item.label}`}
                      >
                        <div className="flex items-center gap-3">
                          {item.icon}
                          <span className="text-base">{item.label}</span>
                        </div>
                        <img
                          src={iconDropdown}
                          className={`w-4 h-4 transition-transform ${
                            mobileOpenSubmenus[item.label] ? 'rotate-180' : ''
                          }`}
                          alt=""
                        />
                      </button>
                      <div
                        id={`mobile-sub-${item.label}`}
                        className={`overflow-hidden transition-[max-height] duration-300 ${
                          mobileOpenSubmenus[item.label] ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        <p className="px-4 pt-1 pb-2 text-sm text-white/70">{item.menuTitle}</p>
                        <ul className="pb-2">
                          {item.options?.map(opt => (
                            <li key={opt}>
                              <button
                                onClick={closeAll}
                                className="w-full text-left px-4 py-2 text-[15px] text-white/80 hover:bg-[#E96744] hover:text-white"
                              >
                                {opt}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                )}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}