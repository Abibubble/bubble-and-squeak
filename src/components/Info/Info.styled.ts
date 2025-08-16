import styled from 'styled-components'
import { fonts, spacing, colours } from '../../theme'

export const InfoContainer = styled.div`
  border: ${spacing.mini} solid ${colours.borderGrey};
  width: 100%;
  border-radius: ${spacing.tiny};
`

export const InfoTitle = styled.h3`
  margin: ${spacing.tiny} ${spacing.small};
  font-size: ${fonts.large};
`

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: ${spacing.tiny} ${spacing.small};
  margin: ${spacing.tiny} ${spacing.small};
`

export const Key = styled.p`
  font-weight: bold;
`
