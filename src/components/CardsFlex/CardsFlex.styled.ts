import styled from 'styled-components'
import { spacing, breakpoints } from '../../theme'

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  gap: ${spacing.tiny};
  justify-content: center;
  padding: ${spacing.tiny};

  @media (min-width: ${breakpoints.mobileLarge}) {
    gap: ${spacing.small};
    padding: ${spacing.small};
  }
`
