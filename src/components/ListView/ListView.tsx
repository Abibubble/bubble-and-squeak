import * as Styled from './ListView.styled'
import { formatString } from '../../utils'
import { EscapeRoom } from '../../types'

interface ListViewProps {
  rooms: EscapeRoom[]
}

export default function ListView({ rooms }: ListViewProps) {
  const getOverall = (room: EscapeRoom): string => {
    return room.total || 'N/A'
  }

  return (
    <Styled.TableContainer>
      <Styled.Table>
        <Styled.TableHead>
          <Styled.TableRow>
            <Styled.TableHeader>Room Name</Styled.TableHeader>
            <Styled.TableHeader>Company</Styled.TableHeader>
            <Styled.TableHeader>Location</Styled.TableHeader>
            <Styled.TableHeader>Overall Score</Styled.TableHeader>
          </Styled.TableRow>
        </Styled.TableHead>
        <Styled.TableBody>
          {rooms.map(room => (
            <Styled.TableRow key={room.id}>
              <Styled.TableCell>
                <Styled.RoomLink
                  href={`/escape-rooms/room-info/${formatString(
                    room.name,
                    'dash',
                    'lower'
                  )}`}
                >
                  {room.name}
                </Styled.RoomLink>
              </Styled.TableCell>
              <Styled.TableCell>{room.company || 'Unknown'}</Styled.TableCell>
              <Styled.TableCell>
                {room.location}, {room.country}
              </Styled.TableCell>
              <Styled.TableCell>
                <Styled.ScoreCell score={parseFloat(getOverall(room)) || 0}>
                  {getOverall(room)}
                </Styled.ScoreCell>
              </Styled.TableCell>
            </Styled.TableRow>
          ))}
        </Styled.TableBody>
      </Styled.Table>
    </Styled.TableContainer>
  )
}
