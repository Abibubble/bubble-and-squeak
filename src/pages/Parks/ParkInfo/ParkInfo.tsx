import { Link, MainContent, Title } from '../../../components'
import * as Styled from './ParkInfo.styled'
import parks from '../../../data/parks.json'
import rides from '../../../data/rides.json'
import { useParams } from 'react-router-dom'
import { Park, Ride } from '../../../types'
import { formatString } from '../../../utils'

function ParkInfo() {
  const { parkName } = useParams<{ parkName: string }>()

  const park = (parks as Park[]).find(
    park => formatString(park.name, 'dash', 'lower') === parkName
  )
  if (!park) return <div>Park not found</div>

  const parkRides = (rides as Ride[]).filter(ride => ride.park === park.name)

  return (
    <MainContent>
      <Styled.PageWrapper>
        <Title>{park.name}</Title>
        <Styled.Location>
          <a
            href={`https://www.google.com/maps/search/${encodeURIComponent(
              `${park.name} ${park.location} ${park.country}`
            )}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            {park.location}, {park.country}
          </a>
        </Styled.Location>
        <Styled.ImageContainer>
          <Styled.Image
            src={`/images/parks/${formatString(
              park.name,
              'dash',
              'lower'
            )}.jpg`}
            alt={park.name}
            onError={e => {
              const target = e.target as HTMLImageElement
              target.onerror = null
              target.src = '/images/bubble-and-squeak.png'
              target.alt = 'Default placeholder image'
            }}
          />
        </Styled.ImageContainer>
        <Styled.InfoGrid>
          <Styled.InfoItem>
            <Styled.InfoLabel>Website:</Styled.InfoLabel>
            <Styled.InfoValue>
              <Link dark href={park.link}>
                {park.link}
              </Link>
            </Styled.InfoValue>
          </Styled.InfoItem>
          <Styled.InfoItem>
            <Styled.InfoLabel>Opening year:</Styled.InfoLabel>
            <Styled.InfoValue>{park.yearOpened}</Styled.InfoValue>
          </Styled.InfoItem>
        </Styled.InfoGrid>

        <Styled.RidesSection>
          <Styled.RidesTitle>
            Rides at {park.name} ({parkRides.length})
          </Styled.RidesTitle>
          {parkRides.length > 0 ? (
            <Styled.RidesList>
              {parkRides.map((ride, index) => (
                <Styled.RideItem key={index}>
                  <Styled.RideCardLink
                    href={`/rides/ride-info/${formatString(
                      ride.name,
                      'dash',
                      'lower'
                    )}`}
                  >
                    <Styled.RideContent>
                      <Styled.RideName>{ride.name}</Styled.RideName>
                      <Styled.RideDetails>
                        {ride.manufacturer && (
                          <Styled.RideDetail>
                            <strong>Manufacturer:</strong> {ride.manufacturer}
                          </Styled.RideDetail>
                        )}
                        {ride.type && (
                          <Styled.RideDetail>
                            <strong>Type:</strong> {ride.type}
                          </Styled.RideDetail>
                        )}
                        {ride.yearOpened && (
                          <Styled.RideDetail>
                            <strong>Opened:</strong> {ride.yearOpened}
                          </Styled.RideDetail>
                        )}
                        {ride.level && (
                          <Styled.RideDetail>
                            <strong>Level:</strong> {ride.level}
                          </Styled.RideDetail>
                        )}
                      </Styled.RideDetails>
                    </Styled.RideContent>
                  </Styled.RideCardLink>
                </Styled.RideItem>
              ))}
            </Styled.RidesList>
          ) : (
            <Styled.NoRidesMessage>
              No rides data available for this park.
            </Styled.NoRidesMessage>
          )}
        </Styled.RidesSection>
      </Styled.PageWrapper>
    </MainContent>
  )
}

export default ParkInfo
