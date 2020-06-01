import { NextPage } from 'next'
import React from 'react'
import HistoryList from '../../components/HistoryList'
import Layout from '../../components/Layout'
import Section from '../../components/Section'

class Home extends React.Component<NextPage> {
  render() {
    return (
      <Layout>
        <Section fullHeight>
          <div id="top" className="section-banner">
            <div className="center fade-in-left">
              <img src="/images/dn-warrior.png" alt="Dragon Nest Warrior" />
            </div>
            <div className="fade-in-right">
              <h1>Game hystory</h1>
              <p>Timeline and review of the adventures till now</p>
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
