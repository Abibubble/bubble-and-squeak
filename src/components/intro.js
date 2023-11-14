import styled from 'styled-components'
import styles from '../styles/styles'

export default function Intro({ intro, ...props }) {
  return <StyledIntro intro={intro}>{props.children}</StyledIntro>
}

const StyledIntro = styled.h2`
  font-size: 1.5rem;
  margin: ${styles.spacer.small} 0;

  @media screen and (min-width: ${styles.breakpoint.small}) {
    margin: ${props =>
      props.intro ? `${styles.spacer.large} 0 0` : `${styles.spacer.medium} 0`};
  }

  @media screen and (min-width: ${styles.breakpoint.medium}) {
    margin: ${props => (props.intro ? `${styles.spacer.large} 0 0` : '32px 0')};
  }
`
