import styled from 'styled-components'
import { fonts, spacing, colours } from '../../theme'

export const TableContainer = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  margin: ${spacing.tiny} 0;
  border-radius: ${spacing.fine};
  box-shadow: 0 ${spacing.mini} ${spacing.tiny} ${colours.shadowLight};
  background: ${colours.white};

  @media (min-width: 480px) {
    margin: ${spacing.small} 0;
    border-radius: ${spacing.tiny};
  }
`

export const Table = styled.table`
  width: 100%;
  max-width: 100%;
  border-collapse: collapse;
  font-size: ${fonts.small};
  min-width: 320px;
  table-layout: fixed;

  @media (min-width: 360px) {
    min-width: 400px;
  }

  @media (min-width: 480px) {
    min-width: 500px;
    table-layout: auto;
  }

  @media (min-width: 640px) {
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
  padding: ${spacing.tiny} ${spacing.fine};
  text-align: left;
  font-weight: 600;
  color: ${colours.slateGrey};
  border-bottom: ${spacing.micro} solid ${colours.borderGrey};
  font-size: ${fonts.small};
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (min-width: 480px) {
    padding: 12px ${spacing.small};
  }
`

export const TableCell = styled.td`
  padding: ${spacing.tiny} ${spacing.fine};
  vertical-align: middle;
  color: ${colours.charcoal};
  font-size: ${fonts.small};
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  hyphens: auto;
  min-width: 0;
  max-width: 0;
  width: 1%;

  @media (min-width: 480px) {
    padding: 12px ${spacing.small};
    max-width: none;
    width: auto;
  }
`

export const Link = styled.a`
  color: ${colours.blue};
  text-decoration: none;
  font-weight: 500;
  display: block;
  white-space: normal;
  max-width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  min-width: 0;

  &:hover {
    text-decoration: underline;
    color: ${colours.darkBlue};
  }
`

interface ScoreCellProps {
  score?: string | number
}

export const ScoreCell = styled.span<ScoreCellProps>`
  display: inline-block;
  padding: ${spacing.fine} ${spacing.tiny};
  border-radius: ${spacing.fine};
  font-weight: 600;
  text-align: center;
  min-width: 30px;
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

  @media (min-width: 480px) {
    min-width: 40px;
  }
`
