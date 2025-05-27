function parseNumber(value) {
  if (typeof value === 'number') return value
  if (!value) return 0

  const match = String(value)
    .replace(',', '')
    .match(/[\d.]+/)

  return match ? parseFloat(match[0]) : 0
}

export function sortData(data, sortKey, direction = 'asc', type = 'string') {
  return [...data].sort((a, b) => {
    // Support nested keys like 'stats.height'
    const getValue = (obj, key) =>
      key.split('.').reduce((o, k) => (o ? o[k] : undefined), obj)
    let valueA = getValue(a, sortKey)
    let valueB = getValue(b, sortKey)

    if (type === 'number') {
      valueA = parseNumber(valueA)
      valueB = parseNumber(valueB)
    } else {
      valueA = valueA || ''
      valueB = valueB || ''
    }

    if (type === 'number') {
      return direction === 'asc' ? valueA - valueB : valueB - valueA
    } else {
      return direction === 'asc'
        ? String(valueA).localeCompare(String(valueB))
        : String(valueB).localeCompare(String(valueA))
    }
  })
}
