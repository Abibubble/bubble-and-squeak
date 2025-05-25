import styled from 'styled-components'

export const Link = styled.a`
  ${({ $dark }) => ($dark ? 'color: black;' : 'color: white;')}
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: white;
  }
`
