import React from 'react'
import cx from 'classnames'

interface ISection {
  children: JSX.Element[] | JSX.Element,
  fullHeight?: boolean
}

class Section extends React.Component<ISection> {
  render() {
    const { fullHeight } = this.props

    return (
      <section className={cx({
        "section": true,
        "full-height": fullHeight
      })}>
        {this.props.children}
      </section>
    )
  }
}

export default Section
