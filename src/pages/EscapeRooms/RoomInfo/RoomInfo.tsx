import { Info, Link, MainContent, Title } from '../../../components'
import * as Styled from './RoomInfo.styled'
import escapeRooms from '../../../data/escape-rooms.json'
import { useParams } from 'react-router-dom'
import { formatString } from '../../../utils'
import { fonts } from '../../../theme'
import { RatingStars } from '../../../components/RatingStars'

function RoomInfo() {
  const { roomName } = useParams<{ roomName: string }>()

  const room = escapeRooms.find(
    room => formatString(room.name, 'dash', 'lower') === roomName
  )
  if (!room) return <div>Room not found</div>

  const ratings = ['theming', 'puzzles', 'gamesMaster', 'value', 'fun', 'total']
  const stats = [
    'difficulty',
    'escapePercentage',
    'duration',
    'minPlayers',
    'maxPlayers',
    'price',
    'languages',
  ]

  return (
    <MainContent>
      <Title>
        #{room.id}: {room.name}
      </Title>
      <Link bold center dark fontSize={fonts.large} href={room.link}>
        {room.company}
      </Link>
      <Styled.Location>
        {room.location}, {room.country}
      </Styled.Location>
      <Styled.ImageContainer>
        <Styled.Image
          src={`/images/escape-rooms/photos/${formatString(
            room.name,
            'dash',
            'lower'
          )}.jpg`}
          alt={room.name}
          onError={e => {
            const target = e.target as HTMLImageElement
            target.onerror = null
            target.src = '/images/bubble-and-squeak.png'
            target.alt = 'Default placeholder image'
          }}
        />
      </Styled.ImageContainer>
      <Styled.Description>"{room.description}"</Styled.Description>
      <RatingStars percentage={parseInt(room.total.replace('%', ''))} />
      <Styled.InfoGrid>
        <Info item={room} keys={stats} type='Stats' />
        <Info item={room} keys={ratings} type='Our ratings' />
      </Styled.InfoGrid>
      <Styled.OurEscapeContainer>
        <Styled.EscapeHeader>
          <Styled.OurEscapeTitle>Our escape</Styled.OurEscapeTitle>
        </Styled.EscapeHeader>
        <Styled.EscapeDetail>
          <strong>Date played:</strong> {room.datePlayed}
        </Styled.EscapeDetail>
        <Styled.EscapeReview>
          <strong>Review:</strong> {room.review}
        </Styled.EscapeReview>
      </Styled.OurEscapeContainer>
    </MainContent>
  )
}

export default RoomInfo
