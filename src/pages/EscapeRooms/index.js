import { useState } from 'react'
import escapeRooms from '../../data/escape-rooms.json'
import {
  convertRatingsToOverall,
  filterData,
  getUniqueOptions,
  sortData,
} from '../../utils'
import { Card, CardsFlex, CardStat, MainContent, Title } from '../../components'
import * as Styled from './EscapeRooms.styled'

const sortOptions = [
  {
    value: 'newest',
    label: 'Newest to Oldest',
    key: 'ourEscape.datePlayed',
    direction: 'desc',
    type: 'date',
  },
  {
    value: 'oldest',
    label: 'Oldest to Newest',
    key: 'ourEscape.datePlayed',
    direction: 'asc',
    type: 'date',
  },
  {
    value: 'highest',
    label: 'Highest Rated',
    key: 'ourEscape.ratings',
    direction: 'desc',
    type: 'rating',
  },
  {
    value: 'lowest',
    label: 'Lowest Rated',
    key: 'ourEscape.ratings',
    direction: 'asc',
    type: 'rating',
  },
]

function getOverall(room) {
  return convertRatingsToOverall(room.ourEscape?.ratings || {}, false)
}

function EscapeRooms() {
  const [sortOrder, setSortOrder] = useState(sortOptions[0].value)
  const [countryFilter, setCountryFilter] = useState('')
  const [durationFilter, setDurationFilter] = useState('')
  const [minPlayersFilter, setMinPlayersFilter] = useState('')
  const [maxPlayersFilter, setMaxPlayersFilter] = useState('')

  const countryOptions = getUniqueOptions(escapeRooms, room => room.country)
  const durationOptions = getUniqueOptions(
    escapeRooms,
    room => room.stats.duration
  )
  const minPlayersOptions = getUniqueOptions(
    escapeRooms,
    room => room.stats.minPlayers
  )
  const maxPlayersOptions = getUniqueOptions(
    escapeRooms,
    room => room.stats.maxPlayers
  )

  const filters = {
    country: countryFilter,
    'stats.duration': durationFilter,
    'stats.minPlayers': minPlayersFilter,
    'stats.maxPlayers': maxPlayersFilter,
  }

  const filteredRooms = filterData(escapeRooms, filters)

  const selectedSort = sortOptions.find(option => option.value === sortOrder)

  let sortedRooms = [...filteredRooms]
  if (selectedSort.type === 'rating') {
    sortedRooms.sort((a, b) =>
      selectedSort.direction === 'desc'
        ? getOverall(b) - getOverall(a)
        : getOverall(a) - getOverall(b)
    )
  } else {
    sortedRooms = sortData(
      filteredRooms,
      selectedSort.key,
      selectedSort.direction,
      selectedSort.type === 'date' ? 'string' : selectedSort.type
    )
  }

  return (
    <MainContent>
      <Title>Escape Rooms</Title>
      <p>{sortedRooms.length} escape rooms found</p>
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
      <select
        value={durationFilter}
        onChange={e => setDurationFilter(e.target.value)}
      >
        <option value=''>All Durations</option>
        {durationOptions.map(option => (
          <option value={option} key={option}>
            {option} min
          </option>
        ))}
      </select>
      <select
        value={minPlayersFilter}
        onChange={e => setMinPlayersFilter(e.target.value)}
      >
        <option value=''>All Min Players</option>
        {minPlayersOptions.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <select
        value={maxPlayersFilter}
        onChange={e => setMaxPlayersFilter(e.target.value)}
      >
        <option value=''>All Max Players</option>
        {maxPlayersOptions.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <CardsFlex>
        {sortedRooms.map(room => (
          <Card item={room} type='room' key={room.id}>
            {Object.entries(room.stats).map(([key, value]) => (
              <CardStat
                stat={key}
                value={Array.isArray(value) ? value.join(', ') : value}
                key={key}
              />
            ))}
          </Card>
        ))}
      </CardsFlex>
    </MainContent>
  )
}

export default EscapeRooms
