import Intro from 'components/Intro';
import Layout from 'components/Layout';
import Section from 'components/Section';
import SideNavigation from 'components/SideNavigation';
import React from 'react';

const HomePage = () => (
  <Layout noPadding>
    <Section center full>
      <SideNavigation
        leftRoute={{ href: '/game', text: 'Game' }}
        rightRoute={{ href: '/dev', text: 'Dev' }}
      />
      <Intro />
    </Section>
  </Layout>
);

export default HomePage;
