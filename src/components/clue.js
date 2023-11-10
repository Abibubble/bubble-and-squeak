import styled from 'styled-components'
import styles from '../styles/styles'

import clueImg from '../images/clue.webp'

export default function Clue({ ...props }) {
  return <StyledClue className={props.className}>{props.children}</StyledClue>
}

const StyledClue = styled.div`
  min-height: 60px;
  width: 80%;
  padding: ${styles.spacer.medium};
  background: url(${clueImg}) no-repeat center center;
  background-size: cover;
  margin: 0 auto;
`
