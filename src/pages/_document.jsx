import React from 'react'
import Document, { Html, Main, Head, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <base href="/" />
          <meta name="robots" content="index,nofollow" />
          <meta name="author" content="LucasSites (lucassites.com.br)" />
          <meta name="copyright" content="OreGamer" />
          <meta name="designer" content="LucasSites (lucassites.com.br)" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="keywords"
            content="OreGamer Ore Gamer OreGame OreGames minecraft servidor rankup youtube video canal factions client"
          />
          <meta property="og:title" content="OreGamer" />
          <meta
            property="og:description"
            content="Desenvolvedor Front-End e UX/UI Design, sempre tentando trazer inovações para meus projetos, está esperando o que? faça logo seu orçamento!"
          />
          <meta property="og:url" content="https://lucassites.com.br/" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:image" content="/favicon.png" />
          <meta property="twitter:image" content="/favicon.png" />
          <meta property="twitter:card" content="summary" />
          <meta
            name="abstract"
            content="Desenvolvedor Front-End e UX/UI Design, sempre tentando trazer inovações para meus projetos, está esperando o que? faça logo seu orçamento!"
          />
          <meta
            name="description"
            content="Desenvolvedor Front-End e UX/UI Design, sempre tentando trazer inovações para meus projetos, está esperando o que? faça logo seu orçamento!"
          />
          <link rel="shortcut icon" href="/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
