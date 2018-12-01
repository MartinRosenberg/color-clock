import styled from 'styled-components'

const borderRadius = '0.25rem'

export const ModeButton = styled.button`
  -webkit-border-radius: ${borderRadius};
     -moz-border-radius: ${borderRadius};
          border-radius: ${borderRadius};
  background: #fff9;
  border: 0;
  cursor: pointer;
  margin: 0.5rem;
  padding: 1rem;
  
  @media (max-width: 400px) {
    margin: 0.25rem;
    padding: 0.5rem;
  }
`
