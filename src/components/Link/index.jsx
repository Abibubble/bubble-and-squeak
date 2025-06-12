import * as Styled from './Link.styled.js'

export default function Link({
  children,
  href,
  bold = false,
  center = false,
  dark = false,
  fontSize = '1rem',
}) {
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
