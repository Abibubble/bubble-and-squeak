import styled from 'styled-components'
import styles from '../styles/styles'

export default function SubmitButton({ value }) {
  return <Button type='submit' value={value} />
}

const Button = styled.input`
  cursor: pointer;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  margin: ${styles.spacer.tiny};
  border: 6px solid;
  border-image-slice: 1;
  border-width: ${styles.spacer.fine};
  background: ${styles.colour.transparentWhite};
  font-size: 1.4rem;
  padding: 0 ${styles.spacer.small};
`
