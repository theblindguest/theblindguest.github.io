import * as React from 'react'

import * as Styled from './Header.style'

const Header: React.FC = () => {
  return (
    <Styled.HeaderWrapper>
      <Styled.Content>
        <Styled.Heading>BORG Token Metrics</Styled.Heading>
        <Styled.Tagline>
          Deep-dive into the statistics of BORG and the mechanics of the full
          SwissBorg Ecosystem.
        </Styled.Tagline>
        <Styled.Graph />
      </Styled.Content>
    </Styled.HeaderWrapper>
  )
}

export default Header
