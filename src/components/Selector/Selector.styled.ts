import styled from 'styled-components'
import { fonts, spacing, colours } from '../../theme'

export const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: ${spacing.small} 0;
`

export const SelectorLabel = styled.span`
  font-size: ${fonts.body};
  font-weight: 600;
  color: ${colours.darkGrey};
`

export const SelectorWrapper = styled.div`
  position: relative;
  display: inline-block;
`

export const Select = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: ${spacing.tiny} ${spacing.small};
  padding-right: 32px;
  border: ${spacing.micro} solid ${colours.lightGrey};
  border-radius: 6px;
  background: ${colours.white};
  color: ${colours.darkGrey};
  font-size: ${fonts.small};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 120px;

  &:hover {
    background: ${colours.veryLightGrey};
    border-color: ${colours.blue};
  }

  &:focus {
    outline: none;
    border-color: ${colours.blue};
    box-shadow: 0 0 0 2px ${colours.blue}20;
  }
`

export const DropdownIcon = styled.div`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${colours.darkGrey};
  font-size: ${fonts.small};
`
