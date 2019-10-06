import styled from '@emotion/styled'

const borderRadius = '0.25rem'

export const ModeButton = styled.button`
  background: #fff9;
  border: 0;
  border-radius: ${borderRadius};
  cursor: pointer;
  margin: 0.5rem;
  padding: 1rem;
  
  @media (max-width: 400px) {
    margin: 0.25rem;
    padding: 0.5rem;
  }
`
