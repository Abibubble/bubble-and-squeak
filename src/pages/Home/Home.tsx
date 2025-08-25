import { MainContent, Title, CollageImage } from '../../components'
import * as Styled from './Home.styled'

function Home() {
  return (
    <MainContent>
      <Title>Bubble & Squeak</Title>
      <Styled.Subtitle>Escapes and Thrills</Styled.Subtitle>

      <section aria-label='Photo collage showcasing roller coasters and escape rooms'>
        <Styled.CollageContainer
          role='img'
          aria-label='A decorative collage of photos featuring various roller coasters including Hyperia and Voltron Nevera, and escape room experiences like Dark Deeds and Groceries and The Golden Banana'
        >
          <CollageImage
            src='/images/homepage/hyperia-thorpe-park.jpg'
            alt=''
            size='xlarge'
            position={{ row: 0, col: 0 }}
            rotation='right'
          />
          <CollageImage
            src='/images/escape-rooms/photos/dark-deeds-and-groceries.jpg'
            alt=''
            size='large'
            position={{ row: 0, col: 1 }}
          />
          <CollageImage
            src='/images/homepage/voltron-nevera-powered-by-rimac-europa-park.jpg'
            alt=''
            size='medium'
            position={{ row: 0, col: 2 }}
            rotation='tilted'
          />
          <CollageImage
            src='/images/escape-rooms/photos/legend-of-the-cursed-waters.jpg'
            alt=''
            size='large'
            position={{ row: 1, col: 0 }}
            rotation='left'
          />
          <CollageImage
            src='/images/escape-rooms/photos/marv-the-monkey-presents-the-golden-banana.jpg'
            alt=''
            size='xlarge'
            position={{ row: 1, col: 1 }}
          />
          <CollageImage
            src='/images/homepage/toutatis-parc-asterix.jpg'
            alt=''
            size='medium'
            position={{ row: 1, col: 2 }}
            rotation='right'
          />
          <CollageImage
            src='/images/escape-rooms/photos/orbital.jpg'
            alt=''
            size='medium'
            position={{ row: 2, col: 0 }}
            rotation='tilted'
          />
          <CollageImage
            src='/images/homepage/euro-mir-europa-park.jpg'
            alt=''
            size='large'
            position={{ row: 2, col: 1 }}
            rotation='left'
          />
          <CollageImage
            src='/images/escape-rooms/photos/potions-and-peril.jpg'
            alt=''
            size='medium'
            position={{ row: 2, col: 2 }}
          />
          <CollageImage
            src='/images/escape-rooms/photos/room-1-marvo-induction.jpg'
            alt=''
            size='large'
            position={{ row: 3, col: 0 }}
            rotation='right'
          />
          <CollageImage
            src='/images/escape-rooms/photos/the-disappearing-duchess-chapter-2.jpg'
            alt=''
            size='medium'
            position={{ row: 3, col: 1 }}
            rotation='tilted'
          />
          <CollageImage
            src='/images/escape-rooms/photos/the-explorers-diary.jpg'
            alt=''
            size='medium'
            position={{ row: 3, col: 2 }}
            rotation='left'
          />
        </Styled.CollageContainer>
      </section>
    </MainContent>
  )
}

export default Home
