import axios from 'axios';
import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthState/AuthProvider';
import Header from '../team/Header';
import AppliedCard from './AppliedCard';
import DashNav from './DashNav';

const AllAppliedJob = () => {
  const { currentUser } = useContext(AuthContext);

  const { id } = useParams();

  const navigate = useNavigate();

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:2023';
      const mainUrl = 'https://smart-2022.herokuapp.com';
      try {
        const res = await axios.get(`${mainUrl}/clientonejob/${id}`);
        // console.log(res?.data?.data.jobs);
        setData(res?.data?.data?.apply);
        // console.log(res?.data?.data?.apply);
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
            {data.map((props) => (
              <AppliedCard props={props} />
            ))}
          </DashWrapper>
        </DashComp>
      </NavAndPageHolder>
    </Container>
  );
};

export default AllAppliedJob;

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
  font-size: 12px;
  color: white;
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
const ClientName = styled.div`
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
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
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
  font-family: poppins;

  flex-direction: column;
  /* align-items: flex-end; */

  /* min-height: 100vh; */
  justify-content: space-between;
  height: 100%;
`;
