import React, { useState } from 'react'
import LogoFestival from '../../assets/LogoFestival.svg'

const IconHome = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M12 3 3 10v10a1 1 0 0 0 1 1h6v-6h4v6h6a1 1 0 0 0 1-1V10L12 3z" />
  </svg>
)
const IconLive = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm-7 5a7 7 0 0 1 7-7v2a5 5 0 0 0-5 5 5 5 0 0 0 5 5v2a7 7 0 0 1-7-7zm14 0a7 7 0 0 1-7 7v-2a5 5 0 0 0 5-5 5 5 0 0 0-5-5V5a7 7 0 0 1 7 7z"/>
  </svg>
)
const IconDisc = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 11.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
  </svg>
)
const IconPlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/>
  </svg>
)
const IconChevronDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true" {...props}>
    <path fill="currentColor" d="m5.23 7.21 4.24 4.24 4.24-4.24 1.06 1.06-5.3 5.3-5.3-5.3z"/>
  </svg>
)

type NavItem = {
  label: string
  href?: string
  icon?: React.ReactNode
  dropdown?: boolean
  menuTitle?: string
  options?: string[]
}

const nav: NavItem[] = [
  { label: 'Home', href: '#', icon: <IconHome /> },
  { label: 'Live', href: '#', icon: <IconLive /> },
  {
    label: 'Musical Styles',
    icon: <IconDisc />,
    dropdown: true,
    menuTitle: 'Styles:',
    options: ['Rock', 'Pop', 'Funk', 'MPB', 'Jazz', 'Trap', 'Rap'],
  },
  {
    label: 'Exclusive Content',
    icon: <IconPlus />,
    dropdown: true,
    menuTitle: 'Content:',
    options: ['Back Stage', 'Interviews', 'Lestest News', 'Last Editions', 'Watch Again'],
  },
]

export const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const toggleMenu = (label: string) => {
    setOpenMenu((prev) => (prev === label ? null : label))
  }

  return (
    <header
      className="
        fixed top-0 left-0 right-0
        z-50
        h-14
      "
    >
      <div
        className="
          absolute inset-0
          bg-black/60
          backdrop-blur-sm
          pointer-events-none
        "
      />

      <div className="relative container mx-auto h-full px-4 flex items-center gap-8 text-white">
        <a href="#" className="flex items-center shrink-0">
          <img src={LogoFestival} alt="Festival" className="h-10 w-auto" />
        </a>
        <nav className="flex items-center gap-6 text-sm whitespace-nowrap">
          {nav.map((item) =>
            !item.dropdown ? (
              <a
                key={item.label}
                href={item.href}
                className="
                  inline-flex items-center gap-2 px-2 py-2 rounded-md
                  hover:text-white/90
                  no-underline
                  [&_svg]:shrink-0
                "
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ) : (
              <div
                key={item.label}
                className="relative"
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  onClick={() => toggleMenu(item.label)}
                  className="
                    inline-flex items-center gap-2 px-2 py-2 rounded-md
                    hover:text-white/90
                    no-underline
                    [&_svg]:shrink-0
                  "
                >
                  {item.icon}
                  <span>{item.label}</span>
                  <IconChevronDown
                    className={`ml-1 transition-transform ${
                      openMenu === item.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openMenu === item.label && (
                  <div
                    className="
                      absolute left-0 top-full mt-2
                      min-w-[190px]
                      rounded-lg
                      bg-[#050816]
                      border border-white/10
                      shadow-lg
                      py-2
                      z-50
                    "
                  >
                    {item.menuTitle && (
                      <p className="px-4 pb-1 text-[18px] font-semibold text-white">
                        {item.menuTitle}
                      </p>
                    )}

                    <ul className="px-2 pb-1">
                      {item.options?.map((opt) => (
                        <li key={opt}>
                          <button
                            type="button"
                            className="
                              w-full text-left
                              px-2 py-1.5
                              rounded-md
                              text-[18px] text-white/70
                              hover:bg-white/10
                            "
                            onClick={() => {
                              console.log('clicou em', opt)
                              setOpenMenu(null)
                            }}
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

        <span className="ml-auto text-sm whitespace-nowrap">Peter Parker</span>
      </div>
    </header>
  )
}