import styled from 'styled-components'
import { fonts, spacing, colours } from '../../theme'

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: ${spacing.small} 0;
  border-radius: ${spacing.tiny};
  box-shadow: 0 ${spacing.mini} ${spacing.tiny} ${colours.shadowLight};
  background: ${colours.white};
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: ${fonts.small};
  min-width: 600px;
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
  padding: 12px ${spacing.small};
  text-align: left;
  font-weight: 600;
  color: ${colours.slateGrey};
  border-bottom: ${spacing.micro} solid ${colours.borderGrey};
`

export const TableCell = styled.td`
  padding: 12px ${spacing.small};
  vertical-align: middle;
  color: ${colours.charcoal};
`

export const RoomLink = styled.a`
  color: ${colours.blue};
  text-decoration: none;
  font-weight: 500;

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
  min-width: 40px;
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
`
