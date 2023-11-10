import styled from 'styled-components'
import styles from '../styles/styles'

export default function Button({ href, className, onClick, ...props }) {
  if (href) {
    return (
      <StyledLink className={className} href={href}>
        {props.children}
      </StyledLink>
    )
  } else {
    return (
      <StyledButton className={className} onClick={onClick}>
        {props.children}
      </StyledButton>
    )
  }
}

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${styles.colour.black};
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  margin: ${styles.spacer.tiny};
  border: 6px solid;
  border-image-slice: 1;
  border-width: ${styles.spacer.fine};
  background: ${styles.colour.transparentWhite};
  font-size: 1.4rem;
  padding: 0 ${styles.spacer.small};

  &:visited {
    color: ${styles.colour.black};
  }
`

const StyledButton = styled.button`
  text-decoration: none;
  cursor: pointer;
  color: ${styles.colour.black};
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  margin: ${styles.spacer.tiny};
  border: 6px solid;
  border-image-slice: 1;
  border-width: ${styles.spacer.fine};
  background: ${styles.colour.transparentWhite};
  font-size: 1.4rem;
  padding: 0 ${styles.spacer.small};

  &:visited {
    color: ${styles.colour.black};
  }
`
