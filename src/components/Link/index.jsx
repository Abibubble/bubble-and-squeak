import * as Styled from './Link.styled.js'

export default function Link({ children, href }) {
  return <Styled.Link href={href}>{children}</Styled.Link>
}
