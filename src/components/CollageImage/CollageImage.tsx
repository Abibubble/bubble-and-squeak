import React from 'react'
import * as Styled from './CollageImage.styled'

export interface CollageImageProps {
  src: string
  alt: string
  size: 'small' | 'medium' | 'large' | 'xlarge'
  position: {
    row: number
    col: number
  }
  rotation?: 'none' | 'left' | 'right' | 'tilted'
  width?: number
  height?: number
}

function CollageImage({
  src,
  alt,
  size,
  position,
  rotation = 'none',
  width,
  height,
}: CollageImageProps) {
  const getFormatSrc = (src: string, ext: string) => {
    return src.replace(/\.(jpg|jpeg|png)$/i, `.${ext}`)
  }
  const webpSrc = getFormatSrc(src, 'webp')

  return (
    <picture>
      <source srcSet={webpSrc} type='image/webp' />
      <Styled.CollageImage
        src={src}
        alt={alt}
        $size={size}
        $row={position.row}
        $col={position.col}
        $rotation={rotation}
        role='presentation'
        tabIndex={-1}
        aria-hidden={alt === '' ? 'true' : undefined}
        {...(width ? { width } : {})}
        {...(height ? { height } : {})}
      />
    </picture>
  )
}

export default CollageImage
