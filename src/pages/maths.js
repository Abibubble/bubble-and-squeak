import Clue from '../components/clue'
import ClueText from '../components/clue-text'
import Intro from '../components/intro'
import PageSection from '../components/page-section'
import PasswordInput from '../components/password-input'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

export default function Maths() {
  return (
    <Wrapper escape>
      <PageSection>
        <Title>Bubble & Squeak</Title>
        <Intro>Well done! Let's keep the maths going:</Intro>
        <Clue>
          <ClueText>
            There are 4 digits in the answer. Use these clues to fill in the
            number.
            <br />
            <br />
            The first number is the third number times 2
            <br />
            The second number is nothing
            <br />
            The third number is the second number plus 1
            <br />
            The fourth number is the first number times 3
          </ClueText>
        </Clue>
      </PageSection>
      <PasswordInput />
    </Wrapper>
  )
}
