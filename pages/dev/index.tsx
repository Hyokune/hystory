import { NextPage } from 'next'
import React from 'react'
import Layout from '../../components/Layout'
import Section from '../../components/Section'

class Home extends React.Component<NextPage> {
  render() {
    return (
      <Layout>
        <Section fullHeight>
          <div id="top" className="section-banner">
            <div className="fade-in-left">
              <h1>Dev blog</h1>
              <p>A dungeon where I leave my logs for others to explore</p>
            </div>
            <div className="center fade-in-right">
              <img src="/images/lance.png" alt="Lance" />
            </div>
          </div>
          <div className="timeline start">
            <p>Start timeline</p>
          </div>
        </Section>
      </Layout>
    )
  }
}

export default Home
