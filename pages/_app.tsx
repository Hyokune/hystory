import App, { AppProps } from 'next/app';
import React from 'react';
import 'styles/index.scss';

class Application extends App<AppProps> {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Component {...pageProps} />
    );
  }
}

export default Application;