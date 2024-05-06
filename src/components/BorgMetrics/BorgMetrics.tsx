import * as React from 'react'

import { icons } from '../../assets'
import { ContentProps } from '../Content/Content'

import * as Styled from './BorgMetrics.style'

interface BorgMetricsProps {
  borgMetricsData: ContentProps['borgMetricsData']
}

interface EnrichedBorgMetric {
  icon: string
  title: string
  quantity: string
  subText?: string
}

type EnrichedBorgMetrics = EnrichedBorgMetric[]

const getPercentage = (decimalValue: number): string =>
  decimalValue ? (decimalValue * 100).toFixed(2) : ''

const BorgMetrics: React.FC<BorgMetricsProps> = ({ borgMetricsData }) => {
  if (!borgMetricsData) return null

  const {
    circulatingSupplyTokens,
    stakedBorgTokens,
    stakedBorgPercentage,
    borgInYieldTokens,
    borgInYieldPercentage,
    borgBurnedTokens,
    borgInBubackPoolTokens
  } = borgMetricsData

  const enrichedBorgMetrics: EnrichedBorgMetrics = [
    {
      icon: icons.supply,
      title: 'Remaining circulating supply',
      quantity: circulatingSupplyTokens?.toLocaleString()
    },
    {
      icon: icons.diamond,
      title: 'BORG staked',
      quantity: stakedBorgTokens?.toLocaleString(),
      subText: `(${getPercentage(stakedBorgPercentage)}% of circulating supply)`
    },
    {
      icon: icons.diamond,
      title: 'BORG in yield',
      quantity: borgInYieldTokens?.toLocaleString(),
      subText: `(${getPercentage(
        borgInYieldPercentage
      )}% of circulating supply)`
    },
    {
      icon: icons.burned,
      title: 'Circulating supply burned',
      quantity: borgBurnedTokens?.toLocaleString()
    },
    {
      icon: icons.buyback,
      title: 'BORG in buyback pool',
      quantity: borgInBubackPoolTokens?.toLocaleString()
    }
  ]

  return (
    <Styled.BorgMetrics>
      {enrichedBorgMetrics.map((metric) => {
        const { icon: Icon, title, quantity, subText } = metric
        return (
          <Styled.BorgMetric>
            <Icon />
            <Styled.CopyWrapper>
              <div>{title}</div>
              <Styled.QuantityWrapper>
                <Styled.Quantity>{quantity}</Styled.Quantity>
                {subText && <Styled.SubText>{subText}</Styled.SubText>}
              </Styled.QuantityWrapper>
            </Styled.CopyWrapper>
          </Styled.BorgMetric>
        )
      })}
    </Styled.BorgMetrics>
  )
}

export default BorgMetrics
