import React from 'react'
import cx from 'classnames'

interface ISection {
  children: JSX.Element[] | JSX.Element
}

class Section extends React.Component<ISection> {
  render() {
    return (
      <section className={cx({
        'section': true
      })}>
        {this.props.children}
      </section>
    )
  }
}

export default Section
