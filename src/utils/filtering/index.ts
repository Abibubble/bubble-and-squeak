export function getUniqueOptions<T>(
  array: T[],
  accessor: (item: T) => unknown,
  type: 'string' | 'number' = 'string',
  direction: 'asc' | 'desc' = 'asc'
): (string | number)[] {
  let options = Array.from(new Set(array.map(accessor))).filter(Boolean)
  if (type === 'number') {
    options = options.map(Number).filter(n => !isNaN(n))
  }
  options.sort((a, b) => {
    if (type === 'number') {
      return direction === 'asc'
        ? (a as number) - (b as number)
        : (b as number) - (a as number)
    }
    if (direction === 'asc') {
      return String(a).localeCompare(String(b))
    }
    return String(b).localeCompare(String(a))
  })
  return options as (string | number)[]
}

export function filterData<T>(
  data: T[],
  filters: Record<string, unknown>
): T[] {
  return data.filter(item =>
    Object.entries(filters).every(([key, value]) => {
      if (!value) return true

      const keys = key.split('.')
      let itemValue: any = item

      for (const k of keys) {
        if (itemValue == null) return false
        itemValue = itemValue[k]
      }

      return String(itemValue) === String(value)
    })
  )
}
