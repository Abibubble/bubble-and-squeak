import styled from 'styled-components'
import styles from '../styles/styles'

import Invite from '../components/invite'
import Link from '../components/link'
import PageSection from '../components/page-section'
import Wrapper from '../components/wrapper'

import RomeImage from '../images/1-romance.jpg'

export default function Welcome() {
  return (
    <Wrapper wedding>
      <PageSection>
        <Invite />
        <Image
          src={RomeImage}
          alt='Abi and Conor on a bridge in Rome on a sunny day'
        />
        <LinkWrapper>
          <Link href='/rsvp'>RSVP here</Link>
          <Link href='/day-plan'>Day plan</Link>
          <Link href='/dress-code'>Dress code</Link>
          <Link href='/gift'>Wedding gifts</Link>
          <Link href='/transport'>Transport</Link>
          <Link href='/accommodation'>Accommodation</Link>
          <Link href='/information'>Information</Link>
        </LinkWrapper>
      </PageSection>
    </Wrapper>
  )
}

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: ${styles.spacer.tiny};

  @media screen and (min-width: ${styles.breakpoint.small}) {
    max-height: 400px;
  }

  @media screen and (min-width: 615px) {
    width: 85%;
  }

  @media screen and (min-width: ${styles.breakpoint.medium}) {
    max-width: 600px;
    width: 65%;
  }
`

const LinkWrapper = styled.div`
  padding: ${styles.spacer.small} ${styles.spacer.small} 0;
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${styles.colour.transparentWhite};
  border-radius: ${styles.spacer.tiny};
  max-width: 486px;
  margin: 0 auto;

  @media screen and (min-width: 455px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${styles.breakpoint.medium}) {
    width: 75%;
    margin: 0 auto;
  }
`
