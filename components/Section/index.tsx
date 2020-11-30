import cx from 'classnames';
import React, { Fragment } from 'react';

interface Props {
  children: JSX.Element[] | JSX.Element,
  backgroundImage?: string,
  center?: boolean,
  full?: boolean,
  hero?: boolean,
}

const Section = ({ children, backgroundImage, center, full, hero }: Props) => (
  <section className={cx({
    'section': true,
    'center': center,
    'full': full,
    'hero': hero
  })}>
    {
      backgroundImage &&
        <Fragment>
          <style jsx>
            {`
              .section-hero {
                background-image: url(${backgroundImage});
                
              }
            `}
          </style>
          <div className="section-hero" />
        </Fragment>
    }
    {children}
  </section>
);

export default Section;
