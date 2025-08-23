import styled from 'styled-components'
import { spacing, breakpoints } from '../../theme'

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.tiny};
  justify-content: center;
  padding: ${spacing.tiny};

  > article {
    width: 100%;
    max-width: 600px;
    box-sizing: border-box;
    min-width: 0;
  }

  @media (min-width: ${breakpoints.mobileLarge}) {
    gap: ${spacing.small};
    padding: ${spacing.small};

    > article {
      max-width: 700px;
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    > article {
      max-width: 800px;
    }
  }
`
