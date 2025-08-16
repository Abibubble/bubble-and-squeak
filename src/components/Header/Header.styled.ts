import styled from 'styled-components'
import { spacing, colours } from '../../theme'

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: ${colours.black};
  color: ${colours.white};
  text-align: center;
  min-height: ${spacing.giant};
  line-height: ${spacing.giant};
`

export const NavLinks = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;

  li a {
    display: block;
    width: 100%;
    height: 100%;
  }
`
