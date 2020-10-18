import { NextPage } from 'next'
import React from 'react'
import Banner from '../components/Banner'
import HistoryList from '../components/HistoryList'
import Layout from '../components/Layout'
import RisingParticles from '../components/RisingParticles'
import Section from '../components/Section'

class HomePage extends React.Component<NextPage> {
  render() {
    return (
      <Layout>
        <RisingParticles />
        <Section>
          <Banner
            description="Timeline and review of the adventures till now"
            image={{ src: '/images/lance-sword.png', alt: 'Lance With Sword' }}
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

export default HomePage
