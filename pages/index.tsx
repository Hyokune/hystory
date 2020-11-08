import Intro from 'components/Intro';
import Layout from 'components/Layout';
import RisingParticles from 'components/RisingParticles';
import Section from 'components/Section';
import React from 'react';

const HomePage = () => (
  <Layout>
    <RisingParticles />
    <Section center full>
      <Intro />
    </Section>
  </Layout>
);

export default HomePage;
