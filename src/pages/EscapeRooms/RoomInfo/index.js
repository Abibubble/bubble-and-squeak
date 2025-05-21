import { MainContent } from '../../../components'
import * as Styled from './RoomInfo.styled'
import escapeRooms from '../../../data/escape-rooms.json'
import convertRatingsToOverall from '../../../utils/convertRatingsToOverall'
import { useLocation } from 'react-router-dom'

function RoomInfo() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const roomId = searchParams.get('roomId')

  const room = escapeRooms.find(room => room.id === Number(roomId))
  if (!room) return <div>Room not found</div>

  return (
    <MainContent>
      <Styled.Title>{room.name}</Styled.Title>
      <p>Room number: {room.id}</p>
      <img src={room.image} alt={room.name} />
      <p>{room.description}</p>
      <p>Rating: {convertRatingsToOverall(room.ourEscape.ratings)}</p>
      <p>Difficulty: {room.difficulty}</p>
      <p>Duration: {room.duration} minutes</p>
      <p>Max players: {room.maxPlayers}</p>
      <p>Min players: {room.minPlayers}</p>
      <p>Price: {room.price}</p>
      <p>Languages available: {room.language}</p>
      <p>
        Location: {room.country}, {room.location}
      </p>
      <p>Booking link: {room.link}</p>
      <p>Our escape:</p>
      <p>Date played: {room.ourEscape.datePlayed}</p>
      <p>Rating: {convertRatingsToOverall(room.ourEscape.ratings)}</p>
      <p>Review: {room.ourEscape.comment}</p>
      <p>Ratings:</p>
      <div>
        {Object.entries(room.ourEscape.ratings).map(([key, value]) => (
          <p>
            {key}: {value}
          </p>
        ))}
      </div>
    </MainContent>
  )
}

export default RoomInfo
