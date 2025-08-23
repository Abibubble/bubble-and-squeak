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
            <Styled.TableHeader>Room</Styled.TableHeader>
            <Styled.TableHeader className='hide-small'>
              Company
            </Styled.TableHeader>
            <Styled.TableHeader className='hide-mobile'>
              Location
            </Styled.TableHeader>
            <Styled.TableHeader className='hide-mobile'>
              Score
            </Styled.TableHeader>
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
              <Styled.TableCell className='hide-small'>
                {room.company || 'Unknown'}
              </Styled.TableCell>
              <Styled.TableCell className='hide-mobile'>
                {room.location}, {room.country}
              </Styled.TableCell>
              <Styled.TableCell className='hide-mobile'>
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
