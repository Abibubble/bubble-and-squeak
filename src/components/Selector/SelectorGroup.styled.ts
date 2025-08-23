import styled from 'styled-components'
import { spacing, breakpoints } from '../../theme'

export const SelectorGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.tiny};
  margin: ${spacing.tiny} 0;
  align-items: flex-start;

  @media (min-width: ${breakpoints.mobileLarge}) {
    margin: ${spacing.small} 0;
    gap: ${spacing.small};
  }

  @media (min-width: ${breakpoints.tabletLarge}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: ${spacing.medium};
  }
`
