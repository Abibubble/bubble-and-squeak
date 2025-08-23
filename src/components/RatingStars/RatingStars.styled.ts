import styled from 'styled-components'
import { spacing } from '../../theme'

export const Rating = styled.p`
  text-align: center;
  margin: ${spacing.fine} 0;
  font-size: 1em;
  letter-spacing: 1px;

  @media (min-width: 480px) {
    font-size: 1.2em;
    letter-spacing: 2px;
    margin: ${spacing.tiny} 0;
  }
`

export const FullStar = styled.span`
  color: #ffd700;
  -webkit-text-stroke: 2px black;
  text-stroke: 2px black;
  margin-right: 2px;
`

export const EmptyStar = styled.span`
  color: transparent;
  -webkit-text-stroke: 2px black;
  text-stroke: 2px black;
  margin-right: 2px;
`

export const HalfStar = styled.span`
  position: relative;
  display: inline-block;
  margin-right: 2px;
`

export const HalfStarFilled = styled.span`
  color: #ffd700;
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  overflow: hidden;
  -webkit-text-stroke: 2px black;
  text-stroke: 2px black;
`

export const HalfStarEmpty = styled.span`
  color: transparent;
  -webkit-text-stroke: 2px black;
  text-stroke: 2px black;
`

export const SpecialStar = styled.span`
  color: #ff8c00;
  -webkit-text-stroke: 2px black;
  text-stroke: 2px black;
  margin-left: 4px;
`
