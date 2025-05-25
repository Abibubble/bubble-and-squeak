import * as Styled from './Link.styled.js'

export default function Link({ children, dark = false, href }) {
  return (
    <Styled.Link href={href} $dark={dark}>
      {children}
    </Styled.Link>
  )
}
