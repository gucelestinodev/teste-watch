// src/components/Header/Header.tsx
import React from 'react'
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

type NavItem = { label: string; href: string; icon?: React.ReactNode; dropdown?: boolean }
const nav: NavItem[] = [
  { label: 'Home', href: '#', icon: <IconHome /> },
  { label: 'Live', href: '#', icon: <IconLive /> },
  { label: 'Musical Styles', href: '#', icon: <IconDisc />, dropdown: true },
  { label: 'Exclusive Content', href: '#', icon: <IconPlus />, dropdown: true },
]

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-black text-white">
      <div className="container mx-auto h-14 px-4 flex items-center gap-8">
        {/* logo */}
        <a href="#" className="flex items-center shrink-0">
          <img src={LogoFestival} alt="Festival" className="h-6 w-auto" />
        </a>

        {/* navegação */}
        <nav className="flex items-center gap-8 text-sm whitespace-nowrap">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                inline-flex items-center gap-2 px-2 py-2 rounded-md
                text-white visited:text-white hover:text-white/90 no-underline
                [&_svg]:text-white [&_svg]:shrink-0
                transition-colors
              "
            >
              {item.icon}
              <span>{item.label}</span>
              {item.dropdown && <IconChevronDown className="ml-1" />}
            </a>
          ))}
        </nav>

        {/* usuário à direita */}
        <span className="ml-auto text-sm whitespace-nowrap">Peter Parker</span>
      </div>
    </header>
  )
}
