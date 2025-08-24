import styled from 'styled-components'
import { fonts, spacing, colours, breakpoints } from '../../../theme'

export const PageWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`

export const Location = styled.p`
  text-align: center;
  margin: ${spacing.tiny} 0;

  a {
    color: ${colours.blue};
    text-decoration: underline;
    font-weight: 600;

    &:hover {
      color: ${colours.darkBlue};
      text-decoration: none;
    }

    &:focus {
      outline: 2px solid ${colours.blue};
      outline-offset: 2px;
    }
  }
`

export const ImageContainer = styled.div`
  margin: ${spacing.small} auto;
  width: fit-content;
`

export const Image = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
  display: flex;
  justify-self: center;

  @media (min-width: ${breakpoints.mobileLarge}) {
    max-width: 400px;
  }

  @media (min-width: ${breakpoints.tabletLarge}) {
    max-width: 600px;
  }
`

export const Description = styled.p`
  margin: ${spacing.small};
  text-align: center;
  line-height: 1.6;

  @media (min-width: ${breakpoints.mobileLarge}) {
    margin: ${spacing.small} ${spacing.medium};
  }

  @media (min-width: ${breakpoints.tabletLarge}) {
    margin: ${spacing.small} ${spacing.giant};
  }
`

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${spacing.medium};
  margin: 0 ${spacing.small} ${spacing.large};

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${spacing.medium} ${spacing.small};
  }

  @media (min-width: ${breakpoints.tabletLarge}) {
    margin: 0 ${spacing.medium} ${spacing.large};
    gap: ${spacing.medium} ${spacing.medium};
  }

  @media (min-width: ${breakpoints.desktop}) {
    margin: 0 ${spacing.giant} ${spacing.large};
  }
`

export const ReviewContainer = styled.div`
  margin: ${spacing.medium} 0 ${spacing.large};
  padding: ${spacing.small};
  border: ${spacing.mini} solid ${colours.borderGrey};
  border-radius: ${spacing.tiny};
  background-color: ${colours.white};

  @media (min-width: ${breakpoints.mobileLarge}) {
    padding: ${spacing.small} ${spacing.medium};
  }
`

export const ReviewTitle = styled.h3`
  margin: 0 0 ${spacing.small} 0;
  font-size: ${fonts.large};
  color: ${colours.darkGrey};
  font-weight: 600;
`

export const ReviewText = styled.p`
  margin: 0;
  line-height: 1.6;
`
