import * as Styled from './Card.styled.js'

export default function Card({ children, item, type }) {
  let base = type
  if (type === 'park') {
    base = 'theme-park'
  } else if (type === 'room') {
    base = 'escape-room'
  }
  const url = `/${base}s/${type}-info?${type}Id=${item.id}`

  return (
    <Styled.Link href={url} key={item.id}>
      <Styled.Grid>
        <Styled.Image src={`../${item.image}`} alt={item.name} />
        <div>
          <Styled.Title>{item.name}</Styled.Title>
          <Styled.Location>{item.location}</Styled.Location>
          <Styled.StatsGrid>{children}</Styled.StatsGrid>
        </div>
      </Styled.Grid>
    </Styled.Link>
  )
}
