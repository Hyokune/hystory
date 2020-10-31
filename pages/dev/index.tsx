import Banner from 'components/Banner'
import Layout from 'components/Layout'
import Section from 'components/Section'
import { NextPage } from 'next'
import React from 'react'

class DevPage extends React.Component<NextPage> {
  render() {
    return (
      <Layout>
        <Section>
          <Banner
            description="A dungeon where I leave my logs for others to explore"
            image={{ src: '/images/lance.png', alt: 'Lance' }}
            reverse
            title="Dev blog"
          />
          <div className="timeline start">
            <p>THIS SECTION IS UNDER DEVELOPMENT :(</p>
          </div>
        </Section>
      </Layout>
    )
  }
}

export default DevPage
