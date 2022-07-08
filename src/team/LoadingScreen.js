import React from 'react';
import styled from 'styled-components';

const LoadingScreen = () => {
  return (
    <Container>
      <Wrapper>Loading....</Wrapper>
    </Container>
  );
};

export default LoadingScreen;

const Wrapper = styled.div`
  color: white;
  font-size: 13px;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  top: 0;
`;
