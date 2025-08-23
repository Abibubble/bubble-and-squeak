import styled from 'styled-components'
import { fonts, spacing, colours } from '../../theme'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${spacing.tiny};
  padding: ${spacing.tiny};
  border: ${spacing.micro} solid ${colours.lightGrey};
  box-shadow: 0 ${spacing.fine} ${spacing.tiny} ${colours.shadowMedium};
  border-radius: ${spacing.tiny};
  text-align: center;

  @media (min-width: 480px) {
    grid-template-columns: 40% 60%;
    text-align: left;
  }

  @media (min-width: 640px) {
    grid-template-columns: 30% 70%;
    gap: ${spacing.small};
  }
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
  font-size: ${fonts.body};
  margin-bottom: ${spacing.tiny};

  @media (min-width: 480px) {
    font-size: ${fonts.large};
    margin-bottom: auto;
  }

  @media (min-width: 640px) {
    font-size: ${fonts.huge};
  }
`

export const Location = styled.h3`
  font-size: ${fonts.small};
  font-weight: normal;
  margin-bottom: ${spacing.tiny};

  @media (min-width: 480px) {
    font-size: ${fonts.body};
    margin-bottom: ${spacing.small};
  }

  @media (min-width: 640px) {
    font-size: ${fonts.large};
    margin-bottom: ${spacing.medium};
  }
`

export const Description = styled.p`
  font-size: ${fonts.body};
  margin-bottom: ${spacing.small};
`

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${spacing.tiny};
  padding-bottom: ${spacing.tiny};
  text-align: center;

  @media (min-width: 360px) {
    grid-template-columns: 1fr 1fr;
    text-align: left;
  }
`
