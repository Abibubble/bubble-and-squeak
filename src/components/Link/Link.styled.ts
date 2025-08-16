import styled from 'styled-components'
import { colours } from '../../theme'

interface StyledLinkProps {
  $dark?: boolean
  $center?: boolean
  $bold?: boolean
  $fontSize?: string
}

export const Link = styled.a<StyledLinkProps>`
  ${({ $dark }) =>
    $dark ? `color: ${colours.black};` : `color: ${colours.white};`}
  ${({ $center }) => $center && 'text-align: center; display: block;'}
  ${({ $bold }) => $bold && 'font-weight: bold;'}
  ${({ $fontSize }) => $fontSize && `font-size: ${$fontSize};`}
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    ${({ $dark }) =>
      $dark ? `color: ${colours.black};` : `color: ${colours.white};`}
  }
`
