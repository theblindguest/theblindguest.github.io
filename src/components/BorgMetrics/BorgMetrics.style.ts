import styled from 'styled-components'

export const BorgMetrics = styled.ul`
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    max-width: 550px;
  }
`

export const BorgMetric = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 300;
  box-shadow: 0px 1px 0px rgba(143, 150, 161, 0.5);

  @media (min-width: 768px) {
    height: 72px;
    font-size: 24px;
  }
`

export const CopyWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  padding: 12px 0;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

export const QuantityWrapper = styled.div`
  color: #01c38d;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  line-height: 30px;

  > div {
    line-height: inherit;
  }

  @media (min-width: 768px) {
    align-items: flex-end;
    height: 60px;
  }
`

export const Quantity = styled.div`
  font-weight: 600;
`

export const SubText = styled.div`
  font-size: 16px;
`
