import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import img from '../dash/images/avatar.png';

const JobDevProfile = ({ dev }) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:2023';
      const mainUrl = 'https://smart-2022.herokuapp.com';
      try {
        const res = await axios.get(`${mainUrl}/user/${dev}`);
        console.log(res?.data?.data);
        setData(res?.data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <AvatarAndName>
      {data?.image === '' ? (
        <Avatar src={img} alt="image" />
      ) : (
        <Avatar src={data?.image} alt="image" />
      )}

      <DeveloperName>{data.name}</DeveloperName>
    </AvatarAndName>
  );
};

export default JobDevProfile;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  object-fit: cover;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
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

const DeveloperName = styled.div`
  font-weight: 600;

  display: flex;
  /* flex: 1; */
`;

const AvatarAndName = styled.div`
  display: flex;
  align-items: center;
`;
