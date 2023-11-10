import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import styles from '../styles/styles'

import Clue from '../components/clue'
import ClueText from '../components/clue-text'
import Intro from '../components/intro'
import PageSection from '../components/page-section'
import PasswordInput from '../components/password-input'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

import PigpenImage from '../images/pigpen.png'

export default function Pigpen() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    document.fonts.load('12px Pigpen').then(() => setIsReady(true))
  }, [])

  return (
    <Wrapper escape>
      <PageSection>
        <Title>Bubble & Squeak</Title>
        <Intro>
          Well done! For the next one, solve the pigpen cipher below:
        </Intro>
        <Clue>
          {isReady ? (
            <PigpenText>gerbil</PigpenText>
          ) : (
            <Loading>Loading...</Loading>
          )}
        </Clue>
        <PasswordInput />
        <Image src={PigpenImage} alt='pigpen decrypt' />
      </PageSection>
    </Wrapper>
  )
}

const PigpenText = styled(ClueText)`
  font-family: 'pigpen', sans-serif;
  font-size: 2.4rem;
  padding: ${styles.spacer.large} ${styles.spacer.tiny} ${styles.spacer.large};

  @media screen and (min-width: 500px) {
    padding: ${styles.spacer.medium} ${styles.spacer.fine}
      ${styles.spacer.medium};
  }

  @media screen and (min-width: ${styles.breakpoint.medium}) {
    font-size: 3rem !important;
  }
`

const Loading = styled.p`
  color: ${styles.colour.black};
`

const Image = styled.img`
  background-color: ${styles.colour.transparentWhite};
  width: 100%;

  @media screen and (min-width: ${styles.breakpoint.small}) {
    width: 80%;
  }
`
