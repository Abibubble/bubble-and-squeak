import * as Styled from './Card.styled'
import { formatString } from '../../utils'
import parks from '../../data/parks.json'

export type CardProps = {
  children: React.ReactNode
  description?: string
  item: {
    name: string
    country?: string
    location?: string
    description?: string
    park?: string
    [key: string]: any // TODO: Fix this - Allow additional properties for different data types
  }
  type: 'park' | 'room' | 'coaster'
}

export default function Card({ children, description, item, type }: CardProps) {
  let baseUrl: string = type
  let park
  let country = item.country || 'Unknown'
  let location = item.location

  if (type === 'park') {
    baseUrl = 'parks'
  } else if (type === 'room') {
    baseUrl = 'escape-rooms/photos'
  } else if (type === 'coaster') {
    baseUrl = 'coasters'
    park = parks.find(park => park.name === item.park)
    country = park ? park.country : 'Unknown'
    location = item.park
  }

  let urlId: string = formatString(item.name, 'dash', 'lower')
  let imageUrl: string = `/images/${baseUrl}/${formatString(
    item.name,
    'dash',
    'lower'
  )}.jpg`

  let url: string = ''
  if (type === 'room') {
    url = `/escape-rooms/room-info/${urlId}`
  } else if (type === 'park') {
    url = `/theme-parks/park-info/${urlId}`
  } else if (type === 'coaster') {
    url = `/coasters/coaster-info/${urlId}`
    if (item.park) {
      imageUrl = `/images/${baseUrl}/${formatString(
        item.name,
        'dash',
        'lower'
      )}-${formatString(item.park, 'dash', 'lower')}.jpg`
    }
  }

  const linkText = `View details for ${item.name} in ${location}, ${country}`

  return (
    <article>
      <Styled.Link href={url} key={item.id || item.name} aria-label={linkText}>
        <Styled.Grid>
          <Styled.Image
            src={imageUrl}
            alt={`${item.name} - ${
              type === 'park'
                ? 'Theme park'
                : type === 'room'
                ? 'Escape room'
                : 'Coaster'
            }`}
            onError={e => {
              const target = e.target as HTMLImageElement
              target.onerror = null
              target.src = '/images/bubble-and-squeak.png'
              target.alt = 'Default placeholder image'
            }}
          />
          <Styled.CardContent>
            <Styled.Title>{item.name}</Styled.Title>
            <Styled.Location>
              {location}, {country}
            </Styled.Location>
            {description && (
              <Styled.Description>{item.description}</Styled.Description>
            )}
            <Styled.StatsGrid>{children}</Styled.StatsGrid>
          </Styled.CardContent>
        </Styled.Grid>
      </Styled.Link>
    </article>
  )
}
