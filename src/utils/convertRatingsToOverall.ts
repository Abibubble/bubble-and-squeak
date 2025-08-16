interface Ratings {
  [key: string]: number | string
}

function convertRatingsToOverall(
  ratings: Ratings | null | undefined,
  percentage: true
): string
function convertRatingsToOverall(
  ratings: Ratings | null | undefined,
  percentage: false
): number
function convertRatingsToOverall(
  ratings: Ratings | null | undefined,
  percentage: boolean = true
): string | number {
  if (!ratings || typeof ratings !== 'object') {
    if (percentage) return '0%'
    return 0
  }

  const values = Object.values(ratings)

  if (values.length === 0) {
    if (percentage) {
      return '0%'
    }
    return 0
  }

  let overallRating = values.reduce(
    (sum: number, rating) => sum + Number(rating),
    0
  ) as number
  overallRating = overallRating / (values.length * 10)
  overallRating = overallRating * 100
  if (percentage) {
    return overallRating + '%'
  }
  return overallRating
}

export default convertRatingsToOverall
