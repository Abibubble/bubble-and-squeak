import * as Styled from './Header.styled.js'
import { Link } from '../index.js'

export default function Header() {
  return (
    <Styled.HeaderContainer>
      <p>Bubble & Squeak</p>
      <nav>
        <Styled.NavLinks>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/theme-parks'>Theme Parks</Link>
          </li>
          <li>
            <Link href='/rides'>Rides</Link>
          </li>
          <li>
            <Link href='/escape-rooms'>Escape Rooms</Link>
          </li>
        </Styled.NavLinks>
      </nav>
    </Styled.HeaderContainer>
  )
}
