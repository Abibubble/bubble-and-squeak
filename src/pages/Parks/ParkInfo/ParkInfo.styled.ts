import styled from 'styled-components'
import { spacing, fonts, colours, breakpoints } from '../../../theme'

export const PageWrapper = styled.article`
  margin: 0 auto;
  padding: ${spacing.medium};
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
  margin: 0 auto;
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

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${spacing.small};
  margin: ${spacing.medium} 0;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${spacing.small};
  }

  @media (min-width: ${breakpoints.tabletLarge}) {
    gap: 0 ${spacing.medium};
  }
`

export const InfoItem = styled.div`
  padding: ${spacing.small};
  border: ${spacing.mini} solid ${colours.borderGrey};
  border-radius: ${spacing.tiny};
  background-color: ${colours.white};

  @media (min-width: ${breakpoints.mobileLarge}) {
    padding: ${spacing.small} ${spacing.medium};
  }
`

export const InfoLabel = styled.strong`
  color: ${colours.darkGrey};
  font-weight: 600;
  font-size: ${fonts.body};
`

export const InfoValue = styled.span`
  margin-left: ${spacing.tiny};
  font-size: ${fonts.body};
`

export const CoastersSection = styled.section`
  margin-top: ${spacing.medium};
`

export const CoastersTitle = styled.h3`
  font-size: ${fonts.large};
  color: ${colours.darkGrey};
  margin-bottom: ${spacing.small};
  font-weight: 600;
`

export const CoastersList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${spacing.small};

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const CoasterItem = styled.div`
  border: ${spacing.mini} solid ${colours.borderGrey};
  border-radius: ${spacing.tiny};
  background-color: ${colours.white};
  transition: all 0.2s ease;
  overflow: hidden;

  &:hover {
    box-shadow: 0 4px 12px ${colours.shadowMedium};
    transform: translateY(-2px);
    border-color: ${colours.mediumGrey};
  }

  &:focus-within {
    box-shadow: 0 4px 12px ${colours.shadowMedium};
    transform: translateY(-2px);
    border-color: ${colours.blue};
    outline: 2px solid ${colours.blue};
    outline-offset: 2px;
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px ${colours.shadowLight};
  }
`

export const CoasterContent = styled.div`
  padding: ${spacing.small};
  display: block;
  text-decoration: none;
  color: inherit;

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: none;
    }

    &:focus {
      outline: none;
      text-decoration: none;
    }

    &:visited {
      color: inherit;
    }
  }

  @media (min-width: ${breakpoints.mobileLarge}) {
    padding: ${spacing.small} ${spacing.medium};
  }
`

export const CoasterCardLink = styled.a`
  text-decoration: none !important;
  color: inherit;
  display: block;
  width: 100%;
  height: 100%;

  &:hover {
    text-decoration: none !important;
    color: inherit;
  }

  &:focus {
    outline: none;
    text-decoration: none !important;
  }

  &:visited {
    color: inherit;
  }

  &:active {
    color: inherit;
  }
`

export const CoasterName = styled.h4`
  margin: 0 0 ${spacing.tiny} 0;
  font-size: 18px;
  font-weight: 600;
  color: ${colours.black};

  @media (min-width: ${breakpoints.mobileLarge}) {
    font-size: 20px;
  }
`

export const CoasterDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.tiny};
  font-size: ${fonts.small};
  color: ${colours.black};

  @media (min-width: ${breakpoints.mobileLarge}) {
    font-size: ${fonts.body};
  }
`

export const CoasterDetail = styled.span`
  &:not(:last-child) {
    margin-bottom: ${spacing.tiny};
  }
`

export const NoCoastersMessage = styled.p`
  text-align: center;
  color: ${colours.black};
  padding: ${spacing.medium};
  border: ${spacing.mini} solid ${colours.borderGrey};
  border-radius: ${spacing.tiny};
  background-color: ${colours.paleGrey};
`
