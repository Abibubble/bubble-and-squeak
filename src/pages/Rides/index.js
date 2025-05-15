import { Card, MainContent } from '../../components'
import * as Styled from './Rides.styled'
import rides from '../../data/rides.json'

function Rides() {
  return (
    <MainContent>
      <Styled.Title>Rides</Styled.Title>
      <Styled.Grid>
        {Object.values(rides).map(ride => (
          <Card
            key={ride.id}
            imgSrc={ride.image}
            title={ride.name}
            rating={ride.rating}
          >
            {ride.description}
          </Card>
        ))}
      </Styled.Grid>
    </MainContent>
  )
}

export default Rides
