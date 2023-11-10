import styled from 'styled-components'
import styles from '../styles/styles'

export default function PageSection({ ...props }) {
  return <StyledPageSection>{props.children}</StyledPageSection>
}

const StyledPageSection = styled.div`
  padding: ${styles.spacer.small};
  max-width: 600px;
  margin: 0 auto;

  @media screen and (min-width: ${styles.breakpoint.medium}) {
    max-width: 740px;
  }
`
