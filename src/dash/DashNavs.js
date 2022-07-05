import React from 'react';
import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const DashNavs = () => {
  return (
    <Container>
      <LogoHolder>
        <Logo>Logo</Logo>
      </LogoHolder>
      <Wrapper>
        <Navigations to="/dash">
          <Icon />
          <span>Home</span>
        </Navigations>
        <Navigations to="/">
          <Icon />
          <Select value="All Projects">
            <Options>All Projects</Options>
            <Options>Delivered Projects</Options>
            <Options>Undelivered Projects</Options>
          </Select>
        </Navigations>
        <Navigations to="/edit">
          <Icon />
          <span>Edit Profile</span>
        </Navigations>
        <Navigations to="/"></Navigations>
      </Wrapper>
    </Container>
  );
};

export default DashNavs;

const Options = styled.option``;

const Select = styled.select`
  background: none;
  border: none;
  outline: none;
  font-size: 16px;
  color: lightgray;
`;
const Icon = styled(AiFillHome)`
  font-size: 13px;
  margin-right: 10px;
`;

const Navigations = styled(Link)`
  margin: 15px 0;
  height: 70px;
  width: 96%;
  /* border-left: 5px solid blue; */
  display: flex;
  justify-content: center;
  color: lightgray;
  cursor: pointer;
  align-items: center;
  margin: 10px 0;
  transition: all 350ms;
  :hover {
    border-left: 5px solid blue;
  }
  /* background: blue; */
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;
  color: blue;l
`;

const LogoHolder = styled.div`
  width: 100%;
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  background: lightgray;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const Container = styled.div`
  display: flex;
  width: 22%;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  /* background-color: red; */
`;
