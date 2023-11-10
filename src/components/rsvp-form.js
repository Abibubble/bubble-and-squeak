import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'

import styled from 'styled-components'
import styles from '../styles/styles'

import Button from './button'
import SubmitButton from './submit-button'

import guestList from '../data/guest-list'

export default function RsvpForm() {
  const [guestAttending, setGuestAttending] = useState(false)
  const [isModalOpen, setModalOpen] = useState(false)

  const form = useRef()
  const navigate = useNavigate()

  function handleAttendingChange(event) {
    const attending = event.target.value === 'Yes' && true
    setGuestAttending(attending)
  }

  function handleModalOpen() {
    window.scrollTo(0, 0)
    setModalOpen(true)
  }

  function sendEmail(event) {
    event.preventDefault()
    emailjs
      .sendForm(
        'rsvp_service',
        'rsvp_form',
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        result => {
          handleModalOpen()
        },
        error => {
          alert(
            'Oh no! Something went wrong! Please send us an email at the.harrison.nyes@gmail.com'
          )
        }
      )
  }

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <Label for='user_name'>Name</Label>
        <Select name='user_name' id='user_name' required>
          <option value=''>Please select</option>
          {guestList.map(guest => {
            return (
              <option key={guest} value={guest}>
                {guest}
              </option>
            )
          })}
        </Select>
        <Label htmlFor='attending'>Will you be attending?</Label>
        <Select
          name='attending'
          id='attending'
          onChange={handleAttendingChange}
          required
        >
          <option value=''>Please select</option>
          <option value='Yes'>Yes</option>
          <option value='No'>No</option>
        </Select>
        {guestAttending && (
          <>
            <Label for='user_email'>Email</Label>
            <Input type='email' name='user_email' id='user_email' required />
            <Label for='phone_number'>Phone Number</Label>
            <Input type='tel' name='phone_number' id='phone_number' required />
            <Label for='allergy'>Any allergies?</Label>
            <Textarea name='allergy' id='allergy' />
            <Label for='dietary'>Any dietary restrictions?</Label>
            <Textarea name='dietary' id='dietary' />
            <Label for='song'>Any song requests?</Label>
            <Textarea name='song' id='song' />
          </>
        )}
        <br />
        <SubmitButton value='Send' />
      </form>
      <ModalOverlay isModalOpen={isModalOpen} />
      <ModalContainer isModalOpen={isModalOpen}>
        <ModalTitle>Thank you!</ModalTitle>
        <ModalContent>We've received your RSVP.</ModalContent>
        <ModalContent>
          Do you need to add an RSVP for another person?
        </ModalContent>
        <Button onClick={() => window.location.reload()}>Yes</Button>
        <Button onClick={() => navigate('/welcome', { replace: true })}>
          No
        </Button>
      </ModalContainer>
    </>
  )
}

const Label = styled.label`
  display: block;
  margin: 0 auto;
  font-size: 1.4rem;
`

const Input = styled.input`
  display: block;
  margin: 0 auto;
  width: 75%;
  max-width: 300px;
  font-family: 'Cormorant Garamond', Arial, Helvetica sans-serif;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(
    to left,
    ${styles.colour.darkBlue},
    ${styles.colour.darkPurple}
  );
  font-size: 1.4rem;

  &:not([type='radio']) {
    margin-bottom: ${styles.spacer.medium};
  }

  &[type='radio'] {
    height: ${styles.spacer.small};
  }

  @media (min-width: ${styles.breakpoint.small}) {
    width: 60%;
  }

  @media (min-width: ${styles.breakpoint.medium}) {
    width: 30%;
  }
`

const Select = styled.select`
  margin: 0 auto;
  width: 80%;
  max-width: 300px;
  font-family: 'Cormorant Garamond', Arial, Helvetica sans-serif;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(
    to left,
    ${styles.colour.darkBlue},
    ${styles.colour.darkPurple}
  );
  font-size: 1.4rem;
  margin-bottom: ${styles.spacer.medium};

  @media (min-width: ${styles.breakpoint.small}) {
    width: 60%;
  }

  @media (min-width: ${styles.breakpoint.medium}) {
    width: 30%;
  }
`

const Textarea = styled.textarea`
  width: 75%;
  max-width: 300px;
  font-family: 'Cormorant Garamond', Arial, Helvetica sans-serif;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(
    to left,
    ${styles.colour.darkBlue},
    ${styles.colour.darkPurple}
  );
  font-size: 1.4rem;

  @media (min-width: ${styles.breakpoint.small}) {
    width: 60%;
  }

  @media (min-width: ${styles.breakpoint.medium}) {
    width: 30%;
  }
`

const ModalOverlay = styled.div`
  display: ${props => (props.isModalOpen ? 'block' : 'none')};
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${styles.colour.darkPurple};
  width: 100vw;
  height: 100%;
  min-height: 100vh;
`

const ModalContainer = styled.div`
  display: ${props => (props.isModalOpen ? 'block' : 'none')};
  z-index: 3;
  height: calc(${styles.spacer.medium} * 10);
  width: 300px;
  background-color: ${styles.colour.blue};
  position: fixed;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  padding: ${styles.spacer.medium};
  border: ${styles.spacer.fine} solid ${styles.colour.darkBlue};
  border-radius: ${styles.spacer.small};
`

const ModalTitle = styled.h2`
  font-size: 1.8rem;
  color: ${styles.colour.black};
  margin: ${styles.spacer.small} auto;
  text-align: center;
`

const ModalContent = styled.p`
  font-size: 1.4rem;
  color: ${styles.colour.black};
  margin: ${styles.spacer.small} auto;
  text-align: center;

  &:last-of-type {
    margin-bottom: ${styles.spacer.medium};
  }
`
