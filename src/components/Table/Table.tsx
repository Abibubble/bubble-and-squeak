import React from 'react'
import * as Styled from './Table.styled'

export interface TableColumn<T = any> {
  key: string
  header: string
  render?: (item: T) => React.ReactNode
  accessor?: (item: T) => any
}

interface TableProps<T = any> {
  data: T[]
  columns: TableColumn<T>[]
  keyExtractor?: (item: T, index: number) => string | number
}

export default function Table<T extends Record<string, any> = any>({
  data,
  columns,
  keyExtractor = (item, index) => index,
}: TableProps<T>) {
  return (
    <Styled.TableContainer>
      <Styled.Table>
        <Styled.TableHead>
          <Styled.TableRow>
            {columns.map(column => (
              <Styled.TableHeader key={column.key}>
                {column.header}
              </Styled.TableHeader>
            ))}
          </Styled.TableRow>
        </Styled.TableHead>
        <Styled.TableBody>
          {data.map((item, index) => (
            <Styled.TableRow key={keyExtractor(item, index)}>
              {columns.map(column => (
                <Styled.TableCell key={column.key}>
                  {column.render
                    ? column.render(item)
                    : column.accessor
                    ? column.accessor(item)
                    : item[column.key]}
                </Styled.TableCell>
              ))}
            </Styled.TableRow>
          ))}
        </Styled.TableBody>
      </Styled.Table>
    </Styled.TableContainer>
  )
}
