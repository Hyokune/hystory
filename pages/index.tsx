import { NextPage, NextPageContext } from 'next'
import React from 'react'
import Layout from '../components/Layout'

interface IProps {
  message: string
}

class Home extends React.Component<NextPage & IProps> {
  static async getInitialProps(context: NextPageContext) {
    const message = "WELCOME TO HYSTORY"
    console.log('Message is being passed: ', message)

    return {
      message
    }
  }
  
  render() {
    const { message } = this.props

    return (
      <Layout>
        <p>{message}</p>
      </Layout>
    )
  }
}

export default Home