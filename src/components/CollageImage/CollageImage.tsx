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
}

function CollageImage({
  src,
  alt,
  size,
  position,
  rotation = 'none',
}: CollageImageProps) {
  return (
    <Styled.CollageImage
      src={src}
      alt={alt}
      $size={size}
      $row={position.row}
      $col={position.col}
      $rotation={rotation}
    />
  )
}

export default CollageImage
