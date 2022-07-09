import axios from 'axios';
import moment from 'moment';
import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthState/AuthProvider';

const AppliedCard = ({ props }) => {
  console.log(props);
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [data, setData] = React.useState([]);

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

  console.log(data);

  return (
    <SecondCard>
      <CardWrapper>
        {/* <Avatar
      size="md"
      name={``}
      mr={1}
      ml={5}
    /> */}
        <AvatarAndName>
          <Circle>CE</Circle>
          <ClientName>{data?.name}</ClientName>
        </AvatarAndName>
        {/* <JobTitle>
          <span>Applied For:</span>FrontEnd Engineerer
        </JobTitle> */}
        <HiredDate>
          Applied: <span>{moment(data?.createdAt).fromNow()}</span>
        </HiredDate>
        <Amount>{data?.email}</Amount>

        {/* <PendingButton
      style={{ backgroundColor: '#3ddabe', color: 'black' }}
    >
      Hired
    </PendingButton> */}
        <a href={`${data?.cvImage}`} target="_blank">
          <PendingButton>View CV</PendingButton>
        </a>
      </CardWrapper>
    </SecondCard>
  );
};

export default AppliedCard;

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
  text-decoration: none;
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
  font-family: poppins;
  align-items: center;
  background: white;
  /* margin-left: 20px; */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  min-height: 80px;
  height: 100%auto;
  justify-content: center;
`;
