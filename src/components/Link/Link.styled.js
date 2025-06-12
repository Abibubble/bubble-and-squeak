import styled from 'styled-components'

export const Link = styled.a`
  ${({ $dark }) => ($dark ? 'color: black;' : 'color: white;')}
  ${({ $center }) => $center && 'text-align: center; display: block;'}
  ${({ $bold }) => $bold && 'font-weight: bold;'}
  ${({ $fontSize }) => $fontSize && `font-size: ${$fontSize};`}
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    ${({ $dark }) => ($dark ? 'color: black;' : 'color: white;')}
  }
`
