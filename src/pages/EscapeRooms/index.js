import { Card, MainContent } from '../../components'
import * as Styled from './EscapeRooms.styled'
import escapeRooms from '../../data/escape-rooms.json'

function EscapeRooms() {
  return (
    <MainContent>
      <Styled.Title>Escape Rooms</Styled.Title>
      <Styled.Grid>
        {Object.values(escapeRooms).map(room => (
          <Card
            key={room.id}
            imgSrc={room.image}
            title={room.name}
            rating={room.ourEscape.rating.overall}
          >
            {room.description}
          </Card>
        ))}
      </Styled.Grid>
    </MainContent>
  )
}

export default EscapeRooms
