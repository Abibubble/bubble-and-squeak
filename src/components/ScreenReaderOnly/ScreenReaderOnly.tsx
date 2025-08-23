import React, { ComponentPropsWithRef, ElementType, ReactNode } from 'react'

import * as Styled from './ScreenReaderOnly.styled'

export type ScreenReaderOnlyProps<
  GElementType extends ElementType = ElementType
> = ComponentPropsWithRef<GElementType> & {
  as?: GElementType
  children: ReactNode
  id?: string
}

const ScreenReaderOnly = ({
  as = 'span',
  children,
  id,
}: ScreenReaderOnlyProps): React.JSX.Element => {
  return (
    <Styled.SROnly as={as} id={id}>
      {children}
    </Styled.SROnly>
  )
}

export default ScreenReaderOnly
