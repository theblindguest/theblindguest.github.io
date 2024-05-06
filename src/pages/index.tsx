import React, { useEffect, useState, ReactElement, FC } from 'react'
import type { HeadFC, PageProps } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Header from '../components/Header/Header'
import Content from '../components/Content/Content'

import { BorgMetricsData } from '../types'

const HomePage: FC<PageProps> = (): ReactElement => {
  const [borgMetricsData, setBorgMetricsData] = useState<BorgMetricsData>()

  useEffect(() => {
    const fetchData = async () => {
      const fetchBorgMetricsData = await fetch(
        'https://borg-api-techchallenge.swissborg-stage.com/api/borg-stats'
      )
      const borgMetricsData = await fetchBorgMetricsData.json()

      setBorgMetricsData(borgMetricsData)
    }

    fetchData()
  }, [])

  return (
    <Layout>
      <>
        <Header />
        <Content borgMetricsData={borgMetricsData} />
      </>
    </Layout>
  )
}

export default HomePage

export const Head: HeadFC = () => (
  <>
    <title>The SwissBorg Token (BORG)</title>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@swissborg" />
    <meta name="twitter:title" content="The SwissBorg Token (BORG)" />
    <meta
      name="twitter:description"
      content="The BORG token offers unique benefits to token holders with premium tiers, early access to investment opportunities, cash back on fees and more."
    />
    <meta
      property="og:image"
      content="https://images.prismic.io/swissborg-website/dad11fe5-dbbc-4d5b-a4ed-01a3837d8376_Opengraph-buy+CHSB-EN.png?auto=compress%2Cformat&amp;fit=max&amp;q=80"
    ></meta>
    <meta
      property="og:description"
      content="The BORG token offers unique benefits to token holders with premium tiers, early access to investment opportunities, cash back on fees and more."
    ></meta>
    <meta property="og:title" content="The SwissBorg Token (BORG)"></meta>
  </>
)
