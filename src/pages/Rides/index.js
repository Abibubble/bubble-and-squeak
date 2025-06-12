import { useState } from 'react'
import rides from '../../data/rides.json'
import { filterData, getUniqueOptions, sortData } from '../../utils'
import { Card, CardsFlex, CardStat, MainContent, Title } from '../../components'
import * as Styled from './Rides.styled'

const sortOptions = [
  {
    value: 'name-asc',
    label: 'Name (A-Z)',
    key: 'name',
    direction: 'asc',
    type: 'string',
  },
  {
    value: 'name-desc',
    label: 'Name (Z-A)',
    key: 'name',
    direction: 'desc',
    type: 'string',
  },
  {
    value: 'height-desc',
    label: 'Height (Highest to Lowest)',
    key: 'height',
    direction: 'desc',
    type: 'number',
  },
  {
    value: 'height-asc',
    label: 'Height (Lowest to Highest)',
    key: 'height',
    direction: 'asc',
    type: 'number',
  },
  {
    value: 'speed-asc',
    label: 'Speed (Slow to Fast)',
    key: 'speed',
    direction: 'asc',
    type: 'number',
  },
  {
    value: 'speed-desc',
    label: 'Speed (Fast to Slow)',
    key: 'speed',
    direction: 'desc',
    type: 'number',
  },
  {
    value: 'year-asc',
    label: 'Year Opened (Oldest to Newest)',
    key: 'yearOpened',
    direction: 'asc',
    type: 'number',
  },
  {
    value: 'year-desc',
    label: 'Year Opened (Newest to Oldest)',
    key: 'yearOpened',
    direction: 'desc',
    type: 'number',
  },
]

function Rides() {
  const [sortOrder, setSortOrder] = useState(sortOptions[0].value)
  const [locationFilter, setLocationFilter] = useState('')
  const [heightFilter, setHeightFilter] = useState('')
  const [manufacturerFilter, setManufacturerFilter] = useState('')

  const locationOptions = getUniqueOptions(rides, ride => ride.location)
  const heightOptions = getUniqueOptions(rides, ride => ride.heightRequirement)
  const manufacturerOptions = getUniqueOptions(rides, ride => ride.manufacturer)

  const filters = {
    location: locationFilter,
    heightRequirement: heightFilter,
    manufacturer: manufacturerFilter,
  }

  const filteredRides = filterData(rides, filters)

  const selectedSort = sortOptions.find(option => option.value === sortOrder)
  const sortedRides = selectedSort
    ? sortData(
        filteredRides,
        selectedSort.key,
        selectedSort.direction,
        selectedSort.type
      )
    : filteredRides

  return (
    <MainContent>
      <Title>Rides</Title>
      <p>Sort by:</p>
      <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
        {sortOptions.map(option => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p>Filter by:</p>
      <select
        value={locationFilter}
        onChange={e => setLocationFilter(e.target.value)}
      >
        <option value=''>All Locations</option>
        {locationOptions.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <select
        value={heightFilter}
        onChange={e => setHeightFilter(e.target.value)}
      >
        <option value=''>All Height Requirements</option>
        {heightOptions.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <select
        value={manufacturerFilter}
        onChange={e => setManufacturerFilter(e.target.value)}
      >
        <option value=''>All Manufacturers</option>
        {manufacturerOptions.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <CardsFlex>
        {sortedRides.map(ride => (
          <Card item={ride} type='ride' key={ride.id}>
            {Object.entries(ride).map(([key, value]) => (
              <CardStat stat={key} value={value} key={key} />
            ))}
          </Card>
        ))}
      </CardsFlex>
    </MainContent>
  )
}

export default Rides
