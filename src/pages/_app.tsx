import React from 'react'
import { AppProps } from 'next/app'

import GlobalStyle from '../styles/globalStyle'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
