import cx from 'classnames';
import Layout from 'components/Layout';
import Section from 'components/Section';
import DevLogItems from 'lib/data/devLogItems';
import DevLogItem from 'lib/interfaces/devLogItem';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useCallback, useEffect, useRef, useState } from 'react';

interface Props {
  devLogItem: DevLogItem,
}

const DevLogContentPage = ({ devLogItem }: Props) => {
  const [hideScrollButton, setHideScrollButton] = useState(false);
  const sectionContentRef = useRef<HTMLDivElement>(null);

  const scrollToRef = () => {
    sectionContentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollButtonVisibility = useCallback(() => {
    if (!hideScrollButton && window.scrollY > window.innerHeight / 2) {
      setHideScrollButton(true);
    } else if (hideScrollButton && window.scrollY <= window.innerHeight / 2) {
      setHideScrollButton(false);
    }
  }, [hideScrollButton]);

  useEffect(() => {
    handleScrollButtonVisibility();
    window.addEventListener('scroll', handleScrollButtonVisibility);

    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisibility);
    };
  }, [handleScrollButtonVisibility]);

  return (
    <Layout noPadding>
      <Section center full logHeader backgroundImage={devLogItem.img.src}>
        <p className="section-hero-category">{devLogItem.category}</p>
        <h1 className="section-hero-title">{devLogItem.title}</h1>
        <p className="section-hero-date">{devLogItem.date}</p>
        <p className="section-hero-blurb">{devLogItem.blurb}</p>
        <div className={cx({
          'section-hero-scroll': true,
          'hide': hideScrollButton
        })}>
          <a onClick={() => scrollToRef()}>
            Read more
          </a>
        </div>
      </Section>
      <Section logSection ref={sectionContentRef}>
        <div className="log-section-content" dangerouslySetInnerHTML={{ __html: devLogItem.content }} />
      </Section>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on posts
  const paths = DevLogItems.map((devLogItem) => ({
    params: { id: devLogItem.id.toString() },
  }));

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
