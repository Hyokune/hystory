import Head from 'next/head'
import React from 'react'
import Header from '../Header'

interface ILayout {
  children: JSX.Element[] | JSX.Element
}

class Layout extends React.Component<ILayout> {
  render() {
    return (
      <React.Fragment>
         <Head>
          <title>Hystory</title>
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
        </Head>
        <Header />
        <main>
          {this.props.children}
        </main>
      </React.Fragment>
    )
  }
}

export default Layout
