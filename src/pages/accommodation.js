import styled from 'styled-components'
import styles from '../styles/styles'

import Button from '../components/button'
import PageSection from '../components/page-section'
import Text from '../components/text'
import TextWrapper from '../components/text-wrapper'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

export default function Accommodation() {
  return (
    <Wrapper wedding>
      <PageSection>
        <Title>Accommodation</Title>
        <TextWrapper>
          <Text>
            If you're travelling from further afield (or simply don't fancy a
            long taxi ride home), there are a few hotels nearby:
          </Text>
          <Text>
            <Link
              href='https://www.premierinn.com/gb/en/hotels/england/greater-london/london/london-ruislip.html?cid=GLBC_RUIBEE'
              rel='noopener noreferrer'
              target='_blank'
            >
              Premier Inn Ruislip
            </Link>{' '}
            is next to the Beefeater pub, which you can get to on the H13 bus,
            followed by a small walk.
          </Text>
          <Text>
            <Link
              href='https://www.thetudorhotel.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              The Tudor Hotel
            </Link>{' '}
            is approximately a 15 minute walk away.
          </Text>
          <Text>
            <Link
              href='https://www.premierinn.com/gb/en/hotels/england/hertfordshire/rickmansworth/rickmansworth.html'
              rel='noopener noreferrer'
              target='_blank'
            >
              Premier Inn Rickmansworth
            </Link>{' '}
            is a short taxi ride away.
          </Text>
          <Text>
            There are many other hotels in the area, and these will likely be
            the least expensive. If these three options don't suit you, feel
            free to take a look for other places.
          </Text>
          <Text>
            The Woodman's postcode is HA5 2PR, and bear in mind that it will be
            a Sunday, so some public transport may end early.
          </Text>
        </TextWrapper>
        <Button href='/welcome'>Back</Button>
      </PageSection>
    </Wrapper>
  )
}

const Link = styled.a`
  &:visited {
    color: ${styles.colour.black};
  }
`
