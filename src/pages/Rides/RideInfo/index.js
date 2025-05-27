import { CardStat, Link, MainContent, Title } from '../../../components'
import * as Styled from './RideInfo.styled'
import rides from '../../../data/rides.json'
import parks from '../../../data/parks.json'
import { useLocation } from 'react-router-dom'

function RideInfo() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const rideId = searchParams.get('rideId')

  const ride = rides.find(ride => ride.id === Number(rideId))
  if (!ride) return <div>Ride not found</div>

  const ratingStars =
    '★'.repeat(Math.round(ride.rating)) +
    '☆'.repeat(5 - Math.round(ride.rating))

  const park = parks.find(park => park.name === ride.location)

  return (
    <MainContent>
      <Styled.PageWrapper>
        <Title>{ride.name}</Title>
        <Styled.Subtitle>
          <Link
            dark
            href={park.id ? `/theme-parks/park-info?parkId=${park.id}` : '#'}
          >
            {ride.location}, {park.country}
          </Link>
        </Styled.Subtitle>
        <p>Rating: {ratingStars}</p>
        <Styled.Image src={`../${ride.image}`} alt={ride.name} />
        <Styled.InfoGrid>
          {Object.entries(ride.stats).map(([key, value]) => (
            <CardStat stat={key} value={value} key={key} />
          ))}
        </Styled.InfoGrid>
        <p>{ride.description}</p>
      </Styled.PageWrapper>
    </MainContent>
  )
}

export default RideInfo
