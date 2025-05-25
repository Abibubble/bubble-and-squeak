import { MainContent, Title } from '../../components'
import * as Styled from './Rides.styled'
import rides from '../../data/rides.json'

function Rides() {
  return (
    <MainContent>
      <Title>Rides</Title>
      <Styled.FlexContainer>
        {Object.values(rides)
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(ride => (
            <Styled.Link
              href={`/rides/ride-info?rideId=${ride.id}`}
              key={ride.id}
            >
              <Styled.Grid>
                <Styled.Image src={`../${ride.image}`} alt={ride.name} />
                <div>
                  <Styled.RideTitle>{ride.name}</Styled.RideTitle>
                  <Styled.ParkName>{ride.location}</Styled.ParkName>
                  <Styled.RideStatsGrid>
                    <Styled.RideStat>
                      <Styled.RideStatKey>Duration</Styled.RideStatKey>:{' '}
                      {ride.duration}
                    </Styled.RideStat>
                    <Styled.RideStat>
                      <Styled.RideStatKey>Height</Styled.RideStatKey>:{' '}
                      {ride.height}ft
                    </Styled.RideStat>
                    <Styled.RideStat>
                      <Styled.RideStatKey>Speed</Styled.RideStatKey>:{' '}
                      {ride.speed}mph
                    </Styled.RideStat>
                    <Styled.RideStat>
                      <Styled.RideStatKey>Inversions</Styled.RideStatKey>:{' '}
                      {ride.inversions}
                    </Styled.RideStat>
                    <Styled.RideStat>
                      <Styled.RideStatKey>Manufacturer</Styled.RideStatKey>:{' '}
                      {ride.manufacturer}
                    </Styled.RideStat>
                    <Styled.RideStat>
                      <Styled.RideStatKey>Type</Styled.RideStatKey>: {ride.type}
                    </Styled.RideStat>
                    <Styled.RideStat>
                      <Styled.RideStatKey>Year Opened</Styled.RideStatKey>:{' '}
                      {ride.yearOpened}
                    </Styled.RideStat>
                    <Styled.RideStat>
                      <Styled.RideStatKey>
                        Height Requirement
                      </Styled.RideStatKey>
                      : {ride.heightRequirement}m
                    </Styled.RideStat>
                  </Styled.RideStatsGrid>
                </div>
              </Styled.Grid>
              {/* <Card
                key={ride.id}
                imgSrc={ride.image}
                title={ride.name}
                rating={ride.rating}
              >
                {ride.description}
              </Card> */}
            </Styled.Link>
          ))}
      </Styled.FlexContainer>
    </MainContent>
  )
}

export default Rides
