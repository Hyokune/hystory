import Link from 'next/link';
import React from 'react';

interface Props {
  leftRoute?: {
    href: string,
    text: string,
  },
  rightRoute?: {
    href: string,
    text: string,
  },
}

const SideNavigation = ({ leftRoute, rightRoute }: Props) => (
  <div className="side-navigation">
    <div className="side-navigation-links">
      {
        leftRoute &&
          <Link href={leftRoute.href}>
            <a className="side-navigation-left">{`< ${leftRoute.text}`}</a>
          </Link>
      }
      {
        rightRoute &&
          <Link href={rightRoute.href} >
            <a className="side-navigation-right">{`${rightRoute.text} >`}</a>
          </Link>       
      }
    </div>
  </div>
);

export default SideNavigation;
