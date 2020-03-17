import Link from 'next/link'
import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header-logo">
          <Link href="/">
            <a>
              <h1>Hystory</h1>
            </a>
          </Link>
        </div>
      </header>
    )
  }
}

export default Header
