import cx from 'classnames'
import React from 'react'

interface Props {
  center?: boolean,
  full?: boolean,
  children: JSX.Element[] | JSX.Element
}

const Section = ({ center, full, children }: Props) => (
  <section className={cx({
    'section': true,
    'center': center,
    'full': full
  })}>
    {children}
  </section>
)

export default Section
