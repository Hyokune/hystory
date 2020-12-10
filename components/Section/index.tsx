import cx from 'classnames';
import React, { forwardRef } from 'react';

interface Props {
  children: JSX.Element[] | JSX.Element,
  backgroundImage?: string,
  center?: boolean,
  full?: boolean,
  logHeader?: boolean,
  logSection?: boolean,
}

const Section = forwardRef<HTMLDivElement, Props>(({ children, backgroundImage, center, full, logHeader, logSection }, ref) => (
  <section
    ref={ref}
    className={cx({
      'log-header': logHeader,
      'log-section': logSection,
      'center': center,
      'full': full,
    })}>
    {
      backgroundImage &&
        <>
          <style jsx>
            {`
              .section-hero {
                background-image: url(${backgroundImage});
                
              }
            `}
          </style>
          <div className="section-hero" />
        </>
    }
    {children}
  </section>
));

export default Section;
