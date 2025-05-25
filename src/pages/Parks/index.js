import { Card, CardsGrid, MainContent, Title } from '../../components'
import * as Styled from './Parks.styled'
import parks from '../../data/parks.json'

function Parks() {
  return (
    <MainContent>
      <Title>Theme Parks</Title>
      <CardsGrid>
        {Object.values(parks)
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(park => (
            <a href={`/theme-parks/park-info?parkId=${park.id}`} key={park.id}>
              <Card key={park.id} imgSrc={park.image} title={park.name}>
                {park.description}
              </Card>
            </a>
          ))}
      </CardsGrid>
    </MainContent>
  )
}

export default Parks
