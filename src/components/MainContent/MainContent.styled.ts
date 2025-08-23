import styled from 'styled-components'
import { colours, spacing } from '../../theme'

export const ContentContainer = styled.section`
  margin: 0 auto;
  width: 100%;
  padding: 0 ${spacing.tiny};
  background: ${colours.white};
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (min-width: 480px) {
    padding: 0;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (max-width: 1199px) {
    max-width: 95%;
  }
`
