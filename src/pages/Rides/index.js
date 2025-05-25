import { Card, MainContent, Title } from '../../components'
import * as Styled from './Rides.styled'
import rides from '../../data/rides.json'

function Rides() {
  return (
    <MainContent>
      <Title>Rides</Title>
      <Styled.Grid>
        {Object.values(rides).map(ride => (
          <a href={`/rides/ride-info?rideId=${ride.id}`} key={ride.id}>
            <Card
              key={ride.id}
              imgSrc={ride.image}
              title={ride.name}
              rating={ride.rating}
            >
              {ride.description}
            </Card>
          </a>
        ))}
      </Styled.Grid>
    </MainContent>
  )
}

export default Rides
