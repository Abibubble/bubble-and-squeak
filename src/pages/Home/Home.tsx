import { MainContent, Title, CollageImage } from '../../components'
import * as Styled from './Home.styled'

function Home() {
  return (
    <MainContent>
      <Title>Bubble & Squeak</Title>
      <Styled.Subtitle>Escapes and Thrills</Styled.Subtitle>

      <Styled.CollageContainer>
        <CollageImage
          src='/images/rides/hyperia.jpg'
          alt='Hyperia roller coaster'
          size='xlarge'
          position={{ row: 0, col: 0 }}
          rotation='right'
        />
        <CollageImage
          src='/images/escape-rooms/photos/dark-deeds-and-groceries.jpg'
          alt='Dark Deeds and Groceries escape room'
          size='large'
          position={{ row: 0, col: 1 }}
        />
        <CollageImage
          src='/images/rides/voltron-nevera-powered-by-rimac.jpg'
          alt='Voltron Nevera roller coaster'
          size='medium'
          position={{ row: 0, col: 2 }}
          rotation='tilted'
        />
        <CollageImage
          src='/images/escape-rooms/photos/legend-of-the-cursed-waters.jpg'
          alt='Legend of the Cursed Waters escape room'
          size='large'
          position={{ row: 1, col: 0 }}
          rotation='left'
        />
        <CollageImage
          src='/images/escape-rooms/photos/marv-the-monkey-presents-the-golden-banana.jpg'
          alt='Marv The Monkey Presents: The Golden Banana escape room'
          size='xlarge'
          position={{ row: 1, col: 1 }}
        />
        <CollageImage
          src='/images/rides/toutatis.jpg'
          alt='Toutatis roller coaster'
          size='medium'
          position={{ row: 1, col: 2 }}
          rotation='right'
        />
        <CollageImage
          src='/images/escape-rooms/photos/orbital.jpg'
          alt='Orbital escape room'
          size='medium'
          position={{ row: 2, col: 0 }}
          rotation='tilted'
        />
        <CollageImage
          src='/images/rides/euro-mir.jpg'
          alt='Euro Mir roller coaster'
          size='large'
          position={{ row: 2, col: 1 }}
          rotation='left'
        />
        <CollageImage
          src='/images/escape-rooms/photos/potions-and-peril.jpg'
          alt='Potions and Peril escape room'
          size='medium'
          position={{ row: 2, col: 2 }}
        />
        <CollageImage
          src='/images/escape-rooms/photos/room-1-marvo-induction.jpg'
          alt='Room 1: Marvo Induction escape room'
          size='large'
          position={{ row: 3, col: 0 }}
          rotation='right'
        />
        <CollageImage
          src='/images/escape-rooms/photos/the-disappearing-duchess-chapter-2.jpg'
          alt='The Disappearing Duchess: Chapter 2 escape room'
          size='medium'
          position={{ row: 3, col: 1 }}
          rotation='tilted'
        />
        <CollageImage
          src='/images/escape-rooms/photos/the-explorers-diary.jpg'
          alt="The Explorer's Diary escape room"
          size='medium'
          position={{ row: 3, col: 2 }}
          rotation='left'
        />
      </Styled.CollageContainer>
    </MainContent>
  )
}

export default Home
