import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthState/AuthProvider';
import DashNav from './DashNav';
import moment from 'moment';
import DashHeader from '../maindash/DashHeader';
import JobClientProfile from './JobClientProfile';
import Header from '../team/Header';
import DevHiringCard from './DevHiringCard';
import LoadingScreen from '../team/LoadingScreen';
import { useSelector } from 'react-redux';

const DevHiring = () => {
  const { currentUser, loading, dispatch } = useContext(AuthContext);
  // console.log(currentUser);

  const selector = useSelector((state) => state.persistedReducer.current.data);

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'DataRequest' });
      const url = 'http://localhost:2023';
      const mainUrl = 'https://smart-2022.herokuapp.com';
      try {
        const res = await axios.get(`${mainUrl}/user/${selector?._id}`);
        if (res) {
          dispatch({ type: 'DataSuccess' });
          console.log(res?.data?.data?.hire);

          setData(res?.data?.data?.hire);
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

  return (
    <Container>
      {loading ? <LoadingScreen /> : null}

      {/* <DashHeader /> */}
      <Header />
      <NavAndPageHolder>
        <DashNav />
        <DashComp>
          <DashWrapper>
            {data.map((props) => (
              <DevHiringCard props={props} />
            ))}
          </DashWrapper>
        </DashComp>
      </NavAndPageHolder>
    </Container>
  );
};

export default DevHiring;

const CardWrapper = styled.div`
  width: 97%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;
const PendingButton = styled.div`
  padding: 10px 15px;
  border-radius: 30px;
  background: red;
  cursor: pointer;
  transition: all 350ms;
  font-size: 12px;
  color: white;
  :hover {
    transform: scale(1.02);
  }
`;
const HiredDate = styled.div`
  display: flex;
  font-size: 13px;
  font-weight: 600;
`;
const Amount = styled.div`
  display: flex;
  font-weight: 600;
  color: red;
  font-size: 12px;
`;
const JobTitle = styled.div`
  font-weight: 600;
  color: blue;
  display: flex;
  align-items: center;
  /* flex: 2; */
  span {
    color: black;
    font-size: 12px;
    margin-right: 5px;
  }
`;
const DeveloperName = styled.div`
  font-weight: 600;

  display: flex;
  /* flex: 1; */
`;

const AvatarAndName = styled.div`
  display: flex;
  align-items: center;
`;
const SecondCard = styled.div`
  width: 93%;
  display: flex;
  margin: 20px 0;
  align-items: center;
  background: white;
  /* margin-left: 20px; */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  min-height: 80px;
  height: 100%auto;
  justify-content: center;
`;

const DashWrapper = styled.div`
  width: 92%;
  height: 100%;
  flex-direction: column;
  display: flex;

  /* justify-content: center; */
  align-items: center;
`;
const DashComp = styled.div`
  width: calc(100vw - 350px);
  height: 100%;
  display: flex;
  align-items: center;

  flex-direction: column;
`;

const NavAndPageHolder = styled.div`
  display: flex;
  background-color: #fafcff;
  min-height: calc(100vh - 90px);
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  font-family: poppins;
  top: 0;
  /* align-items: flex-end; */

  /* min-height: 100vh; */
  justify-content: space-between;
  height: 100%;
`;
