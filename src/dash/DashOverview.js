import React from 'react';
import styled from 'styled-components';
import DashHeader from './DashHeader';
import UserProfile from './UserProfile';
import UserProjects from './UserProjects';
import UserDelivered from './UserDelivered';
import UserUndelivered from './UserUndelivered';
import DashNavs from './DashNavs';

const DashOverview = () => {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <DashNavs />
      <Container>
        <DashHeader />
        <Wrapper>
          <UserProfile />
        </Wrapper>
      </Container>
    </div>
  );
};

export default DashOverview;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: calc(100vh - 100px);

  justify-content: center;
`;

const Container = styled.div`
  width: 78%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
