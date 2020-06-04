import { NextPage } from 'next'
import React from 'react'
import Banner from '../components/Banner'
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
          <Banner
            description="A dungeon where I leave my logs for others to explore"
            image={{ src: '/images/lance.png', alt: 'Lance' }}
            reverse={true}
            title="Dev blog"
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

export default Home
