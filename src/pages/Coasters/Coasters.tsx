import { useState, useMemo } from 'react'
import coasters from '../../data/coasters.json'
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

function Coasters() {
  const [sortOrder, setSortOrder] = useState(sortOptions[0].value)
  const [locationFilter, setLocationFilter] = useState('')
  const [heightFilter, setHeightFilter] = useState('')
  const [manufacturerFilter, setManufacturerFilter] = useState('')
  const [viewMode, setViewMode] = useState<'list' | 'blog'>('blog')

  const renderCount = Date.now()

  const locationOptions = getUniqueOptions(
    coasters,
    coaster => coaster.park
  ).map(option => ({ value: option, label: option }))
  const heightOptions = getUniqueOptions(
    coasters,
    coaster => coaster.heightRequirement
  ).map(option => ({ value: option, label: option }))
  const manufacturerOptions = getUniqueOptions(
    coasters,
    coaster => coaster.manufacturer
  ).map(option => ({ value: option, label: option }))

  const filteredCoasters = useMemo(() => {
    const filters = {
      park: locationFilter,
      heightRequirement: heightFilter,
      manufacturer: manufacturerFilter,
    }

    return filterData(coasters, filters)
  }, [locationFilter, heightFilter, manufacturerFilter])

  const selectedSort = sortOptions.find(option => option.value === sortOrder)
  const sortedCoasters = selectedSort
    ? sortData(
        filteredCoasters,
        selectedSort.key,
        selectedSort.direction as 'asc' | 'desc',
        selectedSort.type as 'string' | 'number' | 'date'
      )
    : filteredCoasters

  return (
    <MainContent>
      <Title>Coasters</Title>

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
                <ListViewStyled.TableHeader>coaster</ListViewStyled.TableHeader>
                <ListViewStyled.TableHeader className='hide-small'>
                  Park
                </ListViewStyled.TableHeader>
                <ListViewStyled.TableHeader className='hide-mobile'>
                  Manufacturer
                </ListViewStyled.TableHeader>
                <ListViewStyled.TableHeader className='hide-mobile'>
                  Year
                </ListViewStyled.TableHeader>
              </ListViewStyled.TableRow>
            </ListViewStyled.TableHead>
            <ListViewStyled.TableBody>
              {sortedCoasters.map(coaster => (
                <ListViewStyled.TableRow key={coaster.name}>
                  <ListViewStyled.TableCell>
                    <ListViewStyled.RoomLink
                      href={`/coasters/coaster-info/${formatString(
                        coaster.name,
                        'dash',
                        'lower'
                      )}`}
                    >
                      {coaster.name}
                    </ListViewStyled.RoomLink>
                  </ListViewStyled.TableCell>
                  <ListViewStyled.TableCell className='hide-small'>
                    {coaster.park}
                  </ListViewStyled.TableCell>
                  <ListViewStyled.TableCell className='hide-mobile'>
                    {coaster.manufacturer || 'Unknown'}
                  </ListViewStyled.TableCell>
                  <ListViewStyled.TableCell className='hide-mobile'>
                    {coaster.yearOpened || 'Unknown'}
                  </ListViewStyled.TableCell>
                </ListViewStyled.TableRow>
              ))}
            </ListViewStyled.TableBody>
          </ListViewStyled.Table>
        </ListViewStyled.TableContainer>
      ) : (
        <CardsFlex key={`cards-${renderCount}-${manufacturerFilter}`}>
          {sortedCoasters.map((coaster, index) => {
            const cardKey = `${renderCount}-${manufacturerFilter}-${coaster.name}`
            return (
              <Card item={coaster} type='coaster' key={cardKey}>
                {Object.entries(coaster)
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

export default Coasters
