import styled from 'styled-components'

export const Card = styled.article`
  background-color: lightgray;
  border: 1px solid black;
  border-radius: 16px;
  text-align: center;
  width: 300px;
`

export const Image = styled.img`
  height: auto;
  max-width: 300px;
  border-radius: 16px 16px 0 0;
`

export const CardContent = styled.div`
  padding: 16px;
`

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 8px;
`
