import styled from 'styled-components'
import styles from '../styles/styles'

import Clue from '../components/clue'
import ClueText from '../components/clue-text'
import Intro from '../components/intro'
import PageSection from '../components/page-section'
import PasswordInput from '../components/password-input'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

export default function Science() {
  return (
    <Wrapper escape>
      <PageSection>
        <Title>Bubble & Squeak</Title>
        <Intro>
          Well done! Now, some science and maths to get your brain going:
        </Intro>
        <Clue>
          <ClueText>
            Add together Gold and Silver
            <br />
            Times them by Neon
            <br />
            Take away Caesium
          </ClueText>
          <ClueText>
            <br />
            Gold - Au
            <br />
            Silver - Ag
            <br />
            Neon - Ne
            <br />
            Caesium - Cs
          </ClueText>
        </Clue>
        <PasswordInput />
        <Link
          href='https://www.google.com/search?q=periodic+table'
          target='_blank'
          rel='noopener noreferrer'
        >
          Pssst... You might need Google for this one!
        </Link>
      </PageSection>
    </Wrapper>
  )
}

const Link = styled.a`
  color: ${styles.colour.blue};

  &:visited {
    color: ${styles.colour.blue};
  }
`
