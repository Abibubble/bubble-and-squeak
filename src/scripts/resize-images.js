// resize-images.js
// Recursively resizes all .jpg, .jpeg, and .png images in a directory to 25% of their original dimensions, overwriting the originals.
// Usage: node resize-images.js <directory>

const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

async function resizeImage(filePath) {
  try {
    const image = sharp(filePath)
    const metadata = await image.metadata()
    const newWidth = Math.round(metadata.width * 0.25)
    const newHeight = Math.round(metadata.height * 0.25)
    await image.resize(newWidth, newHeight).toFile(filePath + '.tmp')
    fs.renameSync(filePath + '.tmp', filePath)
    console.log(`Resized: ${filePath}`)
  } catch (err) {
    console.error(`Failed to resize ${filePath}:`, err.message)
  }
}

function isImage(file) {
  return /\.(jpe?g|png)$/i.test(file)
}

async function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await processDir(fullPath)
    } else if (entry.isFile() && isImage(entry.name)) {
      await resizeImage(fullPath)
    }
  }
}

const targetDir = process.argv[2] || '.'
processDir(targetDir).then(() => {
  console.log('All images processed.')
})
