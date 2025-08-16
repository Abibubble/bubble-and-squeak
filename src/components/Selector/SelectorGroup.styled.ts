import styled from 'styled-components'
import { spacing } from '../../theme'

export const SelectorGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.medium};
  margin: ${spacing.small} 0;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${spacing.small};
  }
`
