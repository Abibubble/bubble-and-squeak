import styled from 'styled-components'
import styles from '../styles/styles'

export default function ClueText({ ...props }) {
  return (
    <StyledClueText className={props.className}>
      {props.children}
    </StyledClueText>
  )
}

const StyledClueText = styled.p`
  font-size: 1.3rem;
  width: 90%;
  margin: 0 auto;
  color: ${styles.colour.black};
  vertical-align: middle;

  @media screen and (min-width: ${styles.breakpoint.small}) {
    font-size: 1.4rem;
  }

  @media screen and (min-width: ${styles.breakpoint.medium}) {
    font-size: 1.6rem;
  }
`
