export const formatString = (text, spacing, casing, url = true) => {
  let spacedText = text
  let formattedText

  if (url && typeof spacedText === 'string') {
    spacedText = spacedText
      .replace(/\s*\(.*?\)\s*/g, '')
      .replace(/&/g, 'and')
      .replace(/['#:.\\\\/]/g, '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim()
  }

  spacedText = spacedText.replace(/(?!^)([A-Z])/g, ' $1')

  switch (spacing) {
    case 'space':
      spacedText = spacedText.split('-').join(' ')
      spacedText = spacedText.split('_').join(' ')
      break
    case 'dash':
      spacedText = spacedText.split(' ').join('-')
      spacedText = spacedText.split('_').join('-')
      spacedText = spacedText.replace(/-+/g, '-')
      break
    case 'under':
      spacedText = spacedText.split(' ').join('_')
      spacedText = spacedText.split('-').join('_')
      break
    default:
      spacedText = spacedText.split('-').join('')
      spacedText = spacedText.split('_').join('')
      spacedText = spacedText.split(' ').join('')
      break
  }

  switch (casing) {
    case 'upper':
      formattedText = spacedText.toUpperCase()
      break
    case 'lower':
      formattedText = spacedText.toLowerCase()
      break
    case 'first-string':
      formattedText =
        spacedText.charAt(0).toUpperCase() + spacedText.slice(1).toLowerCase()
      break
    default:
      formattedText = spacedText.replace(/(?:^|\s)\S/g, a => a.toUpperCase())
      break
  }

  return formattedText
}

export default formatString
