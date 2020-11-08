import { AppProps } from 'next/app';
import React from 'react';
import 'styles/index.scss';

const Application = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default Application;