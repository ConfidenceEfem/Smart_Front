import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';
import img from '../dash/images/avatar.png';
import axios from 'axios';
import ClientDetail from './ClientDetail';
import ClientDetailComp from './ClientDetail';

const Hero2 = () => {
  const [jobData, setJobData] = useState([]);

  const fetchData = async () => {
    const url = 'http://localhost:2023';
      const mainUrl = 'https://smart-2022.herokuapp.com';
          await axios
      .get(`${mainUrl}/alljobs`)
      .then((result) => {
        console.log(result);
        setJobData(result?.data?.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  useEffect(() => {
    fetchData();
    console.log('ghujiuh', jobData);
  }, []);

  return (
    <Container>
      <Wrapper>
        <HeadText>
          <Text1>Popular Job Categories</Text1>
          <Text2>2020 jobs live-293 added today.</Text2>
        </HeadText>
        {/* <JobHold>
          {jobData?.map((props) => (
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
                  {props.experience}yrs
                </Experience>
                <Deadline>
                  <span>Deadline:</span>
                  {props.deadline}Weeks
                </Deadline>
                <AmountAndEmail>
                  <Email>{props.contactemail}</Email>
                  <Amount>${props.cost}</Amount>
                </AmountAndEmail>
                <Button>Apply Now</Button>
              </CardWrapper>
            </Card>
          ))}
        </JobHold> */}
      </Wrapper>
    </Container>
  );
};

export default Hero2;

const Button = styled.div`
  width: 150px;
  font-size: 13px;
  color: white;
  margin-top: 25px;
  height: 40px;
  display: flex;
  text-transform: uppercase;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  background-color: blue;
  border-radius: 5px;
  transition: all 350ms;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
  }
`;
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
const Company = styled.div`
  font-size: 13px;
`;
const ClientName = styled.div`
  font-weight: 600;
  font-size: 14px;
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
  height: auto;
  box-shadow: 1px 1px 1px lightgray;
  border-radius: 5px;
  display: flex;
  padding-bottom: 20px;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  transition: all 350ms;
  cursor: pointer;
  position: relative;
  margin: 15px;
  top: 0;
  :hover {
    transform: scale(1.01);
  }
`;

const JobHold = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 15px 0;

  /* background: brown; */
  @media screen and (max-width: 768px) {
    height: 350px;
  }
`;
const Text2 = styled.div`
  font-size: 20px;
  font-family: poppins;
  font-weight: 500;
  @media screen and (max-width: 425px) {
    font-size: 17px;
  }
`;
const Text1 = styled.div`
  font-size: 30px;
  font-family: poppins;
  font-weight: 700;
  @media screen and (max-width: 425px) {
    font-size: 25px;
  }
`;
const HeadText = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  /* background: red; */
  @media screen and (max-width: 768px) {
    height: 70px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`;
