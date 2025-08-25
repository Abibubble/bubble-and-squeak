import { Link, MainContent, Title } from '../../components'
import * as Styled from './Accessibility.styled'

function Accessibility() {
  return (
    <MainContent>
      <Styled.PageContent>
        <Title>Accessibility Statement</Title>

        <Styled.Paragraph>
          We are committed to ensuring digital accessibility for people with
          disabilities. We are continually improving the user experience for
          everyone and applying the relevant accessibility standards.
        </Styled.Paragraph>

        <Styled.Section>
          <Styled.SectionTitle>Our Commitment</Styled.SectionTitle>
          <Styled.Paragraph>
            Bubble & Squeak strives to ensure that our website is accessible to
            all users, including those with disabilities. We aim to provide an
            inclusive experience that allows everyone to access and enjoy our
            content about theme parks, roller roasters, and escape rooms.
          </Styled.Paragraph>
        </Styled.Section>

        <Styled.Section>
          <Styled.SectionTitle>Accessibility Standards</Styled.SectionTitle>
          <Styled.Paragraph>
            We aim to conform to the Web Content Accessibility Guidelines (WCAG)
            2.1 Level AA standards. These guidelines explain how to make web
            content more accessible for people with disabilities and
            user-friendly for everyone.
          </Styled.Paragraph>
        </Styled.Section>

        <Styled.Section>
          <Styled.SectionTitle>Accessibility Features</Styled.SectionTitle>

          <Styled.SubsectionTitle>Keyboard Navigation</Styled.SubsectionTitle>
          <Styled.Paragraph>
            Our website can be navigated using only a keyboard. You can use the
            following keys:
          </Styled.Paragraph>
          <Styled.List>
            <li>
              <Styled.KeyboardShortcut>Tab</Styled.KeyboardShortcut>- Move
              forward through interactive elements
            </li>
            <li>
              <Styled.KeyboardShortcut>Shift + Tab</Styled.KeyboardShortcut>-
              Move backward through interactive elements
            </li>
            <li>
              <Styled.KeyboardShortcut>Enter</Styled.KeyboardShortcut>- Activate
              links and buttons
            </li>
            <li>
              <Styled.KeyboardShortcut>Space</Styled.KeyboardShortcut>- Activate
              buttons and checkboxes
            </li>
            <li>
              <Styled.KeyboardShortcut>Arrow Keys</Styled.KeyboardShortcut>-
              Navigate within dropdown menus and selectors
            </li>
          </Styled.List>

          <Styled.SubsectionTitle>Visual Design</Styled.SubsectionTitle>
          <Styled.List>
            <li>High contrast colors for better readability</li>
            <li>Clear focus indicators for keyboard navigation</li>
            <li>Readable font sizes and line spacing</li>
            <li>Consistent layout and navigation structure</li>
          </Styled.List>

          <Styled.SubsectionTitle>Screen Reader Support</Styled.SubsectionTitle>
          <Styled.List>
            <li>Semantic HTML structure with proper headings</li>
            <li>Alternative text for images</li>
            <li>Descriptive link text</li>
            <li>Form labels and instructions</li>
            <li>Skip links for main content navigation</li>
          </Styled.List>

          <Styled.SubsectionTitle>Interactive Elements</Styled.SubsectionTitle>
          <Styled.List>
            <li>Clear hover and focus states for all interactive elements</li>
            <li>Consistent button and link styling</li>
            <li>Form validation with clear error messages</li>
            <li>Dropdown selectors that work with assistive technologies</li>
          </Styled.List>
        </Styled.Section>

        <Styled.Section>
          <Styled.SectionTitle>Known Limitations</Styled.SectionTitle>
          <Styled.Paragraph>
            While we strive for full accessibility, we acknowledge that some
            areas may still need improvement:
          </Styled.Paragraph>
          <Styled.List>
            <li>
              Some older content may not fully meet current accessibility
              standards
            </li>
            <li>
              Third-party embedded content may have its own accessibility
              limitations
            </li>
            <li>
              We are continuously working to identify and address any
              accessibility barriers
            </li>
          </Styled.List>
        </Styled.Section>

        <Styled.Section>
          <Styled.SectionTitle>Assistive Technologies</Styled.SectionTitle>
          <Styled.Paragraph>
            Our website is designed to be compatible with assistive
            technologies, including:
          </Styled.Paragraph>
          <Styled.List>
            <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
            <li>Voice recognition software</li>
            <li>Keyboard-only navigation</li>
            <li>Screen magnification software</li>
            <li>Switch navigation devices</li>
          </Styled.List>
        </Styled.Section>

        <Styled.Section>
          <Styled.SectionTitle>Browser Compatibility</Styled.SectionTitle>
          <Styled.Paragraph>
            Our website is tested and optimized for accessibility across modern
            browsers including:
          </Styled.Paragraph>
          <Styled.List>
            <li>Chrome (latest version)</li>
            <li>Firefox (latest version)</li>
            <li>Safari (latest version)</li>
            <li>Edge (latest version)</li>
          </Styled.List>
        </Styled.Section>

        <Styled.Section>
          <Styled.SectionTitle>Ongoing Efforts</Styled.SectionTitle>
          <Styled.Paragraph>
            We are committed to continuously improving accessibility:
          </Styled.Paragraph>
          <Styled.List>
            <li>Regular accessibility audits and testing</li>
            <li>
              Staying up-to-date with accessibility guidelines and standards
            </li>
            <li>
              Incorporating accessibility considerations into our development
              process
            </li>
          </Styled.List>
        </Styled.Section>

        <Styled.Section>
          <Styled.SectionTitle>Accessibility Resources</Styled.SectionTitle>
          <Styled.Paragraph>
            For more information about web accessibility, visit:
          </Styled.Paragraph>
          <Styled.List>
            <li>
              <Link dark href='https://www.w3.org/WAI/'>
                Web Accessibility Initiative (WAI)
              </Link>
            </li>
            <li>
              <Link dark href='https://www.w3.org/WAI/WCAG21/quickref/'>
                WCAG 2.1 Quick Reference
              </Link>
            </li>
            <li>
              <Link dark href='https://webaim.org/'>
                WebAIM - Web Accessibility In Mind
              </Link>
            </li>
          </Styled.List>
        </Styled.Section>

        <Styled.Paragraph>
          <em>Last updated: August 23, 2025</em>
        </Styled.Paragraph>
      </Styled.PageContent>
    </MainContent>
  )
}

export default Accessibility
