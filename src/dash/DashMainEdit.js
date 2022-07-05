import React from 'react';
import styled from 'styled-components';
import DashHeader from './DashHeader';
import UserProfile from './UserProfile';
import UserProjects from './UserProjects';
import UserDelivered from './UserDelivered';
import UserUndelivered from './UserUndelivered';
import EditProfile from './EditProfilePage';
import DashNavs from './DashNavs';

const DashMainEdit = () => {
  return (
    <div style={{ width: '100%', display: 'flex' }}>
      <DashNavs />
      <Container>
        <DashHeader />
        <Wrapper>
          <EditProfile />
        </Wrapper>
      </Container>
    </div>
  );
};

export default DashMainEdit;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: calc(100vh - 100px);
  /* background: red; */
`;

const Container = styled.div`
  width: 78%;
  display: flex;
  flex-direction: column;
  /* max-height: 100vh; */
  /* height: calc(100vh - 100px); */
  /* overflow: hidden; */
  /* height: 100%auto; */

  align-items: center;
`;
