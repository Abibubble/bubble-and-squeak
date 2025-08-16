import styled from 'styled-components'
import { spacing } from '../../theme'

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  gap: ${spacing.small};
  justify-content: center;
  padding: ${spacing.small};
`
