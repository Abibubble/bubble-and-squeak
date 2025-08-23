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
        <a href='/'>
          <p>Bubble & Squeak</p>
        </a>
        <Styled.BurgerButton
          onClick={toggleMobileMenu}
          aria-label='Toggle navigation menu'
          aria-expanded={isMobileMenuOpen}
        >
          <Styled.BurgerLine isOpen={isMobileMenuOpen} />
          <Styled.BurgerLine isOpen={isMobileMenuOpen} />
          <Styled.BurgerLine isOpen={isMobileMenuOpen} />
        </Styled.BurgerButton>
      </Styled.HeaderTop>
      <Styled.NavContainer isOpen={isMobileMenuOpen}>
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
            <Link href='/rides' onClick={closeMobileMenu}>
              Rides
            </Link>
          </li>
          <li>
            <Link href='/escape-rooms' onClick={closeMobileMenu}>
              Escape Rooms
            </Link>
          </li>
        </Styled.NavLinks>
      </Styled.NavContainer>
    </Styled.HeaderContainer>
  )
}
