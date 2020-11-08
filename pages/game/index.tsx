import Banner from 'components/Banner';
import HistoryList from 'components/HistoryList';
import Layout from 'components/Layout';
import RisingParticles from 'components/RisingParticles';
import Section from 'components/Section';
import HistoryListItems from 'lib/data/historyListItems';
import React from 'react';

const GamePage = () => (
  <Layout>
    <RisingParticles />
    <Section>
      <Banner
        description="Timeline and review of the adventures till now"
        image={{ src: '/images/lance-sword.png', alt: 'Lance with sword drawing by Arucelli' }}
        title="Game hystory"
      />
      <div className="timeline start">
        <p>Start timeline</p>
      </div>
    </Section>
    <Section>
      <div className="timeline" />
      <HistoryList items={HistoryListItems} />
    </Section>
  </Layout>
);

export default GamePage;
