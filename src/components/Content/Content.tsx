import * as React from 'react'

import * as Styled from './Content.style'

import BorgMetrics from '../BorgMetrics/BorgMetrics'
import BorgChart from '../BorgChart/BorgChart'

import { BorgMetricsData } from '../../types'

export interface ContentProps {
  borgMetricsData?: BorgMetricsData
}

const Content: React.FC<ContentProps> = ({ borgMetricsData }) => {
  return (
    <Styled.Content>
      <Styled.Heading>Breakdown of BORG's circulating supply</Styled.Heading>
      <Styled.MetricsWrapper>
        <BorgMetrics borgMetricsData={borgMetricsData} />
        <BorgChart />
      </Styled.MetricsWrapper>
    </Styled.Content>
  )
}

export default Content
