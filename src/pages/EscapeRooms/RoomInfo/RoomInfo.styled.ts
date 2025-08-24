import styled from 'styled-components'
import { spacing, fonts, colours, breakpoints } from '../../../theme'

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
  margin: 0 auto;
  width: fit-content;
`

export const Image = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;

  @media (min-width: ${breakpoints.mobileLarge}) {
    max-width: 400px;
  }
`

export const Description = styled.p`
  margin: ${spacing.small};

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
  margin: 0 ${spacing.small};

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${spacing.small};
  }

  @media (min-width: ${breakpoints.tabletLarge}) {
    margin: 0 ${spacing.medium};
    gap: 0 ${spacing.medium};
  }

  @media (min-width: ${breakpoints.desktop}) {
    margin: 0 ${spacing.giant};
  }
`

export const OurEscapeContainer = styled.div`
  margin: ${spacing.medium} ${spacing.small} ${spacing.large};
  padding: ${spacing.small};
  border: ${spacing.mini} solid ${colours.lightGrey};
  border-radius: ${spacing.tiny};
  background-color: ${colours.white};

  @media (min-width: ${breakpoints.mobileLarge}) {
    padding: ${spacing.small} ${spacing.small};
  }

  @media (min-width: ${breakpoints.tabletLarge}) {
    margin: ${spacing.medium} ${spacing.medium} ${spacing.large};
  }

  @media (min-width: ${breakpoints.desktop}) {
    margin: ${spacing.medium} ${spacing.giant} ${spacing.large};
  }
`

export const EscapeHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacing.small};
  margin-bottom: ${spacing.small};

  @media (min-width: ${breakpoints.mobileLarge}) {
    flex-direction: row;
    align-items: center;
    gap: ${spacing.medium};
  }
`

export const OurEscapeTitle = styled.h3`
  margin: 0;
  font-size: ${fonts.body};
  color: ${colours.darkGrey};
  font-weight: 600;

  @media (min-width: ${breakpoints.mobileLarge}) {
    font-size: ${fonts.large};
  }
`

export const EscapeDetail = styled.p`
  margin: 0;
  line-height: 1.6;
  font-weight: normal;
`

export const EscapeReview = styled.p`
  margin: ${spacing.small} 0 0;
  line-height: 1.6;
`
