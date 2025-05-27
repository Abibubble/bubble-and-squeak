import { Link, MainContent, Title } from '../../../components'
import * as Styled from './ParkInfo.styled'
import parks from '../../../data/parks.json'
import { useLocation } from 'react-router-dom'

function ParkInfo() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const parkId = searchParams.get('parkId')

  const park = parks.find(park => park.id === Number(parkId))
  if (!park) return <div>Park not found</div>

  return (
    <MainContent>
      <Title>{park.name}</Title>
      <Styled.Image src={`../${park.image}`} alt={park.name} />
      <p>
        Location: {park.location}, {park.country}
      </p>
      <p>
        Link:{' '}
        <Link dark href={park.link}>
          {park.link}
        </Link>
      </p>
      <p>{park.description}</p>
      <p>Opening year: {park.yearOpened}</p>
    </MainContent>
  )
}

export default ParkInfo
