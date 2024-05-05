import styled from 'styled-components'

export const Content = styled.div`
  max-width: 1440px;
  padding: 60px 40px;
  margin: 0 auto;

  > div {
    display: flex;
    /* flex-direction: column; */
    max-width: 1180px;
    margin: 0 auto;
  }
`

export const Heading = styled.h2`
  margin: 0 0 40px 0;
  text-align: center;
  font-size: 42px;
`

export const MetricsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div:first-of-type {
    margin-left: 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    > div:first-of-type {
      margin-left: 20px;
    }
  }
`
