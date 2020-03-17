import React from 'react'

interface ISection {
  children: JSX.Element[] | JSX.Element
}

class Section extends React.Component<ISection> {
  render() {
    return (
      <section className="header">
        {this.props.children}
      </section>
    )
  }
}

export default Section
