import styled from 'styled-components'

export const Demo = styled.div`
  box-sizing: border-box;
  display: grid;
  justify-content: center;
  background-color: black;
  padding: 2rem;
  width: 100%;
  min-height: 100vh;
`

export const Heading1 = styled.h2`
  font-size: 2rem;
  color: #3F62B5;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 1px 1px #D1F5FF;
  margin: 1rem 0 0 0;
`

export const Heading2 = styled.h2`
  font-size: 1.5rem;
  color: #D1F5FF;
  text-transform: uppercase;
  margin: 3rem 0 2rem 0;
`

export const ColumnGrouped = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`

export const RowGrouped = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`