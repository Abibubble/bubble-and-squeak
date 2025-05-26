import { Card, CardsFlex, MainContent, Title } from '../../components'
import * as Styled from './Parks.styled'
import parks from '../../data/parks.json'

function Parks() {
  return (
    <MainContent>
      <Title>Theme Parks</Title>
      <CardsFlex>
        {Object.values(parks)
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(park => (
            <Card item={park} type='park' key={park.id}>
              {park.description}
            </Card>
          ))}
      </CardsFlex>
    </MainContent>
  )
}

export default Parks
