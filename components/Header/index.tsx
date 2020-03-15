import Link from 'next/link'
import React from 'react'
import './styles.scss'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header-logo">
          <Link href="/">
            <a>
              <h1>HYSTORY</h1>
            </a>
          </Link>
        </div>
      </header>
    )
  }
}

export default Header
