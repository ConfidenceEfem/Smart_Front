import axios from 'axios';
import moment from 'moment';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthState/AuthProvider';
import ApplyClientProfile from './ApplyClientProfile';
import JobClientProfile from './JobClientProfile';
import SmallDetails from './SmallDetails';

const DevAppliedCard = ({ props }) => {
  // console.log(props);
  const [data, setData] = React.useState([]);
  const [mainData, setMainData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:2023';
      const mainUrl = 'https://smart-2022.herokuapp.com';
      try {
        const res = await axios.get(`${mainUrl}/oneapply/${props}`);
        console.log(res?.data?.data);

        setData(res?.data?.data);
        // console.log(res?.data?.data?.apply);
      } catch (error) {
        // Swal.fire({
        //   icon: 'error',
        //   title: 'Unable to get Data',
        //   timer: 2500,
        //   showConfirmButton: false,
        // });
      }
    };
    fetchData();
  }, []);

  console.log(data?.job);

  React.useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:2023';
      const mainUrl = 'https://smart-2022.herokuapp.com';
      try {
        if (data) {
          const res = await axios.get(`${mainUrl}/clientonejob/${data?.job}`);
          console.log(res?.data?.data);
          setMainData(res?.data?.data);
        }

        // console.log(res?.data?.data?.apply);
      } catch (error) {
        // Swal.fire({
        //   icon: 'error',
        //   title: 'Unable to get Data',
        //   timer: 2500,
        //   showConfirmButton: false,
        // });
      }
    };
    fetchData();
  }, []);

  return (
    <SecondCard key={props}>
      <CardWrapper>
        {/* <AvatarAndName>
          <Circle>CE</Circle>
          <ClientName>{data?.name}</ClientName>
        </AvatarAndName> */}
        <ApplyClientProfile client={mainData?.user} />
        {/* <JobTitle>
          <span>Applied For:</span>
          {mainData?.jobTitle}
        </JobTitle> */}
        <SmallDetails job id={data?.job} />
        <HiredDate>
          Applied: <span>{moment(data?.createdAt).fromNow()}</span>
        </HiredDate>
        <Amount>{mainData?.contactemail}</Amount>
        {/* <PendingButton
                  style={{ backgroundColor: '#3ddabe', color: 'black' }}
                >
                  Hired
                </PendingButton> */}
        <PendingButton>
          N{mainData?.cost}
          {/* {mainData?.user} */}
        </PendingButton>
      </CardWrapper>
    </SecondCard>
  );
};

export default DevAppliedCard;

const CardWrapper = styled.div`
  width: 97%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PendingButton = styled.div`
  /* padding: 10px 15px; */
  /* border-radius: 30px; */
  /* background: red; */
  font-weight: 700;

  font-size: 12px;
  color: red;
`;
const HiredDate = styled.div`
  display: flex;
  font-size: 13px;
  font-weight: 600;
`;
const Amount = styled.div`
  display: flex;
  font-weight: 600;
  color: blue;
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

const SecondCard = styled.div`
  width: 93%;
  display: flex;
  margin: 20px 0;
  align-items: center;
  font-family: poppins;
  background: white;
  /* margin-left: 20px; */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  min-height: 80px;
  height: 100%auto;
  justify-content: center;
  border-radius: 5px;
`;
