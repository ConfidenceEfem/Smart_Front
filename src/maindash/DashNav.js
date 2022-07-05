import React from 'react';
import styled from 'styled-components';
import { MdDashboard } from 'react-icons/md';
import {
  AiFillFormatPainter,
  AiTwotoneEdit,
  AiTwotoneFile,
} from 'react-icons/ai';
import img from './gift.png';
import { NavLink } from 'react-router-dom';
import { BsFillBriefcaseFill } from 'react-icons/bs';

const DashNav = () => {
  return (
    <Container>
      <Wrapper>
        <NavHolder>
          <NavAndIcon to={`/dash/overview`}>
            <IconAndText>
              <MdDashboard />
              <Text>DashBoard</Text>
            </IconAndText>
            <Line to={`/dash/overview`}></Line>
          </NavAndIcon>
          <NavAndIcon to={`/dash/postjob`}>
            <IconAndText>
              <AiFillFormatPainter />
              <Text>Post A Job</Text>
            </IconAndText>
            <Line to={`/dash/postjob`}></Line>
          </NavAndIcon>
          <NavAndIcon to={`/dash/findtalent`}>
            <IconAndText>
              <AiFillFormatPainter />
              <Text>Find Talent</Text>
            </IconAndText>
            <Line to={`/dash/findtalent`}></Line>
          </NavAndIcon>
          <NavAndIcon to={`/dash/editprofile`}>
            <IconAndText>
              <AiTwotoneEdit />
              <Text>Edit Profile</Text>
            </IconAndText>
            <Line to={`/dash/editprofile`}></Line>
          </NavAndIcon>
          <NavAndIcon to={`/dash/appliedjob`}>
            <IconAndText>
              <AiTwotoneFile />
              <Text>View All Applied Job</Text>
            </IconAndText>
            <Line to={`/dash/appliedjob`}></Line>
          </NavAndIcon>
          <NavAndIcon to={`/dash/postedjob`}>
            <IconAndText>
              <BsFillBriefcaseFill />
              <Text>View All My Jobs</Text>
            </IconAndText>
            <Line to={`/dash/postedjob`}></Line>
          </NavAndIcon>
        </NavHolder>
        <Image src={img} />
      </Wrapper>
    </Container>
  );
};

export default DashNav;

const Image = styled.img`
  width: 200px;
  height: 170px;
  object-fit: cover;
  margin-top: 20px;
`;
const Line = styled(NavLink)`
  height: 40px;
  width: 5px;
  /* border: 2px solid ; */
  background-color: blue;
  display: none;
  &.active {
    display: block;
  }
`;
const Text = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-left: 30px;
`;

const IconAndText = styled.div`
  display: flex;
  align-items: center;
  /* color: lightgray; */
  font-size: 20px;
`;
const NavAndIcon = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  transition: all 350ms;
  transition: all 350ms;

  cursor: pointer;
  width: 100%;
  text-decoration: none;
  margin: 10px 0;
  align-items: center;
  height: 40px;
  color: lightgray;
  &.active {
    color: blue;
  }
`;
const NavHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const Container = styled.div`
  width: 350px;
  background-color: white;
  display: flex;
  min-height: calc(100vh - 90px);
  height: 100%auto;
  justify-content: flex-end;
  box-shadow: 1px 1px 1px lightgray;
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  /* height: 100%; */
`;
