import { Card, MainContent } from '../../components'
import * as Styled from './Parks.styled'
import parks from '../../data/parks.json'

function Parks() {
  return (
    <MainContent>
      <Styled.Title>Theme Parks</Styled.Title>
      <Styled.Grid>
        {Object.values(parks).map(park => (
          <Card key={park.id} imgSrc={park.image} title={park.name}>
            {park.description}
          </Card>
        ))}
      </Styled.Grid>
    </MainContent>
  )
}

export default Parks
