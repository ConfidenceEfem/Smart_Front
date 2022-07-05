import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Join = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Join1>Join the world's developer Marketplace.</Join1>
          <We>We've got you covered for all your project need</We>
          <But>
            <Get to="/">Get Started</Get>
          </But>
        </Wrapper>
      </Container>
    </>
  );
};

export default Join;
const Join1 = styled.div`
  font-family: poppins;
  font-size: 30px;
  /* color: blue; */
  margin-bottom: 5px;

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
  @media screen and (max-width: 556px) {
    font-size: 20px;
    text-align: center;
  }
  @media screen and (max-width: 380px) {
    font-size: 17px;
    text-align: center;
  }
`;
const We = styled.div`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 50px;
  @media screen and (max-width: 556px) {
    font-size: 10px;
    text-align: center;
  }
  @media screen and (max-width: 380px) {
    font-size: 9px;
    /* text-align: center; */
  }
`;
const But = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Get = styled(Link)`
  cursor: pointer;
  height: 50px;
  text-decoration: none;
  width: 150px;
  color: white;
  background-color: blue;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }

  @media screen and (max-width: 380px) {
    font-size: 11px;
    height: 45px;
    width: 140px;
  }
`;
const Container = styled.div`
  width: 100%;
  /* height: 800px; */
  /* background-color: lightgray; */
  display: flex;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: lightgray;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  flex-direction: column;
  /* padding-top: 30px; */
  /* padding-bottom: 25px; */
`;
