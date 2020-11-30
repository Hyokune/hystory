import Layout from 'components/Layout';
import Section from 'components/Section';
import DevLogItems from 'lib/data/devLogItems';
import DevLogItem from 'lib/interfaces/devLogItem';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

interface Props {
  devLogItem: DevLogItem,
}

const DevLogContentPage = ({ devLogItem }: Props) => {
  return (
    <Layout noPadding>
      <Section center full hero backgroundImage={devLogItem.img.src}>
        <p className="section-hero-category">{devLogItem.category}</p>
        <h1 className="section-hero-title">{devLogItem.title}</h1>
        <p className="section-hero-date">{devLogItem.date}</p>
        <p className="section-hero-blurb">{devLogItem.blurb}</p>
      </Section>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on posts
  const paths = DevLogItems.map((devLogItem) => ({
    params: { id: devLogItem.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params) {
    const devLogItem = DevLogItems.find((devLogItem) => devLogItem.id === +params.id) ?? null;
    return { props: { devLogItem } };
  }

  return {
    notFound: true
  };
};

export default DevLogContentPage;
