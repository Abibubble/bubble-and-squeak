import styled from 'styled-components'
import styles from '../styles/styles'

export default function Link({ href, target, rel, ...props }) {
  return (
    <Container className={props.className}>
      <Button href={href} target={target} rel={rel}>
        {props.children}
      </Button>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: ${styles.spacer.large};
  font-size: 1.5em;
  margin: 0 auto;

  @media screen and (min-width: 653px) {
    font-size: 2em;
    height: ${styles.spacer.huge};
  }
`

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  width: 75%;
  color: ${styles.colour.black};
  padding: ${styles.spacer.fine} ${styles.spacer.tiny} 0;
  border-bottom: ${styles.spacer.mini} solid ${styles.colour.black};

  &:visited {
    color: ${styles.colour.black};
  }

  &:hover,
  &:focus {
    border-bottom: ${styles.spacer.mini} solid ${styles.colour.blue};
  }
`
