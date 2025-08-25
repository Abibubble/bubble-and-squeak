import { useState } from 'react'
import * as Styled from './Header.styled'
import { Link } from '../../components'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <Styled.HeaderContainer>
      <Styled.HeaderTop>
        <a href='/' aria-label='Bubble & Squeak - Home'>
          <p>Bubble & Squeak</p>
        </a>
        <Styled.BurgerButton
          onClick={toggleMobileMenu}
          aria-label='Toggle navigation menu'
          aria-expanded={isMobileMenuOpen}
          aria-controls='main-navigation'
        >
          <Styled.BurgerLine $isOpen={isMobileMenuOpen} />
          <Styled.BurgerLine $isOpen={isMobileMenuOpen} />
          <Styled.BurgerLine $isOpen={isMobileMenuOpen} />
        </Styled.BurgerButton>
      </Styled.HeaderTop>
      <Styled.NavContainer $isOpen={isMobileMenuOpen}>
        <nav id='main-navigation' aria-label='Main navigation'>
          <Styled.NavLinks>
            <li>
              <Link href='/' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href='/theme-parks' onClick={closeMobileMenu}>
                Theme Parks
              </Link>
            </li>
            <li>
              <Link href='/coasters' onClick={closeMobileMenu}>
                Coasters
              </Link>
            </li>
            <li>
              <Link href='/escape-rooms' onClick={closeMobileMenu}>
                Escape Rooms
              </Link>
            </li>
            <li>
              <Link href='/accessibility' onClick={closeMobileMenu}>
                Accessibility
              </Link>
            </li>
          </Styled.NavLinks>
        </nav>
      </Styled.NavContainer>
    </Styled.HeaderContainer>
  )
}
