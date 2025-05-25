import { useState } from 'react'
import { Card, MainContent, Title } from '../../components'
import * as Styled from './EscapeRooms.styled'
import escapeRooms from '../../data/escape-rooms.json'
import { convertRatingsToOverall } from '../../utils'

function EscapeRooms() {
  const [sortOrder, setSortOrder] = useState('newest')

  function getOverall(room) {
    const overall = convertRatingsToOverall(
      room.ourEscape?.ratings || {},
      false
    )
    return overall
  }

  const sortedRooms = [...escapeRooms].sort((firstRoom, secondRoom) => {
    if (sortOrder === 'highest') {
      return getOverall(secondRoom) - getOverall(firstRoom)
    }
    if (sortOrder === 'lowest') {
      return getOverall(firstRoom) - getOverall(secondRoom)
    }
    const firstDate = new Date(firstRoom.ourEscape?.datePlayed)
    const secondDate = new Date(secondRoom.ourEscape?.datePlayed)
    if (sortOrder === 'newest') {
      return secondDate - firstDate
    }
    return firstDate - secondDate
  })

  return (
    <MainContent>
      <Title>Escape Rooms</Title>
      <p>{escapeRooms.length} escape rooms found</p>
      <p>Sort by:</p>
      <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
        <option value='newest'>Newest to Oldest</option>
        <option value='oldest'>Oldest to Newest</option>
        <option value='highest'>Highest Rated</option>
        <option value='lowest'>Lowest Rated</option>
      </select>
      <Styled.Grid>
        {sortedRooms.map(room => (
          <a href={`/escape-rooms/room-info?roomId=${room.id}`} key={room.id}>
            <Card imgSrc={room.image} title={room.name}>
              {room.description}
            </Card>
          </a>
        ))}
      </Styled.Grid>
    </MainContent>
  )
}

export default EscapeRooms
