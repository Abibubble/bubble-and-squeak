import styled from 'styled-components'
import styles from '../styles/styles'

export default function TextWrapper({ ...props }) {
  return <StyledWrapper>{props.children}</StyledWrapper>
}

const StyledWrapper = styled.div`
  background-color: ${styles.colour.transparentWhite};
  max-width: 492px;
  margin: ${styles.spacer.small} auto;
  padding: ${styles.spacer.fine};
  border-radius: ${styles.spacer.tiny};
`
