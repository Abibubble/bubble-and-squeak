import styled from 'styled-components'

export const Location = styled.p`
  font-style: italic;
  text-align: center;
  margin: 8px 0;
`

export const ImageContainer = styled.div`
  margin: 0 auto;
  width: fit-content;
`

export const Image = styled.img`
  max-width: 400px;
  height: auto;
`

export const Description = styled.p`
  margin: 16px 96px;
  font-style: italic;
`

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 24px;
  margin: 0 96px;
`
