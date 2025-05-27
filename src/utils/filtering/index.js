export function getUniqueOptions(array, accessor) {
  return Array.from(new Set(array.map(accessor))).filter(Boolean)
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
