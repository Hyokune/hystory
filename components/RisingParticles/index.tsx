import React from 'react';
import Particle from '../Particle';

interface Props {
  children: React.ReactElement | React.ReactElement[],
}

const RisingParticles = ({ children }: Props) => {
  const particles = [];

  for (let index = 0; index < 100; index++) {
    particles.push(index);
  }

  return (
    <>
      {children}
      <div className="rising-particles-wrapper">
        <div className="rising-particles">
          { particles.map((_particle, index) => <Particle key={index} />) }
        </div>
      </div>
    </>
  );
};

export default RisingParticles;
