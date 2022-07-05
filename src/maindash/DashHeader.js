import React from 'react';
import styled from 'styled-components';

const DashHeader = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>Smart</Logo>
        <Push></Push>
        <RightNavs></RightNavs>
      </Wrapper>
    </Container>
  );
};

export default DashHeader;

const RightNavs = styled.div``;
const Push = styled.div`
  display: flex;
  flex: 1;
`;
const Logo = styled.div``;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
`;
const Container = styled.div`
  width: 100%;
  box-shadow: 1px 1px 1px lightgray;
  display: flex;
  height: 90px;
  justify-content: center;
  background-color: white;
  box-shadow: 1px 1px 1px solid lightgray;
  z-index: 10;
`;
