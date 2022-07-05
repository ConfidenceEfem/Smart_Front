import React from 'react';
import styled from 'styled-components';
import AdminHeader from './AdminHeader';

import JobPost from '../team/JobPost';
import NavComp from './NavComp';

const PostAJob = () => {
  return (
    <Container>
      <NavComp />
      <Right>
        <AdminHeader />

        <JobPost />
      </Right>
    </Container>
  );
};

export default PostAJob;
const Submit = styled.div`
  width: 130px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-size: 14px;
  background-color: #0e0e10;
  transform: scale(1);
  transition: all 350ms;
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

const Right = styled.div`
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
