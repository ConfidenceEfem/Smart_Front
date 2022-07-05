import React from 'react';
import styled from 'styled-components';

const DashHeader = () => {
  return (
    <Container>
      <Wrapper>
        <AdminText>Admin DashBoard</AdminText>
      </Wrapper>
    </Container>
  );
};

export default DashHeader;

const AdminText = styled.div`
  font-size: 20px;
  color: blue;
  font-style: italic;
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
`;

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  box-shadow: 1px 1px 1px lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 1px lightgray;
`;
