import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import img from '../dash/images/avatar.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../AuthState/AuthProvider';
import ClientDetailComp from './ClientDetail';
import DevCard from './DevCard';
const Hero5 = () => {
  const [data, setData] = useState([]);

  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

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
            i < 2 && props.isDeveloper ? <DevCard props={props} /> : null
          )}
        </ProfileHold>
      </Wrapper>
    </Container>
  );
};

export default Hero5;

const ProfileHold = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
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
  height: auto;
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: aquamarine; */
`;
