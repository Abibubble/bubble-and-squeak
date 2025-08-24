import styled from 'styled-components'
import { spacing, colours } from '../../theme'

interface CollageImageStyledProps {
  $row: number
  $col: number
  $size: 'small' | 'medium' | 'large' | 'xlarge'
  $rotation: 'none' | 'left' | 'right' | 'tilted'
}

const rotations = {
  left: '-8deg',
  right: '8deg',
  tilted: '4deg',
  none: '0deg',
}

const mobileSizes = {
  xlarge: { width: '42%', height: '100px' },
  large: { width: '40%', height: '90px' },
  medium: { width: '36%', height: '80px' },
  small: { width: '34%', height: '70px' },
}

const tabletSizes = {
  xlarge: { width: '32%', height: '135px' },
  large: { width: '30%', height: '120px' },
  medium: { width: '28%', height: '105px' },
  small: { width: '26%', height: '90px' },
}

const desktopSizes = {
  xlarge: { width: '35%', height: '180px' },
  large: { width: '32%', height: '160px' },
  medium: { width: '29%', height: '140px' },
  small: { width: '26%', height: '120px' },
}

const zIndexes = {
  xlarge: 2,
  large: 2,
  medium: 1,
  small: 1,
}

export const CollageImage = styled.img<CollageImageStyledProps>`
  position: absolute;
  border-radius: ${spacing.tiny};
  box-shadow: 0 ${spacing.fine} ${spacing.small} ${colours.shadowMedium};
  object-fit: cover;
  border: ${spacing.tiny} solid ${colours.white};
  pointer-events: none;
  user-select: none;

  width: ${({ $size }) => mobileSizes[$size].width};
  height: ${({ $size }) => mobileSizes[$size].height};
  top: ${({ $row }) => $row * 90 + 10}px;
  left: ${({ $col }) => $col * 44 + 8}%;

  z-index: ${({ $size }) => zIndexes[$size]};
  transform: rotate(${({ $rotation }) => rotations[$rotation]});

  ${({ $row, $col }) => {
    if ($row === 3 || $col === 2) {
      return 'display: none;'
    }
    return ''
  }}

  @media (max-width: 360px) {
    left: ${({ $col }) => $col * 42 + 10}%;
    width: ${({ $size }) => {
      const sizes = {
        xlarge: '38%',
        large: '36%',
        medium: '32%',
        small: '30%',
      }
      return sizes[$size]
    }};
  }

  @media (min-width: 768px) {
    width: ${({ $size }) => tabletSizes[$size].width};
    height: ${({ $size }) => tabletSizes[$size].height};
    top: ${({ $row }) => $row * 125 + 15}px;
    left: ${({ $col }) => $col * 32 + 6}%;

    ${({ $row }) => {
      if ($row === 3) {
        return 'display: none;'
      }
      return 'display: block;'
    }}
  }

  @media (min-width: 1024px) {
    width: ${({ $size }) => desktopSizes[$size].width};
    height: ${({ $size }) => desktopSizes[$size].height};
    top: ${({ $row }) => $row * 160 + 20}px;
    left: ${({ $col }) => $col * 32 + 2}%;

    display: block;
  }
`
