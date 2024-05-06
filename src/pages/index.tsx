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
    <title>Home Page</title>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@swissborg" />
    <meta name="twitter:title" content="SwissBorg BORG token" />
    <meta
      name="twitter:description"
      content="Making crypto asset management accessible. Discover our app & community: #WeAreSwissBorg"
    />
    <meta
      name="twitter:image"
      content="https://twitter.com/swissborg/header_photo"
    ></meta>
  </>
)
