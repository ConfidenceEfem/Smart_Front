import React from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { GrStar } from "react-icons/gr";
import img from "../dash/images/background.jpg";
import { Link } from "react-router-dom";

const Hero3 = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <img src={img} />
        </Left>
        <Right>
          <TextHold>
            <BigText>
              Millions of Smart Tech Jobs, Find the one that suits you.
            </BigText>
            <SmallText>
              Search all the open positions on the web. Get your own
              <br />
              personalized salary estimate. Read reviews on over 600,000
              <br />
              companies worldwide.
            </SmallText>
            <TextIcon>
              <Icon />
              <Write>Bring to the table win-win survival</Write>
            </TextIcon>
            <TextIcon>
              <Icon />
              <Write>Capitalize on low hanging products to identify</Write>
            </TextIcon>
            <TextIcon>
              <Icon />
              <Write>But I must explain to you how all this Work</Write>
            </TextIcon>
            <ButHold>
              <Btn to="/signup">Get Started</Btn>
            </ButHold>
          </TextHold>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Hero3;
const ButHold = styled.div`
  @media screen and (max-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  @media screen and (max-width: 425px) {
    height: auto;
  }
`;

const Left = styled.div`
  height: 650px;
  width: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: red; */
  img {
    object-fit: center;
    width: 100%;
    height: 95%;
    border-radius: 9px;
  }
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 600px) {
    height: 420px;
   
  }
  @media screen and (max-width: 430px) {
    // height: 420px;
    width: 95%;
  }
  @media screen and (max-width: 350px) {
    height: 300px;
  }
`;
const Btn = styled(Link)`
  width: 190px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: blue;
  text-decoration: none;
  border: 0;
  outline: none;
  border-radius: 4px;
  font-size: 16px;
  font-family: poppins;

  @media screen and (max-width: 430px) {
    height: 50px;
    width: 150px;
  }
`;
const Write = styled.div`
  font-size: 18.5px;
  font-family: poppins;
  color: gray;
  @media screen and (max-width: 768px) {
    font-size: 17px;
  }
  @media screen and (max-width: 320px) {
    font-size: 15px;
  }
`;
const Icon = styled(GrStar)`
  margin-right: 10px;
  font-size: 20px;
  color: gray;
  @media screen and (max-width: 768px) {
    font-size: 17px;
  }
`;
const TextIcon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 19px;
`;

const SmallText = styled.div`
  font-size: 18.5px;
  font-family: poppins;
  color: gray;
  margin-bottom: 20px;
  /* @media screen and (max-width: 768px) {
    font-size: 17px;
  } */
  @media screen and (max-width: 430px) {
    font-size: 16px;
    /* width: 80%; */
    /* text-align: center; */
  }
`;
const BigText = styled.div`
  font-size: 45px;
  font-family: poppins;
  font-weight: 600;
  margin-bottom: 20px;
  @media screen and (max-width: 1024px) {
    font-size: 36px;
    text-align: center;
  }
  @media screen and (max-width: 425px) {
    font-size: 25px;
  }
  @media screen and (max-width: 380px) {
    font-size: 25px;
  }
  @media screen and (max-width: 320px) {
    font-size: 21px;
  }
`;
const TextHold = styled.div`
  width: 620px;
  height: auto;
  /* background: blue; */
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 12px;
  @media screen and (max-width: 768px) {
    height: 430px;
  }
`;
const Right = styled.div`
  height: auto;
  width: 700px;
  /* background: red; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 425px) {
    height: auto;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  // height: auto;
  display: flex;
  /* background: lightsalmon; */
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
  @media screen and (max-width: 375px) {
    height: auto;
  }
`;
const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: brown; 
  @media screen and (max-width: 768px) {
    height: auto;
  }
  @media screen and (max-width: 375px) {
    height: auto;
  }
`;
