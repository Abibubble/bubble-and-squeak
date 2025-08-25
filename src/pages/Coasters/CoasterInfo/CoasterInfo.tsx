import { Info, Link, MainContent, Title } from '../../../components'
import * as Styled from './CoasterInfo.styled'
import coasters from '../../../data/coasters.json'
import parks from '../../../data/parks.json'
import { useParams } from 'react-router-dom'
import { formatString } from '../../../utils'

function CoasterInfo() {
  const { coasterName } = useParams<{ coasterName: string }>()

  const coaster = coasters.find(
    coaster => formatString(coaster.name, 'dash', 'lower') === coasterName
  )
  if (!coaster) return <div>Coaster not found</div>

  const park = parks.find(park => park.name === coaster.park)

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
        <Title>{coaster.name}</Title>
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
            {coaster.park}, {park ? park.country : 'Unknown'}
          </Link>
        </Styled.Location>
        <Styled.ImageContainer>
          <Styled.Image
            src={`/images/coasters/${formatString(
              coaster.name,
              'dash',
              'lower'
            )}.jpg`}
            alt={coaster.name}
            onError={e => {
              const target = e.target as HTMLImageElement
              target.onerror = null
              target.src = '/images/bubble-and-squeak.png'
              target.alt = 'Default placeholder image'
            }}
          />
        </Styled.ImageContainer>

        {coaster.description && (
          <Styled.Description>{coaster.description}</Styled.Description>
        )}

        <Styled.InfoGrid>
          <Info item={coaster} keys={basicInfoKeys} type='Basic Information' />
          <Info
            item={coaster}
            keys={specificationsKeys}
            type='Specifications'
          />
          <Info
            item={coaster}
            keys={operationalKeys}
            type='Operational Information'
          />
        </Styled.InfoGrid>

        {coaster.review && (
          <Styled.ReviewContainer>
            <Styled.ReviewTitle>Our Review</Styled.ReviewTitle>
            <Styled.ReviewText>{coaster.review}</Styled.ReviewText>
          </Styled.ReviewContainer>
        )}
      </Styled.PageWrapper>
    </MainContent>
  )
}

export default CoasterInfo
