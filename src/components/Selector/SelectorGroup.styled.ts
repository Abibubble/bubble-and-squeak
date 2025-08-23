import styled from 'styled-components'
import { spacing } from '../../theme'

export const SelectorGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.tiny};
  margin: ${spacing.tiny} 0;
  align-items: flex-start;

  @media (min-width: 480px) {
    margin: ${spacing.small} 0;
    gap: ${spacing.small};
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: ${spacing.medium};
  }
`
