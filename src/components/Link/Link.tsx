import { ReactNode } from 'react'
import * as Styled from './Link.styled'
import { fonts } from '../../theme'

interface LinkProps {
  children: ReactNode
  href: string
  bold?: boolean
  center?: boolean
  dark?: boolean
  fontSize?: string
}

export default function Link({
  children,
  href,
  bold = false,
  center = false,
  dark = false,
  fontSize = fonts.body,
}: LinkProps) {
  return (
    <Styled.Link
      href={href}
      $bold={bold}
      $center={center}
      $dark={dark}
      $fontSize={fontSize}
    >
      {children}
    </Styled.Link>
  )
}
