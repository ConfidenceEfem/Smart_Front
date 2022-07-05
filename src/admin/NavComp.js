import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavComp = () => {
  return (
    <Left>
      <LeftItems>
        <Navs to="/dash"> DashBoard</Navs>
        <Navs to="/dash/myprofile">My Profile</Navs>
        <Navs to="/dash/editprofile">Edit Profile</Navs>
        <Navs to="/dash/postjob">Post Job</Navs>
        <Navs to="/dash/contacted">View Contacted</Navs>
        <Navs to="/dash/viewjobs">View Jobs</Navs>
      </LeftItems>
    </Left>
  );
};

export default NavComp;

const Navs = styled(NavLink)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: whitesmoke;
  height: 40px;
  font-weight: bold;
  font-family: arial;
  cursor: pointer;
  margin: 20px 0;
  color: blue;
  :hover {
    background-color: lightgray;
  }
`;
const LeftItems = styled.div`
  width: 85%;
  display: flex;
  margin-top: 90px;
  flex-direction: column;
  align-items: center;
`;

const Left = styled.div`
  min-height: 100vh;
  height: 100%auto;
  width: 25%;
  display: flex;
  flex-direction: column;
  background-color: blue;
  position: sticky;
  align-items: center;
  z-index: 10;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
