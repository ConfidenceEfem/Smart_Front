import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const ApplyClientProfile = ({ client }) => {
  const [data, setData] = React.useState([]);

  const [mainData, setMainData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:2023';
      const mainUrl = 'https://smart-2022.herokuapp.com';
      try {
        const res = await axios.get(`${url}/clientonejob/${client}`);
        console.log(res?.data?.data);
        setData(res?.data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  React.useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:2023';
      const mainUrl = 'https://smart-2022.herokuapp.com';
      try {
        const res = await axios.get(`${url}/user/${data?.user}`);
        console.log(res?.data?.data);
        setMainData(res?.data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(mainData);

  return (
    <AvatarAndName>
      {mainData?.image === '' ? (
        <Circle>CE</Circle>
      ) : (
        <Avatar src={mainData?.image} alt="image" />
      )}

      <ClientName>{mainData?.name}</ClientName>
    </AvatarAndName>
  );
};

export default ApplyClientProfile;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
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
const ClientName = styled.div`
  font-weight: 600;

  display: flex;
  /* flex: 1; */
`;

const AvatarAndName = styled.div`
  display: flex;
  align-items: center;
`;
