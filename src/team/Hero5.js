import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import img from '../dash/images/boy.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Hero5 = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const url = 'http://localhost:2023';
    const mainUrl = 'https://smart-2022.herokuapp.com';
    const res = await axios.get(`${mainUrl}/allusers`);
    setData(res.data.data);
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);
  return (
    <Container>
      <Wrapper>
        <HeadText>Hire a Programmer for any project</HeadText>
        <ProfileHold>
          {data.map((props, i) =>
            i < 2 && props.isDeveloper ? (
              <ProfileCard to="/send">
                <ImgHold>
                  <img src={props.image} alt="loading" />
                </ImgHold>
                <TextHold>
                  <SmallTextHold>
                    <BoldText>{props.name}</BoldText>
                    <LightText>{props?.stack}</LightText>
                  </SmallTextHold>
                  <Discription>{props.description}</Discription>
                  {/* <HireText>
                    <IconText>
                      <Icon />
                      <Write>HIRE ME</Write>
                    </IconText>
                  </HireText> */}
                  {/* <But>
                    <Hire to="/send">Hire Me</Hire>
                    <Cont to="/send">Contact Me</Cont>
                  </But> */}
                </TextHold>
              </ProfileCard>
            ) : null
          )}
        </ProfileHold>
      </Wrapper>
    </Container>
  );
};

export default Hero5;

const Cont = styled(Link)`
  height: 40px;
  width: 150px;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: green; */
  border: 1px solid gray;
  border-radius: 5px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  cursor: pointer;

  :active {
    background-color: green;
  }
`;

const Hire = styled(Link)`
  height: 40px;
  width: 150px;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  background-color: #1967d2;
  border-radius: 5px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
`;

const But = styled.div`
  padding: 40px 0px;
  display: flex;
  justify-content: space-between;
  width: 85%;
`;

const Write = styled.div`
  font-size: 15px;
  font-weight: 600;
  font-family: poppins;
  margin-left: 5px;
`;
const Icon = styled(AiFillStar)`
  font-size: 20px;
  margin-left: 10px;
`;
const IconText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;
const HireText = styled.div`
  width: 95%;
  height: 100px;
  display: flex;
  flex-direction: column;
`;
const Discription = styled.div`
  height: 120px;
  width: 90%;
  color: grey;
  line-height: 25px;
  font-size: 16px;
  font-family: poppins;
  font-weight: 600;
  text-align: flex-start;
  margin-left: 10px;
`;
const LightText = styled.div`
  font-size: 15px;
  font-family: poppins;
  font-weight: 600;
  color: grey;
  text-transform: Capitalize;
  margin-top: 8px;
  margin-left: 10px;
`;
const BoldText = styled.div`
  font-size: 19px;
  font-family: poppins;
  font-weight: 700;
  margin-left: 10px;
`;
const SmallTextHold = styled.div`
  width: 95%;
  height: 70px;
  margin-top: 10px;
  /* background-color: green; */
`;
const TextHold = styled.div`
  width: 100%;
  height: 310px;
  display: flex;
  /* background: red; */
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ImgHold = styled.div`
  height: 220px;
  width: 100%;
  background: white;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ProfileCard = styled(Link)`
  width: 350px;
  height: 480px;
  background: white;
  text-decoration: none;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: 25px;
  :hover {
    transform: scale(1.01);
  }
`;
const ProfileHold = styled.div`
  width: 100%;
  /* height: 600px; */
  /* background: grey; */
  display: flex;
  /* justify-content: space-around; */
  flex-wrap: wrap;
  align-items: center;
`;
const HeadText = styled.div`
  width: 100%;
  height: 90px;
  /* background: red; */
  font-size: 20px;
  font-weight: 700;
  font-family: poppins;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  /* background: aquamarine; */
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: aquamarine; */
`;
