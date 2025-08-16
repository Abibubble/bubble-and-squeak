import * as Styled from './Info.styled'
import { formatString } from '../../utils/index'

export type InfoProps = {
  item: Record<string, any>
  keys: string[]
  type: string
}

export default function Info({ item, keys, type }: InfoProps) {
  return (
    <Styled.InfoContainer>
      <Styled.InfoTitle>
        {formatString(type, 'space', 'first-string')}
      </Styled.InfoTitle>
      <Styled.InfoGrid>
        {Object.entries(item)
          .filter(
            ([key, value]) =>
              keys.includes(key) && value !== null && value !== ''
          )
          .map(([key, value]) => (
            <>
              <Styled.Key key={key}>
                {formatString(key, 'space', 'first-word')}
              </Styled.Key>
              <p>{value as any}</p>
            </>
          ))}
      </Styled.InfoGrid>
    </Styled.InfoContainer>
  )
}
