import Link from 'next/link'
import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header-logo">
          <Link href="/">
            <a>Hystory</a>
          </Link>
        </div>
      </header>
    )
  }
}

export default Header
