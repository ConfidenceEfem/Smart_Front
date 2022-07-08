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
    <Container style={{ width: '100%' }}>
      <Header />
      <Hero />

      <Card />
      <Hero3 />
      <Hero5 />
      <Join />
      <Foto />
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
width: 100%:
/* height: 100%auto; */
display:flex;
flex-direction:column;
`;
