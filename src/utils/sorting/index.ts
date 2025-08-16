function parseNumber(value: unknown): number {
  if (typeof value === 'number') return value
  if (!value) return 0

  if (typeof value === 'string') {
    const parsed = parseFloat(value.replace(/[^\d.-]/g, ''))
    return isNaN(parsed) ? 0 : parsed
  }
  return 0
}

export function sortData<T>(
  data: T[],
  sortKey: string,
  direction: 'asc' | 'desc' = 'asc',
  type: 'string' | 'number' | 'date' = 'string'
): T[] {
  return [...data].sort((a, b) => {
    // Support nested keys like 'stats.height'
    const getValue = (obj: any, key: string): any =>
      key.split('.').reduce((o: any, k: string) => (o ? o[k] : undefined), obj)
    let valueA = getValue(a, sortKey)
    let valueB = getValue(b, sortKey)

    if (type === 'number') {
      valueA = parseNumber(valueA)
      valueB = parseNumber(valueB)
      return direction === 'asc' ? valueA - valueB : valueB - valueA
    }

    if (type === 'date') {
      valueA = new Date(valueA).getTime()
      valueB = new Date(valueB).getTime()
      return direction === 'asc' ? valueA - valueB : valueB - valueA
    }

    // String comparison
    const stringA = String(valueA).toLowerCase()
    const stringB = String(valueB).toLowerCase()

    if (direction === 'asc') {
      return stringA.localeCompare(stringB)
    } else {
      return stringB.localeCompare(stringA)
    }
  })
}
