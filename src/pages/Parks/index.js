import { useState } from 'react'
import parks from '../../data/parks.json'
import { filterData, getUniqueOptions } from '../../utils'
import { Card, CardsFlex, MainContent, Title } from '../../components'
import * as Styled from './Parks.styled'

function Parks() {
  const [countryFilter, setCountryFilter] = useState('')

  const countryOptions = getUniqueOptions(
    Object.values(parks),
    park => park.country
  )

  const filters = {
    country: countryFilter,
  }

  const filteredParks = filterData(Object.values(parks), filters)

  return (
    <MainContent>
      <Title>Theme Parks</Title>
      <p>Filter by country:</p>
      <select
        value={countryFilter}
        onChange={e => setCountryFilter(e.target.value)}
      >
        <option value=''>All Countries</option>
        {countryOptions.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <CardsFlex>
        {filteredParks
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
