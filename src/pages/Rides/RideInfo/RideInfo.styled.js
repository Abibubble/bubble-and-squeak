import styled from 'styled-components'

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 16px;
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
  gap: 16px;
  margin-top: 16px;
`

export const PageWrapper = styled.article`
  margin: 0 auto;
  padding: 24px;
`
