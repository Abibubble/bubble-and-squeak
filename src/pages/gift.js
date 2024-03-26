import styled from 'styled-components'
import styles from '../styles/styles'

import Button from '../components/button'
import Link from '../components/link'
import PageSection from '../components/page-section'
import Text from '../components/text'
import TextWrapper from '../components/text-wrapper'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

export default function Gift() {
  return (
    <Wrapper wedding>
      <PageSection>
        <Title>Wedding Gifts</Title>
        <TextWrapper>
          <Text>
            We've been together for 8 years, and living together for most of
            those, so there aren't any traditional wedding gifts that we need.
          </Text>
          <Text>
            There is no pressure to get us a wedding gift, but if you would like
            to, we'd love a donation towards our honeymoon fund.
          </Text>
        </TextWrapper>
        <StyledLink
          href='https://paypal.me/theharrisonnyes?country.x=GB&locale.x=en_GB'
          target='_blank'
          rel='noopener noreferrer'
        >
          Click here to donate to our honeymoon fund on PayPal
        </StyledLink>
        <Button href='/welcome'>Back</Button>
      </PageSection>
    </Wrapper>
  )
}

const StyledLink = styled(Link)`
  background-color: ${styles.colour.transparentWhite};
  margin-bottom: ${styles.spacer.medium};
  height: fit-content;
  max-width: 344px;
  border: 6px solid;
  border-image-slice: 1;
  border-width: ${styles.spacer.fine};

  & a {
    border-bottom: none;
  }

  @media (min-width: 374px) {
    margin-bottom: ${styles.spacer.large};

    & a {
      font-size: 1.5rem;
    }
  }

  @media (min-width: ${styles.breakpoint.medium}) {
    margin-bottom: ${styles.spacer.medium};
  }
`
