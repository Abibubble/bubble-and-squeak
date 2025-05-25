import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: black;
  color: white;
  text-align: center;
  min-height: 96px;
  line-height: 96px;
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
