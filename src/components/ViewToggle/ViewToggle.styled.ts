import styled from 'styled-components'
import { fonts, spacing, colours, breakpoints } from '../../theme'

export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.tiny};
  margin: ${spacing.small} auto 0;
  width: fit-content;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
    gap: 12px;
    width: auto;
  }
`

export const ToggleLabel = styled.span`
  font-size: ${fonts.body};
  font-weight: 600;
  color: ${colours.darkGrey};
`

export const ToggleButtonGroup = styled.div`
  display: flex;
  border: ${spacing.micro} solid ${colours.lightGrey};
  border-radius: 6px;
  overflow: hidden;
  background: ${colours.white};
  width: 100%;

  @media (min-width: ${breakpoints.mobileLarge}) {
    width: auto;
  }
`

interface ToggleButtonProps {
  $active?: boolean
}

export const ToggleButton = styled.button<ToggleButtonProps>`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: ${spacing.tiny} ${spacing.small};
  border: none;
  background: ${props => (props.$active ? colours.blue : colours.white)};
  color: ${props => (props.$active ? colours.white : colours.darkGrey)};
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: ${fonts.small};
  font-weight: 500;
  flex: 1;
  justify-content: center;

  &:hover {
    background: ${props =>
      props.$active ? colours.darkBlue : colours.veryLightGrey};
  }

  &:not(:last-child) {
    border-right: ${spacing.micro} solid ${colours.lightGrey};
  }

  @media (min-width: ${breakpoints.mobileLarge}) {
    flex: initial;
    justify-content: flex-start;
  }
`

export const ListIcon = styled.span`
  font-size: ${fonts.body};
`

export const BlogIcon = styled.span`
  font-size: ${fonts.body};
`
