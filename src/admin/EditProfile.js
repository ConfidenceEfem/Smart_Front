import React from 'react';
import styled from 'styled-components';
import AdminHeader from './AdminHeader';
import NavComp from './NavComp';
import EditProfilePage from '../dash/EditProfilePage';
const EditProfile = () => {
  return (
    <MainContainer>
      <NavComp />
      <Container>
        <Right>
          <AdminHeader />
          <EditProfilePage />
        </Right>
      </Container>
    </MainContainer>
  );
};

export default EditProfile;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Error = styled.div`
  font-size: 10px;
  font-weight: bold;
  color: red;
  /* font-family: arial; */
  display: flex;
  width: 300px;
  margin-bottom: 3px;
`;

const Submit = styled.button`
  width: 130px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 14px;
  font-size: 14px;
  background-color: #0e0e10;
  transform: scale(1);
  transition: all 350ms;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 4px;
  :hover {
    background-color: lightgray;
    transform: scale(0.9);
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0;
`;

const NavName = styled.div`
  font-size: 15px;
  margin: 20px 0;
  font-weight: bold;
`;

const Inputs = styled.input`
  width: 400px;
  height: 35px;
  border: solid 2px #0e0e10;
  outline: none;
  margin-bottom: 10px;
  @media screen and (max-width: 500px) {
    width: 80%;
    height: 30px;
    margin-bottom: 20px;
    ::placeholder {
      font-size: 14px;
    }
  }
`;
const Upload = styled.label`
  width: 250px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #0e0e10;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  letter-spacing: 0.3px;
  transition: all 350ms;
  transform: scale(1);
  margin-bottom: 30px;
  :hover {
    transform: scale(1.02);
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    width: 200px;
    height: 45px;
    font-size: 13px;
  }
`;
const EventImage = styled.img`
  width: 250px;
  height: 200px;
  object-fit: cover;
  border: solid 2px #0e0e10;
  margin-bottom: 20px;
  @media screen and (max-width: 500px) {
    width: 200px;
    height: 150px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 375px) {
    margin-bottom: 20px;
  }
`;

const Right = styled.form`
  width: 75%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #eee;
  align-items: center;
  position: relative;
  @media screen and (max-width: 960px) {
    width: 100%;
    margin-bottom: 0px;
  }
`;
