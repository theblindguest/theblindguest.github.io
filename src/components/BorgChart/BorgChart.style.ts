import styled from 'styled-components'

export const BorgChart = styled.div`
  min-height: 300px;
  width: 100%;
  background-color: #364053;
  margin-top: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 0;
    max-width: 550px;
  }
`
