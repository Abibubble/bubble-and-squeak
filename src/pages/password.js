import Clue from '../components/clue'
import ClueText from '../components/clue-text'
import Intro from '../components/intro'
import PageSection from '../components/page-section'
import PasswordInput from '../components/password-input'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

export default function Password() {
  return (
    <Wrapper escape>
      <PageSection>
        <Title>Bubble & Squeak</Title>
        <Intro>Let's start easy:</Intro>
        <Clue>
          <ClueText>
            Try to guess our <em>password</em>
          </ClueText>
        </Clue>
        <PasswordInput />
      </PageSection>
    </Wrapper>
  )
}
