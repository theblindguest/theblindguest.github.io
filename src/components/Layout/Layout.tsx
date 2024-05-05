import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    font-family: "Roboto", sans-serif;
  }
`
const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  )
}

export default Layout
