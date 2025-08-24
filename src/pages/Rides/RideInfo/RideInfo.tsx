import { Info, Link, MainContent, Title } from '../../../components'
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

  const park = parks.find(park => park.name === ride.park)

  const basicInfoKeys = ['manufacturer', 'model', 'type', 'level', 'material']
  const specificationsKeys = [
    'height',
    'dropHeight',
    'length',
    'speed',
    'duration',
    'inversions',
    'car',
  ]
  const operationalKeys = [
    'yearOpened',
    'yearClosed',
    'heightRequirement',
    'fastPassAvailable',
    'capacity',
    'ridability',
    'previousNames',
  ]

  return (
    <MainContent>
      <Styled.PageWrapper>
        <Title>{ride.name}</Title>
        <Styled.Location>
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
        </Styled.Location>
        <Styled.ImageContainer>
          <Styled.Image
            src={`/images/rides/${formatString(
              ride.name,
              'dash',
              'lower'
            )}.jpg`}
            alt={ride.name}
            onError={e => {
              const target = e.target as HTMLImageElement
              target.onerror = null
              target.src = '/images/bubble-and-squeak.png'
              target.alt = 'Default placeholder image'
            }}
          />
        </Styled.ImageContainer>

        {ride.description && (
          <Styled.Description>{ride.description}</Styled.Description>
        )}

        <Styled.InfoGrid>
          <Info item={ride} keys={basicInfoKeys} type='Basic Information' />
          <Info item={ride} keys={specificationsKeys} type='Specifications' />
          <Info
            item={ride}
            keys={operationalKeys}
            type='Operational Information'
          />
        </Styled.InfoGrid>

        {ride.review && (
          <Styled.ReviewContainer>
            <Styled.ReviewTitle>Our Review</Styled.ReviewTitle>
            <Styled.ReviewText>{ride.review}</Styled.ReviewText>
          </Styled.ReviewContainer>
        )}
      </Styled.PageWrapper>
    </MainContent>
  )
}

export default RideInfo
