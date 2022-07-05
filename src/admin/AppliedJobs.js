import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ClientDetailComp from '../team/ClientDetail';
import AdminHeader from './AdminHeader';

import NavComp from './NavComp';
const AppliedJobs = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const mainLink = 'http://localhost:2023';
    const res = await axios.get(`${mainLink}/allapplied`);
    setData(res.data.data);
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);
  return (
    <MainContainer>
      <NavComp />
      <Container>
        <Right>
          <AdminHeader />
          <CardHolder>
            {data.map((props, i) => (
              <Card key={props._id}>
                <Image src={props.cvImage} />
                <Title>
                  <span>{props.name}</span>
                </Title>
                <CardWrapper>
                  <ClientDetailComp id={props.user} />
                  <Desc>{props.applicationLetter}</Desc>
                  <Stack>
                    <span>Email:</span>
                    {props.email}
                  </Stack>{' '}
                  {/* <AmountAndEmail>
                    <Email>{props.contactemail}</Email>
                    <Amount>${props.cost}</Amount>
                  </AmountAndEmail> */}
                </CardWrapper>
              </Card>
            ))}
          </CardHolder>
        </Right>
      </Container>
    </MainContainer>
  );
};

export default AppliedJobs;

const Title = styled.div`
  opacity: 1;
  font-size: 14px;
  font-weight: 550;
  text-transform: uppercase;

  position: absolute;
  top: 0;
  color: white;
  transition: all 350ms;

  span {
    opacity: 0;
    width: 300px;
    height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
  }
  :hover {
    span {
      opacity: 1;
    }
  }
`;
const Amount = styled.div`
  font-weight: 600;
  color: blue;
`;
const Email = styled.div`
  font-weight: 450;
  font-size: 10px;
`;
const AmountAndEmail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Experience = styled.div`
  width: 100%;
  font-size: 13px;
  margin: 3px 0;
  span {
    font-weight: 500;
    font-size: 11px;
    color: black;
    margin-right: 5px;
  }
`;
const Deadline = styled.div`
  width: 100%;
  font-size: 13px;
  margin-bottom: 20px;
  span {
    font-weight: 500;
    font-size: 11px;
    color: black;
    margin-right: 5px;
  }
`;
const Stack = styled.div`
  width: 100%;
  display: flex;
  font-weight: 500;
  justify-content: flex-start;
  align-items: center;

  color: blue;

  span {
    font-weight: 500;
    font-size: 11px;
    color: black;
    margin-right: 5px;
  }
`;
const Desc = styled.div`
  width: 100%;
  font-size: 13px;
  text-align: left;
  margin-bottom: 10px;
  line-height: 25px;
`;
const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
`;
const Card = styled.div`
  width: 300px;
  height: 380px;
  box-shadow: 1px 1px 1px lightgray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 15px;
  align-items: center;
  overflow: hidden;
  transition: all 350ms;
  cursor: pointer;
  position: relative;
  background: white;
  top: 0;
  :hover {
    transform: scale(1.01);
  }
`;

const CardHolder = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Submit = styled.div`
  width: 130px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
  font-size: 14px;
  background-color: #0e0e10;
  transform: scale(1);
  transition: all 350ms;
  cursor: pointer;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 4px;
  :hover {
    background-color: lightgray;
    transform: scale(0.9);
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0;
`;

const NavName = styled.div`
  font-size: 15px;
  margin: 20px 0;
  font-weight: bold;
  @media screen and (max-width: 500px) {
    margin-top: 40px;
  }
`;

const EventImage = styled.video`
  width: 250px;
  height: 200px;
  object-fit: cover;
  border: solid 2px #0e0e10;
  margin-bottom: 20px;
  @media screen and (max-width: 500px) {
    width: 200px;
    height: 150px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 375px) {
    margin-bottom: 20px;
  }
`;

const Right = styled.div`
  width: 75%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #eee;
  align-items: center;
  position: relative;
  @media screen and (max-width: 960px) {
    width: 100%;
    margin-bottom: 0px;
  }
`;
