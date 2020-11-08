import Head from 'next/head';
import React, { Fragment } from 'react';
import Header from '../Header';

interface Props {
  children: JSX.Element[] | JSX.Element,
}

const Layout = ({ children }: Props) => (
  <Fragment>
    <Head>
      <title>Hystory</title>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V" crossOrigin="anonymous" />
    </Head>
    <Header />
    <main>
      {children}
    </main>
  </Fragment>
);

export default Layout;
