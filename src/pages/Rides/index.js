import { Card, CardsFlex, CardStat, MainContent, Title } from '../../components'
import * as Styled from './Rides.styled'
import rides from '../../data/rides.json'

function Rides() {
  return (
    <MainContent>
      <Title>Rides</Title>
      <CardsFlex>
        {Object.values(rides)
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(ride => (
            <Card item={ride} type='ride' key={ride.id}>
              {Object.entries(ride.stats).map(([key, value]) => (
                <CardStat stat={key} value={value} key={key} />
              ))}
            </Card>
          ))}
      </CardsFlex>
    </MainContent>
  )
}

export default Rides
