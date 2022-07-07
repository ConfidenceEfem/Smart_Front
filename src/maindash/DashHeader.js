import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const DashHeader = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Wrapper>
        <Logo>Smart</Logo>
        <Push></Push>
        <RightNavs>
          <Navigations>
            <Navs onClick={()=>{
                navigate(`/jobs`)
            }}>Find Jobs</Navs>
            <Navs>Hire Talent</Navs>
            <Navs></Navs>
          </Navigations>
          <Logout>Log Out</Logout>
        </RightNavs>
      </Wrapper>
    </Container>
  );
};

export default DashHeader;

const Navs = styled.div`
  margin: 0 10px;
  font-weight: 500;
  font-size: 14px;
  color: black;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    transform: scale(0.96);
  }
`;
const Navigations = styled.div`
  display: flex;
  align-items: center;
`;
const Logout = styled.div`
  padding: 10px 20px;
  border-radius: 3px;
  background: blue;
  font-size: 13px;
  color: white;
  font-weight: 600;
  transition: all 350ms;
  :hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;
const RightNavs = styled.div`
  display: flex;
`;
const Push = styled.div`
  display: flex;
  flex: 1;
`;
const Logo = styled.div``;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  box-shadow: 1px 1px 1px lightgray;
  display: flex;
  height: 90px;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 1px 1px 1px solid lightgray;
  z-index: 10;
`;
