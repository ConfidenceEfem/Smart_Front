import React, { useContext } from 'react';
import styled from 'styled-components';
import icon from '../dash/images/user.png';
import icon1 from '../dash/images/suitcase.png';
import icon2 from '../dash/images/hired.png';
import img from '../dash/images/avatar.png';
import ClientDetailComp from '../team/ClientDetail';
import DashHeader from '../maindash/DashHeader';
import DevNav from './DashNav';
import moment from 'moment';
import { AuthContext } from '../AuthState/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from '../team/Header';
import DevHiringCard from './DevHiringCard';
import LoadingScreen from '../team/LoadingScreen';

const DevMainScreen = () => {
  // console.log(user);
  const { currentUser, see, loading, dispatch } = useContext(AuthContext);
  console.log(currentUser);

  const [data, setData] = React.useState([]);

  const [maindata, setMainData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'DataRequest' });
      const url = 'http://localhost:2023';
      const mainUrl = 'https://smart-2022.herokuapp.com';
      try {
        const res = await axios.get(`${url}/user/${currentUser?.data?._id}`);
        if (res) {
          dispatch({ type: 'DataSuccess' });
          console.log(res?.data?.data);
          setData(res?.data?.data);
        }
      } catch (error) {
        dispatch({ type: 'DataFailed' });
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

  // console.log(currentUser);

  React.useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:2023';
      const mainUrl = 'https://smart-2022.herokuapp.com';
      try {
        const res = await axios.get(`${url}/user/${currentUser?.data?._id}`);
        console.log(res?.data?.data?.hire);
        setMainData(res?.data?.data?.hire);
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
      {loading ? <LoadingScreen /> : null}

      <Header />
      <NavAndPageHolder>
        <DevNav />
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
                    <TotalText>Total Jobs Applied</TotalText>
                    <Amoutn>{data?.applied?.length}</Amoutn>
                    <Join>
                      <span>Recent:</span>
                      {
                        moment().fromNow()
                        // data?.applied[data?.applied.length - 1]?.createdAt
                      }
                    </Join>
                  </TextContents>
                  <IconShow src={icon1} />
                </CardWrapper>
              </Card1>
              <Card1>
                <CardWrapper>
                  <TextContents>
                    <TotalText>Total Client Hired</TotalText>
                    <Amoutn>{data?.hire?.length}</Amoutn>
                    <Join>
                      <span>Recent:</span>2days ago
                    </Join>
                  </TextContents>
                  <IconShow src={icon2} />
                </CardWrapper>
              </Card1>
            </FirstCardHolder>
            <SecondCardHolder>
              <SecondTitle>Recent Hiring Request</SecondTitle>
              {/* <Circle></Circle> */}
              <SecondCardWrapper>
                {maindata?.map((props, i) =>
                  i < 2 ? <DevHiringCard props={props} /> : null
                )}
              </SecondCardWrapper>
            </SecondCardHolder>
          </DashWrapper>
        </DashComp>
      </NavAndPageHolder>
    </Container>
  );
};

export default DevMainScreen;

const SecondTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

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
  margin: 15px;
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
  font-family: poppins;
  position: relative;
  /* top: 0; */
  /* align-items: flex-end; */

  /* min-height: 100vh; */
  justify-content: space-between;
  height: 100%;
`;
