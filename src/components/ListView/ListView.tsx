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
      <Styled.Table role="table" aria-label="Escape rooms list">
        <caption style={{ 
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0
        }}>
          List of {rooms.length} escape rooms with details including name, company, location, and score
        </caption>
        <Styled.TableHead>
          <Styled.TableRow>
            <Styled.TableHeader scope="col">Room</Styled.TableHeader>
            <Styled.TableHeader scope="col" className='hide-small'>
              Company
            </Styled.TableHeader>
            <Styled.TableHeader scope="col" className='hide-mobile'>
              Location
            </Styled.TableHeader>
            <Styled.TableHeader scope="col" className='hide-mobile'>
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
