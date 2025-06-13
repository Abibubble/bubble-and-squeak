import * as Styled from './Card.styled.js'
import { formatString } from '../../utils'
import parks from '../../data/parks.json'

export default function Card({ children, description, item, type }) {
  let base = type
  let baseUrl = type
  let park
  let country = item.country
  let location = item.location

  if (type === 'park') {
    base = 'theme-park'
    baseUrl = 'parks'
  } else if (type === 'room') {
    base = 'escape-room'
    baseUrl = 'escape-rooms/photos'
  } else if (type === 'ride') {
    baseUrl = 'rides'
    park = parks.find(park => park.name === item.park)
    country = park ? park.country : 'Unknown'
    location = item.park
  }
  const url = `/${base}s/${type}-info?${type}Id=${item.id}`

  console.log(
    `images/${baseUrl}/${formatString(item.name, 'dash', 'lower')}.jpg`
  )
  return (
    <Styled.Link href={url} key={item.id}>
      <Styled.Grid>
        <Styled.Image
          src={`images/${baseUrl}/${formatString(
            item.name,
            'dash',
            'lower'
          )}.jpg`}
          alt={item.name}
          onError={e => {
            e.target.onerror = null
            e.target.src = 'images/bubble-and-squeak.png'
          }}
        />
        <div>
          <Styled.Title>{item.name}</Styled.Title>
          <Styled.Location>
            {location}, {country}
          </Styled.Location>
          {description && (
            <Styled.Description>{item.description}</Styled.Description>
          )}
          <Styled.StatsGrid>{children}</Styled.StatsGrid>
        </div>
      </Styled.Grid>
    </Styled.Link>
  )
}
