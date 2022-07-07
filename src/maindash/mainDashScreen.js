import React, { useContext } from 'react';
import styled from 'styled-components';
import DashHeader from './DashHeader';
import DashNav from './DashNav';
import icon from '../dash/images/user.png';
import icon1 from '../dash/images/suitcase.png';
import icon2 from '../dash/images/hired.png';
import img from '../dash/images/avatar.png';
import moment from 'moment';
import axios from 'axios';

import ClientDetailComp from '../team/ClientDetail';
import { AuthContext } from '../AuthState/AuthProvider';
import Swal from 'sweetalert2';
import Header from '../team/Header';

const MainDashScreen = () => {
  // console.log(user);
  const { currentUser, see } = useContext(AuthContext);
  console.log(currentUser);

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:2023';
      const mainUrl = 'https://smart-2022.herokuapp.com';
      try {
        const res = await axios.get(`${url}/user/${currentUser?.data?._id}`);
        console.log(res?.data?.data);
        setData(res?.data?.data);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Unable to get Data',
          timer: 2500,
          showConfirmButton: false,
        });
      }
    };
    fetchData();
  }, []);
  return (
    <Container>
      {/* <DashHeader /> */}
      <Header />
      <NavAndPageHolder>
        <DashNav />
        <DashComp>
          <DashWrapper>
            <FirstCardHolder>
              <Card1>
                <CardWrapper>
                  <TextContents>
                    <TotalText>Complete Profile</TotalText>
                    <Amoutn>50%</Amoutn>
                    <Join>
                      <span>Joined: </span> {moment(data?.createdAt).fromNow()}
                    </Join>
                  </TextContents>

                  <IconShow src={icon} />
                </CardWrapper>
              </Card1>
              <Card1>
                <CardWrapper>
                  <TextContents>
                    <TotalText>Total Jobs Posted</TotalText>
                    <Amoutn>{data?.jobs?.length}</Amoutn>
                    <Join>
                      <span>Recent:</span>
                      20days
                    </Join>
                  </TextContents>
                  <IconShow src={icon1} />
                </CardWrapper>
              </Card1>
              <Card1>
                <CardWrapper>
                  <TextContents>
                    <TotalText>Total Hiring</TotalText>
                    <Amoutn>{data?.hiredDevelopers?.length}</Amoutn>
                    <Join>
                      <span>Recent:</span>2days ago
                    </Join>
                  </TextContents>
                  <IconShow src={icon2} />
                </CardWrapper>
              </Card1>
            </FirstCardHolder>
            <SecondCardHolder>
              <SecondTitle>Recent Posted Jobs</SecondTitle>
              {/* <Circle></Circle> */}
              <SecondCardWrapper>
                <Card>
                  <Image src={img} alt="job image" />
                  <Title>
                    <span>FrontEnd Developer</span>
                  </Title>
                  <CardWrapper1>
                    <ClientDetailComp />
                    <Desc>I am a software developer and i am a badass</Desc>
                    <Stack>
                      <span>Stack:</span>
                    </Stack>{' '}
                    <Experience>
                      <span>Experience:</span>
                      2yrs
                    </Experience>
                    <Deadline>
                      <span>Deadline:</span>
                      2Weeks
                    </Deadline>
                    <AmountAndEmail>
                      <Email>confidenceefem1@gmail.com</Email>
                      <Amount>$2000</Amount>
                    </AmountAndEmail>
                  </CardWrapper1>
                </Card>
              </SecondCardWrapper>
            </SecondCardHolder>
          </DashWrapper>
        </DashComp>
      </NavAndPageHolder>
    </Container>
  );
};

export default MainDashScreen;

const SecondTitle = styled.div``;

const SecondCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const IconShow = styled.img`
  width: 60px;
  height: 60px;
  /* border-radius: 50%; */
  font-weight: 600;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: lightgray; */
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

const SecondCardHolder = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;

  margin-top: 40px;
`;
const Join = styled.div`
  font-size: 12px;
  color: gray;
`;
const Amoutn = styled.div`
  font-weight: 700;
  margin: 10px 0;
  color: red;
  font-size: 25px;
`;
const TotalText = styled.div`
  font-size: 13px;
  color: gray;
  color: #3ddabe;
  font-weight: 600;
`;

const TextContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const CardWrapper1 = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  flex-direction: column;
`;
const CardWrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Card1 = styled.div`
  width: 300px;
  height: 200px;
  background: white;
  margin: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const FirstCardHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 40px;
`;
const DashWrapper = styled.div`
  width: 92%;
`;
const DashComp = styled.div`
  width: calc(100vw - 350px);
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #fafcff;
  flex-direction: column;
`;

const NavAndPageHolder = styled.div`
  display: flex;
  min-height: calc(100vh - 90px);
  background-color: #fafcff;
`;
const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  /* align-items: flex-end; */

  /* min-height: 100vh; */
  justify-content: space-between;
  height: 100%;
`;
