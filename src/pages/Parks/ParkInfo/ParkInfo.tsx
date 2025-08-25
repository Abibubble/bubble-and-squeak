import { Link, MainContent, Title } from '../../../components'
import * as Styled from './ParkInfo.styled'
import parks from '../../../data/parks.json'
import coasters from '../../../data/coasters.json'
import { useParams } from 'react-router-dom'
import { Park, Coaster } from '../../../types'
import { formatString } from '../../../utils'

function ParkInfo() {
  const { parkName } = useParams<{ parkName: string }>()

  const park = (parks as Park[]).find(
    park => formatString(park.name, 'dash', 'lower') === parkName
  )
  if (!park) return <div>Park not found</div>

  const parkCoasters = (coasters as Coaster[]).filter(
    coaster => coaster.park === park.name
  )

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

        <Styled.CoastersSection>
          <Styled.CoastersTitle>
            Coasters at {park.name} ({parkCoasters.length})
          </Styled.CoastersTitle>
          {parkCoasters.length > 0 ? (
            <Styled.CoastersList>
              {parkCoasters.map((coaster, index) => (
                <Styled.CoasterItem key={index}>
                  <Styled.CoasterCardLink
                    href={`/coasters/coaster-info/${formatString(
                      coaster.name,
                      'dash',
                      'lower'
                    )}`}
                  >
                    <Styled.CoasterContent>
                      <Styled.CoasterName>{coaster.name}</Styled.CoasterName>
                      <Styled.CoasterDetails>
                        {coaster.manufacturer && (
                          <Styled.CoasterDetail>
                            <strong>Manufacturer:</strong>{' '}
                            {coaster.manufacturer}
                          </Styled.CoasterDetail>
                        )}
                        {coaster.type && (
                          <Styled.CoasterDetail>
                            <strong>Type:</strong> {coaster.type}
                          </Styled.CoasterDetail>
                        )}
                        {coaster.yearOpened && (
                          <Styled.CoasterDetail>
                            <strong>Opened:</strong> {coaster.yearOpened}
                          </Styled.CoasterDetail>
                        )}
                        {coaster.level && (
                          <Styled.CoasterDetail>
                            <strong>Level:</strong> {coaster.level}
                          </Styled.CoasterDetail>
                        )}
                      </Styled.CoasterDetails>
                    </Styled.CoasterContent>
                  </Styled.CoasterCardLink>
                </Styled.CoasterItem>
              ))}
            </Styled.CoastersList>
          ) : (
            <Styled.NoCoastersMessage>
              No roller coaster data available for this park.
            </Styled.NoCoastersMessage>
          )}
        </Styled.CoastersSection>
      </Styled.PageWrapper>
    </MainContent>
  )
}

export default ParkInfo
