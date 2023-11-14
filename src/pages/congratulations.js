import Button from '../components/button'
import Clue from '../components/clue'
import ClueText from '../components/clue-text'
import Intro from '../components/intro'
import PageSection from '../components/page-section'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

export default function Congratulations() {
  return (
    <Wrapper escape>
      <PageSection>
        <Title>Bubble & Squeak</Title>
        <Intro>Congratulations! You've found the secret phrase!</Intro>
        <Clue>
          <ClueText>bubble&squeak</ClueText>
        </Clue>
        <Intro>
          You can enter this secret phrase on the first page to skip the puzzles
          if you want to return to the main site.
        </Intro>
        <Intro>
          Alternatively, you can save the next page to get directly to the main
          site.
        </Intro>
        <Button href='/welcome'>Main site</Button>
      </PageSection>
    </Wrapper>
  )
}
