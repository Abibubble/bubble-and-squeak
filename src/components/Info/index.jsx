import * as Styled from './Info.styled.js'
import { formatString } from '../../utils/index.js'

export default function Info({ item, keys, type }) {
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
              <p>{value}</p>
            </>
          ))}
      </Styled.InfoGrid>
    </Styled.InfoContainer>
  )
}
