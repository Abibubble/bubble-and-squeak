import Clue from '../components/clue'
import ClueText from '../components/clue-text'
import Intro from '../components/intro'
import PageSection from '../components/page-section'
import PasswordInput from '../components/password-input'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

export default function Poem() {
  return (
    <Wrapper escape>
      <PageSection>
        <Title>Bubble & Squeak</Title>
        <Intro>That was definitely too easy. Here's the next clue:</Intro>
        <Clue>
          <ClueText>
            The answer to this riddle has a hole in the middle,
            <br />
            and some have been known to fall in it.
            <br />
            In tennis it's nothing, but it can be recieved,
            <br />
            and sometimes a person may win it.
            <br />
            Though it's not seen or heard it may be percieved,
            <br />
            unlike princes you'll find it in c<em>love</em>r.
            <br />
            The answer to this riddle has a hole in the middle,
            <br />
            and without it one cannot start over.
          </ClueText>
        </Clue>
        <PasswordInput />
      </PageSection>
    </Wrapper>
  )
}
