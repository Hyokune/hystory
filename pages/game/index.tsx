import { NextPage } from 'next'
import React from 'react'
import Banner from '../../components/Banner'
import HistoryList from '../../components/HistoryList'
import Layout from '../../components/Layout'
import Section from '../../components/Section'

class GamePage extends React.Component<NextPage> {
  render() {
    return (
      <Layout>
        <Section>
          <Banner
            description="Timeline and review of the adventures till now"
            image={{ src: '/images/dn-warrior.png', alt: 'Dragon Nest Warrior' }}
            title="Game hystory"
          />
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

export default GamePage
