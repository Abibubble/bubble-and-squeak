import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`

export const Link = styled.a`
  width: 100%;

  & ${Grid}:hover {
    // TODO: Fix the focus styling on this
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }
`

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`

export const Title = styled.h2`
  font-size: 48px;
`

export const Location = styled.h3`
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 24px;
`

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding-bottom: 8px;
`
