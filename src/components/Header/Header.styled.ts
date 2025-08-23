import styled from 'styled-components'
import { spacing, colours } from '../../theme'

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${colours.black};
  color: ${colours.white};
  text-align: center;
  padding: ${spacing.small};

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    min-height: ${spacing.giant};
    line-height: ${spacing.giant};
    padding: 0;
  }
`

export const NavLinks = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  list-style: none;
  gap: ${spacing.tiny};

  li a {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
  }
`
