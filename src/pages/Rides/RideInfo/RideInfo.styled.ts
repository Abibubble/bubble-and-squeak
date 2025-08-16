import styled from 'styled-components'
import { fonts, spacing } from '../../../theme'

export const Subtitle = styled.h3`
  font-size: ${fonts.large};
  text-align: center;
  margin-bottom: ${spacing.small};
`

export const Image = styled.img`
  max-width: 768px;
  height: auto;
  display: flex;
  justify-self: center;
`

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${spacing.small};
  margin-top: ${spacing.small};
`

export const PageWrapper = styled.article`
  margin: 0 auto;
  padding: ${spacing.medium};
`
