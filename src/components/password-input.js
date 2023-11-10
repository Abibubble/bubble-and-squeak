import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import styles from '../styles/styles'

import SubmitButton from './submit-button'

export default function PasswordInput({ intro = false }) {
  const navigate = useNavigate()

  const passwordOne = process.env.REACT_APP_PASSWORD_ONE
  const passwordTwo = process.env.REACT_APP_PASSWORD_TWO
  const passwordThree = process.env.REACT_APP_PASSWORD_THREE
  const passwordFour = process.env.REACT_APP_PASSWORD_FOUR
  const passwordFive = process.env.REACT_APP_PASSWORD_FIVE
  const passwordSix = process.env.REACT_APP_PASSWORD_SIX
  const passwordSixAlt = process.env.REACT_APP_PASSWORD_SIX_ALT
  const passwordSkip = process.env.REACT_APP_PASSWORD_SKIP
  const passwordSkipAlt = process.env.REACT_APP_PASSWORD_SKIP_ALT

  function checkPassword(event) {
    event.preventDefault()
    const pathname = window.location.pathname

    let passwordInput = ''

    if (pathname === '/science' || pathname === '/maths') {
      for (let i = 1; i <= 4; i++) {
        passwordInput += document.getElementById('dial-' + i).value
      }
    } else {
      passwordInput = document
        .getElementById('password-input')
        .value.toLowerCase()
      passwordInput = passwordInput.replace(/\s/g, '')
    }

    if (passwordInput === passwordSix || passwordInput === passwordSixAlt) {
      navigate('/welcome', { replace: true })
    } else {
      if (pathname === '/password') {
        passwordInput === passwordOne
          ? navigate('/poem', { replace: true })
          : alert('Oops, try again!')
      } else if (pathname === '/poem') {
        passwordInput === passwordTwo
          ? navigate('/pigpen', { replace: true })
          : alert('Oops, try again!')
      } else if (pathname === '/pigpen') {
        passwordInput === passwordThree
          ? navigate('/science', { replace: true })
          : alert('Oops, try again!')
      } else if (pathname === '/science') {
        passwordInput === passwordFour
          ? navigate('/maths', { replace: true })
          : alert('Oops, try again!')
      } else if (pathname === '/maths') {
        passwordInput === passwordFive
          ? navigate('/riddle', { replace: true })
          : alert('Oops, try again!')
      } else if (pathname === '/riddle') {
        passwordInput === passwordSix || passwordInput === passwordSixAlt
          ? navigate('/welcome', { replace: true })
          : alert('Oops, try again!')
      } else if (pathname === '/') {
        passwordInput === passwordSkip || passwordInput === passwordSkipAlt
          ? navigate('/welcome', { replace: true })
          : alert('Oops, check your email to confirm this password!')
      }
    }
  }

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const dials = [1, 2, 3, 4]

  return (
    <Form onSubmit={checkPassword} intro={intro}>
      <Label for='password'>Enter here:</Label>
      {window.location.pathname === '/science' ||
      window.location.pathname === '/maths' ? (
        <LockWrapper>
          {dials.map(dial => (
            <SelectInput key={dial} name={`dial-${dial}`} id={`dial-${dial}`}>
              {numbers.map(number => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </SelectInput>
          ))}
        </LockWrapper>
      ) : (
        <Input type='text' id='password-input' name='password' />
      )}
      <SubmitButton value='Submit' />
      <br />
      {!intro && (
        <SmallText>
          All the clues you need are on (or linked to from) this page. If you
          need help, feel free to ask Abi or Conor.
        </SmallText>
      )}
    </Form>
  )
}

const Form = styled.form`
  padding: ${styles.spacer.small};
  border-radius: ${styles.spacer.tiny};

  @media (min-width: ${styles.breakpoint.medium}) {
    margin: ${styles.spacer.medium} 0;
  }

  ${props => props.intro && `margin: ${styles.spacer.medium} 0 0;`}
`

const Label = styled.label`
  margin: ${styles.spacer.tiny};
  font-size: 1.4rem;
`

const Input = styled.input`
  width: 50%;
  max-width: 200px;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(
    to left,
    ${styles.colour.darkBlue},
    ${styles.colour.darkPurple}
  );
  font-size: 1.4rem;

  @media (min-width: ${styles.breakpoint.medium}) {
    width: 30%;
  }
`

const SmallText = styled.p`
  font-size: 1rem;
  font-style: italic;
  max-width: 400px;
  margin: ${styles.spacer.tiny} auto 0;

  @media screen and (min-width: ${styles.breakpoint.small}) {
    font-size: 1.1rem;
  }

  @media screen and (min-width: 500px) {
    margin: ${styles.spacer.small} auto 0;
  }
`

const LockWrapper = styled.div`
  height: 38px;
  margin-top: ${styles.spacer.small};
`

const SelectInput = styled.select`
  height: 100%;
  width: ${styles.spacer.large};
  text-align: center;
`
