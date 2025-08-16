import styled from 'styled-components'
import { fonts, spacing, colours } from '../../theme'

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: ${spacing.small} 0;
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

  &:hover {
    background: ${props =>
      props.$active ? colours.darkBlue : colours.veryLightGrey};
  }

  &:not(:last-child) {
    border-right: ${spacing.micro} solid ${colours.lightGrey};
  }
`

export const ListIcon = styled.span`
  font-size: ${fonts.body};
`

export const BlogIcon = styled.span`
  font-size: ${fonts.body};
`
