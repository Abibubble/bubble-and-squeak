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
      <p>Duration: {ride.stats.duration}</p>
      <p>Location: {ride.location}</p>
      <p>Height: {ride.stats.height}</p>
      <p>Speed: {ride.stats.speed}</p>
      <p>Inversions: {ride.stats.inversions}</p>
      <p>Type: {ride.stats.type}</p>
      <p>Height requirement: {ride.stats.heightRequirement}</p>
      <p>Year opened: {ride.stats.yearOpened}</p>
      <p>Manufacturer: {ride.stats.manufacturer}</p>
      <p>Fast pass available: {ride.stats.fastPassAvailable}</p>
    </MainContent>
  )
}

export default RideInfo
