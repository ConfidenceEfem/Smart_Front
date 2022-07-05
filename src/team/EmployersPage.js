import Reac, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import img from '../dash/images/avatar.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EmployersPage = () => {
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
    <MainContainer>
      <Header />
      <Con>
        <Hold>
          {data?.map((props) =>
            props.isClient ? (
              <Card>
                <Am>intel</Am>
                <ImageHold>
                  <Pic src={props.image} />
                  <Name>{props.name}</Name>
                  <Web>{props?.stack}</Web>
                  <Deta>{props?.bio}</Deta>
                  <But>
                    <Hire to="/send">Hire Me</Hire>
                    <Cont to="/send">Contact Me</Cont>
                  </But>
                </ImageHold>
              </Card>
            ) : null
          )}
        </Hold>
      </Con>
    </MainContainer>
  );
};

export default EmployersPage;
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
const Deta = styled.div`
  text-align: center;
  padding: 10px 0px;
  width: 85%;
  font-family: Arial, Helvetica, sans-serif;
`;

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

const Web = styled.div`
  font-size: 14px;
  color: gray;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

const Name = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 5px;
`;

const Pic = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 100%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const Con = styled.div`
  width: 100%;
  height: calc(100vh - 95px);
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  /* height: 500px; */
  width: 400px;
  /* min-height: 350px; */
  padding: 20px 10px;
  margin: 15px;
  height: 350px;
`;

const Am = styled.div`
  padding: 10px 10px;
  background-color: blue;
  color: white;
  display: flex;
  justify-content: center;
  width: 100px;
  font-size: 16px;
  font-family: poppins;
  border-radius: 20px;
`;

const ImageHold = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
`;
