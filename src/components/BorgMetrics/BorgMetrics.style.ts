import styled from 'styled-components'

export const BorgMetrics = styled.ul`
  list-style: none;
  max-width: 550px;
  width: 100%;
  margin: 0;
  padding: 0;
`

export const BorgMetric = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 72px;
  font-size: 24px;
  font-weight: 300;
  box-shadow: 0px 1px 0px rgba(143, 150, 161, 0.5);
`

export const QuantityWrapper = styled.div`
  height: 60px;
  color: #01c38d;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
`

export const Quantity = styled.div`
  font-weight: 600;
`

export const SubText = styled.div`
  font-size: 16px;
`
