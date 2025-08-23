import styled from 'styled-components'
import { fonts, spacing, colours } from '../../theme'

export const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacing.tiny};
  margin: ${spacing.small} 0;
  width: 100%;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    gap: 12px;
    width: auto;
  }
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
  width: 100%;
  min-width: auto;

  &:hover {
    background: ${colours.veryLightGrey};
    border-color: ${colours.blue};
  }

  &:focus {
    outline: none;
    border-color: ${colours.blue};
    box-shadow: 0 0 0 2px ${colours.blue}20;
  }

  @media (min-width: 480px) {
    width: auto;
    min-width: 120px;
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
