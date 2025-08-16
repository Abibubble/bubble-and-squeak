import { useState, useMemo } from 'react'
import rides from '../../data/rides.json'
import {
  filterData,
  getUniqueOptions,
  sortData,
  formatString,
} from '../../utils'
import {
  Card,
  CardsFlex,
  CardStat,
  MainContent,
  Selector,
  SelectorGroup,
  Title,
  ViewToggle,
} from '../../components'
import * as ListViewStyled from '../../components/ListView/ListView.styled'

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
  const [viewMode, setViewMode] = useState<'list' | 'blog'>('blog')

  // Add a render counter for unique keys
  const renderCount = Date.now()

  const locationOptions = getUniqueOptions(rides, ride => ride.park).map(
    option => ({ value: option, label: option })
  )
  const heightOptions = getUniqueOptions(
    rides,
    ride => ride.heightRequirement
  ).map(option => ({ value: option, label: option }))
  const manufacturerOptions = getUniqueOptions(
    rides,
    ride => ride.manufacturer
  ).map(option => ({ value: option, label: option }))

  // Use useMemo to ensure filtering is computed correctly
  const filteredRides = useMemo(() => {
    const filters = {
      park: locationFilter,
      heightRequirement: heightFilter,
      manufacturer: manufacturerFilter,
    }

    return filterData(rides, filters)
  }, [locationFilter, heightFilter, manufacturerFilter])

  const selectedSort = sortOptions.find(option => option.value === sortOrder)
  const sortedRides = selectedSort
    ? sortData(
        filteredRides,
        selectedSort.key,
        selectedSort.direction as 'asc' | 'desc',
        selectedSort.type as 'string' | 'number' | 'date'
      )
    : filteredRides

  return (
    <MainContent>
      <Title>Rides</Title>

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
          label='Filter by Location'
          value={locationFilter}
          options={locationOptions}
          onChange={setLocationFilter}
          placeholder='All Locations'
        />
        <Selector
          label='Filter by Height Requirement'
          value={heightFilter}
          options={heightOptions}
          onChange={setHeightFilter}
          placeholder='All Height Requirements'
        />
        <Selector
          label='Filter by Manufacturer'
          value={manufacturerFilter}
          options={manufacturerOptions}
          onChange={setManufacturerFilter}
          placeholder='All Manufacturers'
        />
      </SelectorGroup>

      {viewMode === 'list' ? (
        <ListViewStyled.TableContainer>
          <ListViewStyled.Table>
            <ListViewStyled.TableHead>
              <ListViewStyled.TableRow>
                <ListViewStyled.TableHeader>
                  Ride Name
                </ListViewStyled.TableHeader>
                <ListViewStyled.TableHeader>
                  Location (Park)
                </ListViewStyled.TableHeader>
                <ListViewStyled.TableHeader>
                  Manufacturer
                </ListViewStyled.TableHeader>
                <ListViewStyled.TableHeader>
                  Year Opened
                </ListViewStyled.TableHeader>
              </ListViewStyled.TableRow>
            </ListViewStyled.TableHead>
            <ListViewStyled.TableBody>
              {sortedRides.map(ride => (
                <ListViewStyled.TableRow key={ride.name}>
                  <ListViewStyled.TableCell>
                    <ListViewStyled.RoomLink
                      href={`/rides/ride-info/${formatString(
                        ride.name,
                        'dash',
                        'lower'
                      )}`}
                    >
                      {ride.name}
                    </ListViewStyled.RoomLink>
                  </ListViewStyled.TableCell>
                  <ListViewStyled.TableCell>
                    {ride.park}
                  </ListViewStyled.TableCell>
                  <ListViewStyled.TableCell>
                    {ride.manufacturer || 'Unknown'}
                  </ListViewStyled.TableCell>
                  <ListViewStyled.TableCell>
                    {ride.yearOpened || 'Unknown'}
                  </ListViewStyled.TableCell>
                </ListViewStyled.TableRow>
              ))}
            </ListViewStyled.TableBody>
          </ListViewStyled.Table>
        </ListViewStyled.TableContainer>
      ) : (
        <CardsFlex key={`cards-${renderCount}-${manufacturerFilter}`}>
          {sortedRides.map((ride, index) => {
            const cardKey = `${renderCount}-${manufacturerFilter}-${ride.name}`
            return (
              <Card item={ride} type='ride' key={cardKey}>
                {Object.entries(ride)
                  .filter(([key, value]) => value !== null && value !== '')
                  .map(([key, value]) => (
                    <CardStat
                      stat={key}
                      value={value as string | number}
                      key={key}
                    />
                  ))}
              </Card>
            )
          })}
        </CardsFlex>
      )}
    </MainContent>
  )
}

export default Rides
