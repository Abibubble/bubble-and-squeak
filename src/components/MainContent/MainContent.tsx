import * as Styled from './MainContent.styled'
import React from 'react'

export type MainContentProps = {
  children: React.ReactNode
}

export default function MainContent({ children }: MainContentProps) {
  return <Styled.ContentContainer>{children}</Styled.ContentContainer>
}
