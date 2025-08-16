import { Link, MainContent, Title } from '../../../components'
import * as Styled from './ParkInfo.styled'
import parks from '../../../data/parks.json'
import { useParams } from 'react-router-dom'
import { Park } from '../../../types'
import { formatString } from '../../../utils'

function ParkInfo() {
  const { parkName } = useParams<{ parkName: string }>()

  const park = (parks as Park[]).find(
    park => formatString(park.name, 'dash', 'lower') === parkName
  )
  if (!park) return <div>Park not found</div>

  return (
    <MainContent>
      <Title>{park.name}</Title>
      <Styled.Image
        src={`/images/parks/${formatString(park.name, 'dash', 'lower')}.jpg`}
        alt={park.name}
        onError={e => {
          const target = e.target as HTMLImageElement
          target.onerror = null
          target.src = '/images/bubble-and-squeak.png'
        }}
      />
      <p>
        Location: {park.location}, {park.country}
      </p>
      <p>
        Link:{' '}
        <Link dark href={park.link}>
          {park.link}
        </Link>
      </p>
      <p>Opening year: {park.yearOpened}</p>
    </MainContent>
  )
}

export default ParkInfo
