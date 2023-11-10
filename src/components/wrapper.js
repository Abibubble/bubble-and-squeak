import styled from 'styled-components'
import styles from '../styles/styles'
import woodDesktop from '../images/wood-desktop.jpeg'
import woodMobile from '../images/wood-mobile.jpeg'

export default function Wrapper({ escape, wedding, ...props }) {
  return (
    <StyledWrapper
      className={props.className}
      escape={escape}
      wedding={wedding}
    >
      {props.children}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  width: 100vw;
  text-align: center;
  height: 100%;
  min-height: 100dvh;
  font-family: 'Cormorant Garamond', Arial, Helvetica sans-serif;

  ${props =>
    props.escape &&
    `
    color: ${styles.colour.white};
    background: ${styles.colour.black} url(${woodMobile}) no-repeat fixed center center;

    @media (min-width: ${styles.breakpoint.medium}) {
      background: ${styles.colour.black} url(${woodDesktop}) no-repeat fixed center center;
    }
    `}

  ${props =>
    props.wedding &&
    `
      background: ${styles.colour.purple};
      background: ${styles.colour.gradient};
      color: ${styles.colour.black};
    `}
`
