import { Link, MainContent, Title } from '../../../components'
import * as Styled from './RoomInfo.styled'
import escapeRooms from '../../../data/escape-rooms.json'
import { useLocation } from 'react-router-dom'
import { convertRatingsToOverall, formatString } from '../../../utils'

function RoomInfo() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const roomId = searchParams.get('roomId')

  const room = escapeRooms.find(room => room.id === Number(roomId))
  if (!room) return <div>Room not found</div>

  return (
    <MainContent>
      <Title>{room.name}</Title>
      <p>Room number: {room.id}</p>
      <Styled.Image src={`../${room.ourEscape.photo}`} alt={room.name} />
      <p>{room.description}</p>
      <p>Rating: {convertRatingsToOverall(room.ourEscape.ratings)}</p>
      <p>Difficulty: {room.stats.difficulty}</p>
      <p>Duration: {room.stats.duration} minutes</p>
      <p>Max players: {room.stats.maxPlayers}</p>
      <p>Min players: {room.stats.minPlayers}</p>
      <p>Price: {room.stats.price}</p>
      <p>Languages available: {room.stats.language.join(', ')}</p>
      <p>
        Location: {room.country}, {room.location}
      </p>
      <p>
        Booking link:{' '}
        <Link dark href={room.link}>
          {room.link}
        </Link>
      </p>
      <p>Our escape:</p>
      <p>Date played: {room.ourEscape.datePlayed}</p>
      <p>Rating: {convertRatingsToOverall(room.ourEscape.ratings)}</p>
      <p>Review: {room.ourEscape.comment}</p>
      <p>Ratings:</p>
      <div>
        {Object.entries(room.ourEscape.ratings).map(([key, value]) => (
          <p>
            {formatString(key, 'space', 'first-string')}: {value}
          </p>
        ))}
      </div>
    </MainContent>
  )
}

export default RoomInfo
