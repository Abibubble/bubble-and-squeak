export function getUniqueOptions(
  array,
  accessor,
  type = 'string',
  direction = 'asc'
) {
  let options = Array.from(new Set(array.map(accessor))).filter(Boolean)
  if (type === 'number') {
    options = options.map(Number).filter(n => !isNaN(n))
  }
  options.sort((a, b) => {
    if (type === 'number') {
      return direction === 'asc' ? a - b : b - a
    }
    if (direction === 'asc') {
      return String(a).localeCompare(String(b))
    }
    return String(b).localeCompare(String(a))
  })
  return options
}

export function filterData(data, filters) {
  return data.filter(item =>
    Object.entries(filters).every(([key, value]) => {
      if (!value) return true

      const keys = key.split('.')
      let itemValue = item

      for (const k of keys) {
        if (itemValue == null) return false
        itemValue = itemValue[k]
      }

      return String(itemValue) === String(value)
    })
  )
}
