import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 575px;
  padding: 0 40px;
  box-sizing: border-box;
  background: linear-gradient(270deg, #364053 0%, #191e29 100%);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  max-width: 1180px;
  width: 100%;
  padding: 60px 0;
  color: #fff;
`

export const Heading = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 40px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 80px;
  }
`

export const Tagline = styled.div`
  text-align: center;
`

export const Graph = styled.div`
  max-width: 720px;
  height: 270px;
  width: 100%;
  margin-top: 20px;
  background-color: white;
`
