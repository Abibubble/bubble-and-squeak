import * as Styled from './Header.styled'
import { Link } from '../../components'

export default function Header() {
  return (
    <Styled.HeaderContainer>
      <a href='/'>
        <p>Bubble & Squeak</p>
      </a>
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
