import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 3.5rem;
  margin: 0;
  padding: 0;
  text-align: center;
  color: #333;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin-top: 16px;
`
