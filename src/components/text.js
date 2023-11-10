import styled from 'styled-components'
import styles from '../styles/styles'

export default function Text({ ...props }) {
  return <StyledText>{props.children}</StyledText>
}

const StyledText = styled.p`
  margin: ${styles.spacer.small} auto;
  max-width: 500px;
`
