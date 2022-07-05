import React from 'react';
import styled from 'styled-components';
import DashHeader from './DashHeader';
import UserProfile from './UserProfile';
import UserProjects from './UserProjects';
import UserDelivered from './UserDelivered';
import UserUndelivered from './UserUndelivered';
import DashNavs from './DashNavs';

const DashMainDelivered = () => {
  return (
    <div style={{ width: '100%', display: 'flex' }}>
      <DashNavs />
      <Container>
        <DashHeader />
        <Wrapper>
          <UserDelivered />
          {/* <UserUndelivered /> */}
        </Wrapper>
      </Container>
    </div>
  );
};

export default DashMainDelivered;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const Container = styled.div`
  width: 78%;
  display: flex;
  flex-direction: column;
  /* max-height: 100vh; */
  height: calc(100vh - 130px);
  /* overflow: hidden; */
  /* height: 100%auto; */

  align-items: center;
`;
