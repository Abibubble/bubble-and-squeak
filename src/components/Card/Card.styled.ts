import styled from 'styled-components'
import { fonts, spacing, colours } from '../../theme'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  gap: ${spacing.small};
  padding: ${spacing.tiny};
  border: ${spacing.micro} solid ${colours.lightGrey};
  box-shadow: 0 ${spacing.fine} ${spacing.tiny} ${colours.shadowMedium};
  border-radius: ${spacing.tiny};
`

export const Link = styled.a`
  width: 100%;

  & ${Grid}:hover {
    // TODO: Fix the focus styling on this
    box-shadow: 0 ${spacing.tiny} ${spacing.small} ${colours.shadowDark};
  }
`

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`

export const Title = styled.h2`
  font-size: ${fonts.huge};
`

export const Location = styled.h3`
  font-size: ${fonts.large};
  font-weight: normal;
  margin-bottom: ${spacing.medium};
`

export const Description = styled.p`
  font-size: ${fonts.body};
  margin-bottom: ${spacing.small};
`

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.tiny};
  padding-bottom: ${spacing.tiny};
`
