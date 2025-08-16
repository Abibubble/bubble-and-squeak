import React from 'react'
import * as Styled from './CardsFlex.styled'

export interface CardsFlexProps {
  children: React.ReactNode
}

export default function CardsFlex({ children }: CardsFlexProps) {
  return <Styled.FlexContainer>{children}</Styled.FlexContainer>
}
