const convertRatingsToOverall = ratings => {
  if (!ratings || typeof ratings !== 'object') {
    return '0%'
  }

  const values = Object.values(ratings)

  if (values.length === 0) return '0%'

  let overallRating = values.reduce((sum, rating) => sum + Number(rating), 0)
  overallRating = overallRating / (values.length * 10)
  overallRating = overallRating * 100 + '%'
  return overallRating
}

export default convertRatingsToOverall
