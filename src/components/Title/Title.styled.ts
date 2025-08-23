import styled from 'styled-components'
import { fonts, spacing, colours } from '../../theme'

export const TitleText = styled.h1`
  font-size: ${fonts.large};
  padding: ${spacing.tiny} ${spacing.small};
  text-align: center;
  color: ${colours.darkGrey};
  line-height: 1.2;

  @media (min-width: 480px) {
    font-size: ${fonts.huge};
    padding: ${spacing.small} ${spacing.small};
  }

  @media (min-width: 768px) {
    font-size: ${fonts.title};
    padding: ${spacing.small} 0;
  }
`
