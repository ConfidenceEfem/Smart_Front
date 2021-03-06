import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ClientDetailComp = ({ id }) => {
  const [jobData, setJobData] = useState([]);

  const fetchData = async () => {
    const url = 'http://localhost:2023';
    const mainUrl = 'https://smart-2022.herokuapp.com';
    const res = await axios.get(`${mainUrl}/user/${id}`);
    setJobData(res.data.data);
  };

  useEffect(() => {
    fetchData();
    // console.log(jobData);
  }, []);
  return (
    <ClientDetail>
      <ClientNameAndCompany>
        <ClientName>{jobData?.name}</ClientName>
        <Company>{jobData?.stack}</Company>
      </ClientNameAndCompany>
    </ClientDetail>
  );
};

export default ClientDetailComp;

const Company = styled.div`
  font-size: 13px;
`;
const ClientName = styled.div`
  font-weight: 600;
  font-size: 20px;
`;
const ClientNameAndCompany = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ClientDetail = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 15px 0;
  font-family: poppins;
`;
