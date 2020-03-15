import getConfig from 'next/config'
import Head from 'next/head'
import React from 'react'
import '../../styles/main.scss'
import Header from '../Header'

//const { publicRuntimeConfig = {} } = getConfig() || {}

class Layout extends React.Component {
  render () {
    const { children } = this.props

    return (
      <React.Fragment>
         <Head>
          <title>Hystory</title>

          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
        </Head>
        <Header />
        <main>
          <section id="container">
            {children}
          </section>
        </main>
      </React.Fragment>
    )
  }
}

export default Layout
