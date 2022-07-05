import Reac, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import img from '../dash/images/avatar.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ClientDetailComp from './ClientDetail';

const FindJobs = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const url = 'http://localhost:2023';
    const mainUrl = 'https://smart-2022.herokuapp.com';
    const res = await axios.get(`${mainUrl}/alljobs`);
    setData(res.data.data);
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  return (
    <MainContainer>
      <Header />
      <Con>
        <Hold>
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
        </Hold>
      </Con>
    </MainContainer>
  );
};

export default FindJobs;

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
const ClientNameAndCompany = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const ClientImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const ClientDetail = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 15px 0;
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
  top: 0;
  :hover {
    transform: scale(1.01);
  }
`;

const MainContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const Hold = styled.div`
  width: 90%;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`;

const Con = styled.div`
  width: 100%;
  height: calc(100vh - 95px);
  display: flex;
  justify-content: center;
  font-family: poppins;
`;
