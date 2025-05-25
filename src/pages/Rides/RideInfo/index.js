import { MainContent, Title } from '../../../components'
import * as Styled from './RideInfo.styled'
import rides from '../../../data/rides.json'
import { useLocation } from 'react-router-dom'

function RideInfo() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const rideId = searchParams.get('rideId')

  const ride = rides.find(ride => ride.id === Number(rideId))
  if (!ride) return <div>Ride not found</div>

  return (
    <MainContent>
      <Title>{ride.name}</Title>
      <Styled.Image src={`../${ride.image}`} alt={ride.name} />
      <p>{ride.description}</p>
      <p>Rating: {ride.rating}</p>
      <p>Duration: {ride.duration} seconds</p>
      <p>Location: {ride.location}</p>
      <p>Height: {ride.height}</p>
      <p>Speed: {ride.speed}</p>
      <p>Inversions: {ride.inversions}</p>
      <p>Type: {ride.type}</p>
      <p>Min height: {ride.minHeight}</p>
      <p>Year opened: {ride.yearOpened}</p>
      <p>Manufacturer: {ride.manufacturer}</p>
      <p>Fast pass available: {ride.fastPassAvailable}</p>
    </MainContent>
  )
}

export default RideInfo
