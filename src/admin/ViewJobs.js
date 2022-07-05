import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import AdminHeader from './AdminHeader';
import axios from 'axios';
import ClientDetailComp from '../team/ClientDetail';
import NavComp from './NavComp';
const ViewJobs = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const mainLink = 'http://localhost:2023';
    const res = await axios.get(`${mainLink}/alljobs`);
    setData(res.data.data);
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  return (
    <Container>
      <NavComp />
      <Right>
        <AdminHeader />
        <CardHolder>
          {data.map((props, i) => (
            <Card>
              <Image src={props.image} />
              <Title>
                <span>{props.jobTitle}</span>
              </Title>
              <CardWrapper>
                <ClientDetailComp id={props.user} />
                <Desc>{props.description}</Desc>
                <Stack>
                  <span>Stack:</span>
                  {props.skillSet}
                </Stack>{' '}
                <Experience>
                  <span>Experience:</span>
                  {props.experience}
                </Experience>
                <Deadline>
                  <span>Deadline:</span>
                  {props.deadline}
                </Deadline>
                <AmountAndEmail>
                  <Email>{props.contactemail}</Email>
                  <Amount>${props.cost}</Amount>
                </AmountAndEmail>
              </CardWrapper>
            </Card>
          ))}
        </CardHolder>
      </Right>
    </Container>
  );
};

export default ViewJobs;

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
  height: 480px;
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

const Submit = styled.div`
  width: 130px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 14px;
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
  height: 100%auto;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0;
`;

const NavName = styled.div`
  font-size: 15px;
  margin: 20px 0;
  font-weight: bold;
`;

const Inputs = styled.input`
  width: 400px;
  height: 35px;
  border: solid 2px #0e0e10;
  outline: none;
  margin-bottom: 10px;
  @media screen and (max-width: 500px) {
    width: 80%;
    height: 30px;
    margin-bottom: 20px;
    ::placeholder {
      font-size: 14px;
    }
  }
`;
const Upload = styled.label`
  width: 250px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #0e0e10;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  letter-spacing: 0.3px;
  transition: all 350ms;
  transform: scale(1);
  margin-bottom: 30px;
  :hover {
    transform: scale(1.02);
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    width: 200px;
    height: 45px;
    font-size: 13px;
  }
`;
const EventImage = styled.img`
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
