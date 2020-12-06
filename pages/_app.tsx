import RisingParticles from 'components/RisingParticles';
import { AppProps } from 'next/app';
import React from 'react';
import 'styles/index.scss';

const Application = ({ Component, pageProps }: AppProps) => (
  <RisingParticles>
    <Component {...pageProps} />
  </RisingParticles>
);

export default Application;