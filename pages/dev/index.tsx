import Banner from 'components/Banner';
import DevLogList from 'components/DevLogList';
import Layout from 'components/Layout';
import Section from 'components/Section';
import DevLogListItems from 'lib/data/devLogItems';
import React from 'react';

const DevLogPage = () => (
  <Layout>
    <Section>
      <Banner
        description="A dungeon where I leave my logs for others to explore"
        image={{ src: '/images/lance.png', alt: 'Lance' }}
        reverse
        title="Dev Log"
      />
    </Section>
    <Section>
      <DevLogList items={DevLogListItems} />
    </Section>
  </Layout>
);

export default DevLogPage;
