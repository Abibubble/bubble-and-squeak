import { Card, MainContent, Title } from '../../components'
import * as Styled from './EscapeRooms.styled'
import escapeRooms from '../../data/escape-rooms.json'

function EscapeRooms() {
  return (
    <MainContent>
      <Title>Escape Rooms</Title>
      <p>
        Sort by: highest rated, lowest rated, newest to oldest, oldest to newest
      </p>
      <Styled.Grid>
        {Object.values(escapeRooms).map(room => (
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
