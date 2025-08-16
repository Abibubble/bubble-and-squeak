import { useState } from 'react'
import escapeRoomsData from '../../data/escape-rooms.json'
import { filterData, getUniqueOptions, sortData } from '../../utils'
import {
  Card,
  CardsFlex,
  CardStat,
  ListView,
  MainContent,
  Selector,
  SelectorGroup,
  Title,
  ViewToggle,
} from '../../components'
import { EscapeRoom } from '../../types'

const escapeRooms = escapeRoomsData as EscapeRoom[]

const sortOptions = [
  {
    value: 'newest',
    label: 'Newest to Oldest',
    key: 'id',
    direction: 'desc',
    type: 'number',
  },
  {
    value: 'oldest',
    label: 'Oldest to Newest',
    key: 'id',
    direction: 'asc',
    type: 'number',
  },
  {
    value: 'highest',
    label: 'Highest Rated',
    key: 'total',
    direction: 'desc',
    type: 'number',
  },
  {
    value: 'lowest',
    label: 'Lowest Rated',
    key: 'total',
    direction: 'asc',
    type: 'number',
  },
]

const roomStats = [
  'theme',
  'duration',
  'minPlayers',
  'maxPlayers',
  'difficulty',
  'escapePercentage',
  'minAge',
  'languages',
]

function getOverall(room: EscapeRoom): number {
  // Parse percentage string like "100%" to number like 100
  const totalStr = room.total || '0%'
  return parseFloat(totalStr.replace('%', ''))
}

export default function EscapeRooms() {
  const [sortOrder, setSortOrder] = useState(sortOptions[0].value)
  const [countryFilter, setCountryFilter] = useState('')
  const [durationFilter, setDurationFilter] = useState('')
  const [minPlayersFilter, setMinPlayersFilter] = useState('')
  const [maxPlayersFilter, setMaxPlayersFilter] = useState('')
  const [viewMode, setViewMode] = useState<'list' | 'blog'>('blog')

  const countryOptions = getUniqueOptions(
    escapeRooms,
    room => room.country
  ).map(option => ({ value: option, label: option }))
  const durationOptions = getUniqueOptions(
    escapeRooms,
    room => room.duration,
    'number'
  ).map(option => ({ value: option, label: `${option} minutes` }))
  const minPlayersOptions = getUniqueOptions(
    escapeRooms,
    room => room.minPlayers,
    'number'
  ).map(option => ({ value: option, label: option }))
  const maxPlayersOptions = getUniqueOptions(
    escapeRooms,
    room => room.maxPlayers,
    'number'
  ).map(option => ({ value: option, label: option }))

  const filters = {
    country: countryFilter,
    duration: durationFilter,
    minPlayers: minPlayersFilter,
    maxPlayers: maxPlayersFilter,
  }

  const filteredRooms = filterData(escapeRooms, filters)

  const selectedSort =
    sortOptions.find(option => option.value === sortOrder) || sortOptions[0]

  let sortedRooms = [...filteredRooms]
  if (selectedSort.type === 'total') {
    sortedRooms.sort((a, b) =>
      selectedSort.direction === 'desc'
        ? getOverall(b) - getOverall(a)
        : getOverall(a) - getOverall(b)
    )
  } else {
    sortedRooms = sortData(
      filteredRooms,
      selectedSort.key,
      selectedSort.direction as 'asc' | 'desc',
      selectedSort.type === 'date'
        ? 'string'
        : (selectedSort.type as 'string' | 'number' | 'date')
    )
  }

  return (
    <MainContent>
      <Title>Escape Rooms</Title>
      <p>{sortedRooms.length} escape rooms played</p>

      <ViewToggle viewMode={viewMode} onViewChange={setViewMode} />

      <SelectorGroup>
        <Selector
          label='Sort by'
          value={sortOrder}
          options={sortOptions.map(option => ({
            value: option.value,
            label: option.label,
          }))}
          onChange={setSortOrder}
          placeholder='Select sort order'
        />
        <Selector
          label='Filter by Country'
          value={countryFilter}
          options={countryOptions}
          onChange={setCountryFilter}
          placeholder='All Countries'
        />
        <Selector
          label='Filter by Duration'
          value={durationFilter}
          options={durationOptions}
          onChange={setDurationFilter}
          placeholder='All Durations'
        />
        <Selector
          label='Filter by Min Players'
          value={minPlayersFilter}
          options={minPlayersOptions}
          onChange={setMinPlayersFilter}
          placeholder='All Min Players'
        />
        <Selector
          label='Filter by Max Players'
          value={maxPlayersFilter}
          options={maxPlayersOptions}
          onChange={setMaxPlayersFilter}
          placeholder='All Max Players'
        />
      </SelectorGroup>

      {viewMode === 'list' ? (
        <ListView rooms={sortedRooms} />
      ) : (
        <CardsFlex>
          {sortedRooms.map(room => (
            <Card
              description={room.description}
              item={room}
              type='room'
              key={room.id}
            >
              {/* Pass in date we played the room, near the location */}
              {roomStats
                .filter(stat => room[stat] !== null && room[stat] !== '')
                .map(stat => (
                  <CardStat
                    stat={stat}
                    value={
                      Array.isArray(room[stat])
                        ? room[stat].join(', ')
                        : room[stat]
                    }
                    key={stat}
                  />
                ))}
            </Card>
          ))}
        </CardsFlex>
      )}
    </MainContent>
  )
}
