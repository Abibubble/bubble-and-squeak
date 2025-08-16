import { useState } from 'react'
import parks from '../../data/parks.json'
import { filterData, getUniqueOptions, formatString } from '../../utils'
import {
  Card,
  CardsFlex,
  MainContent,
  Selector,
  SelectorGroup,
  Title,
  ViewToggle,
} from '../../components'
import { Park } from '../../types'
import * as ListViewStyled from '../../components/ListView/ListView.styled'

function Parks() {
  const [countryFilter, setCountryFilter] = useState('')
  const [viewMode, setViewMode] = useState<'list' | 'blog'>('blog')

  const countryOptions = getUniqueOptions(
    parks as Park[],
    park => park.country
  ).map(option => ({ value: option, label: option }))

  const filters = {
    country: countryFilter,
  }

  const filteredParks = filterData(parks as Park[], filters)

  return (
    <MainContent>
      <Title>Theme Parks</Title>

      <ViewToggle viewMode={viewMode} onViewChange={setViewMode} />

      <SelectorGroup>
        <Selector
          label='Filter by Country'
          value={countryFilter}
          options={countryOptions}
          onChange={setCountryFilter}
          placeholder='All Countries'
        />
      </SelectorGroup>

      {viewMode === 'list' ? (
        <ListViewStyled.TableContainer>
          <ListViewStyled.Table>
            <ListViewStyled.TableHead>
              <ListViewStyled.TableRow>
                <ListViewStyled.TableHeader>
                  Park Name
                </ListViewStyled.TableHeader>
                <ListViewStyled.TableHeader>
                  Location
                </ListViewStyled.TableHeader>
              </ListViewStyled.TableRow>
            </ListViewStyled.TableHead>
            <ListViewStyled.TableBody>
              {filteredParks
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(park => (
                  <ListViewStyled.TableRow key={park.name}>
                    <ListViewStyled.TableCell>
                      <ListViewStyled.RoomLink
                        href={`/theme-parks/park-info/${formatString(
                          park.name,
                          'dash',
                          'lower'
                        )}`}
                      >
                        {park.name}
                      </ListViewStyled.RoomLink>
                    </ListViewStyled.TableCell>
                    <ListViewStyled.TableCell>
                      {park.location}, {park.country}
                    </ListViewStyled.TableCell>
                  </ListViewStyled.TableRow>
                ))}
            </ListViewStyled.TableBody>
          </ListViewStyled.Table>
        </ListViewStyled.TableContainer>
      ) : (
        <CardsFlex>
          {filteredParks
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((park, index) => (
              <Card
                description={undefined}
                item={park}
                type='park'
                key={park.name}
              >
                <p>Location: {park.location}</p>
                <p>Opened: {park.yearOpened}</p>
              </Card>
            ))}
        </CardsFlex>
      )}
    </MainContent>
  )
}

export default Parks
