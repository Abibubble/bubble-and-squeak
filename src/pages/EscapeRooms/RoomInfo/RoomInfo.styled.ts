import styled from 'styled-components'
import { spacing } from '../../../theme'

export const Location = styled.p`
  font-style: italic;
  text-align: center;
  margin: ${spacing.tiny} 0;
`

export const ImageContainer = styled.div`
  margin: 0 auto;
  width: fit-content;
`

export const Image = styled.img`
  max-width: 400px;
  height: auto;
`

export const Description = styled.p`
  margin: ${spacing.small} ${spacing.giant};
  font-style: italic;
`

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 ${spacing.medium};
  margin: 0 ${spacing.giant};
`
