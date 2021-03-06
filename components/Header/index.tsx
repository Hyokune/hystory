import Link from 'next/link';
import React from 'react';

const Header = () => (
  <header className="header">
    <Link href="/game">
      <a className="header-item">Game</a>
    </Link>
    <div className="header-logo">
      <Link href="/">
        <a>Hystory</a>
      </Link>
    </div>
    <Link href="/dev">
      <a className="header-item">Dev</a>
    </Link>
  </header>
);

export default Header;
