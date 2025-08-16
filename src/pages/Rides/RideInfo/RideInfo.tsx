import { CardStat, Link, MainContent, Title } from '../../../components'
import * as Styled from './RideInfo.styled'
import rides from '../../../data/rides.json'
import parks from '../../../data/parks.json'
import { useParams } from 'react-router-dom'
import { formatString } from '../../../utils'

function RideInfo() {
  const { rideName } = useParams<{ rideName: string }>()

  const ride = rides.find(
    ride => formatString(ride.name, 'dash', 'lower') === rideName
  )
  if (!ride) return <div>Ride not found</div>

  const ratingStars = '☆'.repeat(5) // No ratings available for rides

  const park = parks.find(park => park.name === ride.park)

  return (
    <MainContent>
      <Styled.PageWrapper>
        <Title>{ride.name}</Title>
        <Styled.Subtitle>
          <Link
            dark
            href={
              park
                ? `/theme-parks/park-info/${formatString(
                    park.name,
                    'dash',
                    'lower'
                  )}`
                : '#'
            }
          >
            {ride.park}, {park ? park.country : 'Unknown'}
          </Link>
        </Styled.Subtitle>
        <p>Rating: {ratingStars}</p>
        <Styled.Image
          src={`/images/rides/${formatString(ride.name, 'dash', 'lower')}.jpg`}
          alt={ride.name}
          onError={e => {
            const target = e.target as HTMLImageElement
            target.onerror = null
            target.src = '/images/bubble-and-squeak.png'
          }}
        />
        <Styled.InfoGrid>
          {Object.entries(ride)
            .filter(([key, value]) => value !== null && value !== '')
            .map(([key, value]) => (
              <CardStat stat={key} value={value as string | number} key={key} />
            ))}
        </Styled.InfoGrid>
        {ride.description && <p>{ride.description}</p>}
      </Styled.PageWrapper>
    </MainContent>
  )
}

export default RideInfo
