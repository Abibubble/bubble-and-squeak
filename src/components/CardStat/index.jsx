import * as Styled from './CardStat.styled.js'
import { formatString } from '../../utils'

export default function CardStat({ stat, value }) {
  return (
    <Styled.Stat>
      <Styled.StatKey>
        {formatString(stat, 'space', 'first-string')}
      </Styled.StatKey>
      : {value}
    </Styled.Stat>
  )
}
