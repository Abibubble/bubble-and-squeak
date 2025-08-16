import * as Styled from './CardStat.styled'
import { formatString } from '../../utils'

export type CardStatProps = {
  stat: string
  value: string | number
}

export default function CardStat({ stat, value }: CardStatProps) {
  return (
    <Styled.Stat>
      <Styled.StatKey>
        {formatString(stat, 'space', 'first-string')}
      </Styled.StatKey>
      : {value}
    </Styled.Stat>
  )
}
