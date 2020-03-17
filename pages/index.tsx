import { NextPage, NextPageContext } from 'next'
import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'

interface IProps {
  
}

class Home extends React.Component<NextPage & IProps> {
  // Default getInitialProps
  static async getInitialProps(context: NextPageContext) {

    return {

    }
  }
  
  render() {
    return (
      <Layout>
        <Section>
          <div id="home" className="section-banner">
            <img src="/images/dn-warrior.png" />
            <div>
              <h1>Welcome to the hystory</h1>
              <p>Here is the timeline of my adventures</p>
            </div>
          </div>
        </Section>
      </Layout>
    )
  }
}

export default Home
