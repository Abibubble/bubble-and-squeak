import styled from 'styled-components'
import { fonts, spacing, colours, breakpoints } from '../../theme'

export const TableContainer = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  margin: ${spacing.tiny} 0;
  border-radius: ${spacing.fine};
  box-shadow: 0 ${spacing.mini} ${spacing.tiny} ${colours.shadowLight};
  background: ${colours.white};

  @media (min-width: ${breakpoints.mobileLarge}) {
    margin: ${spacing.small} 0;
    border-radius: ${spacing.tiny};
    overflow-x: auto;
  }
`

export const Table = styled.table`
  width: 100%;
  max-width: 100%;
  border-collapse: collapse;
  font-size: ${fonts.small};
  min-width: 320px;
  table-layout: auto;

  @media (min-width: ${breakpoints.mobileSmall}) {
    min-width: 360px;
  }

  @media (min-width: ${breakpoints.mobileLarge}) {
    min-width: 500px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    min-width: 600px;
  }
`

export const TableHead = styled.thead`
  background: ${colours.paleGrey};
  border-bottom: ${spacing.mini} solid ${colours.borderGrey};
`

export const TableBody = styled.tbody`
  tr:nth-child(even) {
    background-color: ${colours.paleGrey};
  }

  tr:hover {
    background-color: ${colours.softGrey};
  }
`

export const TableRow = styled.tr`
  border-bottom: ${spacing.micro} solid ${colours.borderGrey};
`

export const TableHeader = styled.th`
  padding: ${spacing.fine} ${spacing.micro};
  text-align: left;
  font-weight: 600;
  color: ${colours.slateGrey};
  border-bottom: ${spacing.micro} solid ${colours.borderGrey};
  font-size: ${fonts.small};
  word-wrap: break-word;

  @media (min-width: ${breakpoints.mobileSmall}) {
    padding: ${spacing.tiny} ${spacing.fine};
  }

  @media (min-width: ${breakpoints.mobileLarge}) {
    padding: 12px ${spacing.small};
  }

  &.hide-mobile {
    display: none;

    @media (min-width: ${breakpoints.tablet}) {
      display: table-cell;
    }
  }

  &.hide-small {
    display: none;

    @media (min-width: ${breakpoints.mobileLarge}) {
      display: table-cell;
    }
  }
`

export const TableCell = styled.td`
  padding: ${spacing.fine} ${spacing.micro};
  vertical-align: middle;
  color: ${colours.charcoal};
  font-size: ${fonts.small};
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  hyphens: auto;
  min-width: 0;

  @media (min-width: ${breakpoints.mobileSmall}) {
    padding: ${spacing.tiny} ${spacing.fine};
  }

  @media (min-width: ${breakpoints.mobileLarge}) {
    padding: 12px ${spacing.small};
  }

  &.hide-mobile {
    display: none;

    @media (min-width: ${breakpoints.tablet}) {
      display: table-cell;
    }
  }

  &.hide-small {
    display: none;

    @media (min-width: ${breakpoints.mobileLarge}) {
      display: table-cell;
    }
  }
`

export const RoomLink = styled.a`
  color: ${colours.blue};
  text-decoration: none;
  font-weight: 500;
  word-wrap: break-word;
  overflow-wrap: break-word;
  display: block;
  white-space: normal;
  max-width: 100%;
  min-width: 0;
  width: 100%;

  &:hover {
    text-decoration: underline;
    color: ${colours.darkBlue};
  }

  &:focus {
    outline: 2px solid ${colours.blue};
    outline-offset: 2px;
    text-decoration: underline;
    color: ${colours.darkBlue};
  }
`

interface ScoreCellProps {
  score?: string | number
}

export const ScoreCell = styled.span<ScoreCellProps>`
  display: inline-block;
  padding: ${spacing.micro} ${spacing.fine};
  border-radius: ${spacing.fine};
  font-weight: 600;
  text-align: center;
  min-width: 25px;
  font-size: ${fonts.small};
  color: ${colours.white};
  background-color: ${props => {
    const score = Number(props.score)
    if (!props.score || props.score === 'N/A' || isNaN(score))
      return colours.mutedGrey
    if (score >= 8) return colours.green
    if (score >= 6) return colours.yellow
    if (score >= 4) return colours.orange
    return colours.red
  }};

  @media (min-width: ${breakpoints.mobileSmall}) {
    padding: ${spacing.fine} ${spacing.tiny};
    min-width: 30px;
  }

  @media (min-width: ${breakpoints.mobileLarge}) {
    min-width: 40px;
  }
`
