import React from 'react';
import styled from 'styled-components';
import Foto from './Foto';
import Header from './Header';
import Hero from './Hero';
import Hero2 from './Hero2';
import Hero3 from './Hero3';
import Hero5 from './Hero5';
import Join from './Join';
import SignUp from './SignUp2';
import Card from './Card';

const LandingPage = () => {
  return (
    <div style={{ width: '100vw' }}>
      <Header />
      <Hero />

      {/* <Hero2 /> */}
      <Card />
      <Hero3 />
      <Hero5 />
      <Join />
      <Foto />
    </div>
  );
};

export default LandingPage;
