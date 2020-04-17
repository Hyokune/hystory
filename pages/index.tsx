import { NextPage } from 'next'
import React from 'react'
import HistoryList from '../components/HistoryList'
import Layout from '../components/Layout'
import Section from '../components/Section'

class Home extends React.Component<NextPage> {
  // Default getInitialProps
  // static async getInitialProps(context: NextPageContext) {

  //   return {

  //   }
  // }
  
  render() {
    return (
      <Layout>
        <Section>
          <div id="top" className="section-banner">
            <img className="fade-in-left" src="/images/dn-warrior.png" />
            <div className="fade-in-right">
              <h1>Welcome to the hystory</h1>
              <p>Here is the timeline of my adventures</p>
            </div>
          </div>
          <div className="timeline start">
            <p>Start timeline</p>
          </div>
        </Section>
        <Section>
          <div className="timeline" />
          <HistoryList />
        </Section>
      </Layout>
    )
  }
}

export default Home
