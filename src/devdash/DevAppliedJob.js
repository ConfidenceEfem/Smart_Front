import React, { useContext } from 'react';
import styled from 'styled-components';
import DashHeader from '../maindash/DashHeader';
import DashNav from './DashNav';
import moment from 'moment';
import { AuthContext } from '../AuthState/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from '../team/Header';
import DevAppliedCard from './DevAppliedCard';

const DevAppliedJob = () => {
  const { currentUser, see, loading, dispatch } = useContext(AuthContext);
  console.log(currentUser);
  console.log(see);

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'DataRequest' });
      const url = 'http://localhost:2023';
      const mainUrl = 'https://smart-2022.herokuapp.com';
      try {
        const res = await axios.get(`${url}/user/${currentUser?.data?._id}`);
        if (res) {
          dispatch({ type: 'DataSuccess' });
          console.log(res?.data?.data?.applied);
          setData(res?.data?.data?.applied);
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
      <Header />
      <NavAndPageHolder>
        <DashNav />
        <DashComp>
          <DashWrapper>
            {data.map((props) => (
              <DevAppliedCard props={props} />
            ))}
          </DashWrapper>
        </DashComp>
      </NavAndPageHolder>
    </Container>
  );
};

export default DevAppliedJob;

const DashWrapper = styled.div`
  width: 92%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  width: 100vw;
  flex-direction: column;
  /* align-items: flex-end; */

  /* min-height: 100vh; */
  justify-content: space-between;
  height: 100%;
`;
