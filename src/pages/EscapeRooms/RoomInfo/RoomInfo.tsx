import { Info, Link, MainContent, Title } from '../../../components'
import * as Styled from './RoomInfo.styled'
import escapeRooms from '../../../data/escape-rooms.json'
import { useParams } from 'react-router-dom'
import { formatString } from '../../../utils'
import { fonts } from '../../../theme'

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
      <Title>{room.name}</Title>
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
          }}
        />
      </Styled.ImageContainer>
      <Styled.Description>{room.description}</Styled.Description>
      <Styled.InfoGrid>
        <Info item={room} keys={stats} type='Stats' />
        <Info item={room} keys={ratings} type='Our ratings' />
      </Styled.InfoGrid>
      <p>Our escape:</p>
      <p>Room number: {room.id}</p>
      <p>Date played: {room.datePlayed}</p>
      <p>Review: {room.review}</p>
    </MainContent>
  )
}

export default RoomInfo
