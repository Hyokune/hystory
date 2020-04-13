import React from 'react'

interface ISection {
  children: JSX.Element[] | JSX.Element
}

class Section extends React.Component<ISection> {
  render() {
    return (
      <section className="section">
        {this.props.children}
      </section>
    )
  }
}

export default Section
