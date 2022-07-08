import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';

const VerifyClient = () => {
  const { id, otp } = useParams();

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const findData = async () => {
    const url = 'http://localhost:2023';
    const mainUrl = 'https://smart-2022.herokuapp.com';
    const check = await axios.get(`${url}/user/${id}`);
    setData(check.data);
    console.log(data);
  };

  const updateUser = async () => {
    const url = 'http://localhost:2023';
    const mainUrl = 'https://smart-2022.herokuapp.com';
    await axios.post(`${url}/register/client/${otp}/${id}`);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `You are now a Smart Client`,
      showConfirmButton: false,
      timer: 2500,
    });
    navigate(`/signin`);
  };

  useEffect(() => {
    findData();
  }, []);
  return (
    <Container>
      <Header />
      <Wrapper>
        <Text>
          Congratulations to you {data?.name},
          <Break>You are now a Smart Developer</Break>
        </Text>
        <Sub>Click Button for Confirmation</Sub>
        <Button
          onClick={() => {
            updateUser();
          }}
        >
          Confirm
        </Button>
      </Wrapper>
    </Container>
  );
};

export default VerifyClient;

const Break = styled.div`
  margin: 5px 0;
`;
const Button = styled.div`
  width: 200px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1967d2;
  font-size: 15px;
  color: white;
  font-family: poppins;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    transform: scale(1.01);
  }
`;
const Sub = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 60px;
`;

const Text = styled.div`
  font-size: 30px;
  font-weight: 600;
  flex-direction: column;
  font-family: poppins;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  height: calc(100vh - 95px);
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
`;
