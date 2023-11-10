import styled from 'styled-components'
import styles from '../styles/styles'

import Title from './title'

export default function Invite() {
  return (
    <Container>
      <Title invite>Abi&nbsp;Harrison & Conor&nbsp;Nye</Title>
      <Text>
        request the pleasure of your company at their wedding reception at
        <br />
        The Woodman, Pinner,
        <br />
        HA5 2PR
      </Text>
      <Date>
        <h2>12th May 2024</h2>
        <h3>4pm</h3>
      </Date>
    </Container>
  )
}

const Container = styled.div`
  padding: ${styles.spacer.small};
  font-family: 'Cormorant Garamond', Arial, Helvetica, sans-serif;
`

const Text = styled.p`
  margin-top: ${styles.spacer.tiny};
  font-size: 1.1rem;

  @media (min-width: 560px) {
    font-size: 1.3rem;
  }
`

const Date = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  font-size: 1.3rem;
  margin-top: ${styles.spacer.small};
  font-family: 'Great Vibes', Arial, Helvetica, sans-serif;

  @media (min-width: 560px) {
    font-size: 1.5rem;
  }
`
