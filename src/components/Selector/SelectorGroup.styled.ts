import styled from 'styled-components'
import { spacing, breakpoints } from '../../theme'

export const SelectorGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.tiny};
  margin: ${spacing.tiny} auto;
  align-items: center;
  justify-content: center;
  width: fit-content;

  @media (min-width: ${breakpoints.mobileLarge}) {
    margin: ${spacing.small} auto;
    gap: ${spacing.small};
  }

  @media (min-width: ${breakpoints.tabletLarge}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
