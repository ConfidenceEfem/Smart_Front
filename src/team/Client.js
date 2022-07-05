import React, { useState } from 'react';
import styled from 'styled-components';
import { SiNamecheap } from 'react-icons/si';
import { IoLocationSharp } from 'react-icons/io5';
import { GiCompanionCube } from 'react-icons/gi';
import JobPost from './JobPost';
import { CgProfile } from 'react-icons/cg';
import { GiCancel } from 'react-icons/gi';

const Client = () => {
  const [change, setChange] = useState(true);

  const toggle = () => {
    setChange(!change);
  };

  return (
    <>
      <Con>
        <Tog onClick={toggle}>
          {change ? <CgProfile size="30px" /> : <GiCancel size="30px" />}
        </Tog>
        <Prof onClick={toggle} change={change}>
          <PicHold>
            <Pic src="angel.png" />
            <Name>Engineer Lucia HR</Name>
          </PicHold>
          <Hold>
            <S>{/* <Logo/><span>Company name</span> */}</S>
            <Company>CodeLab</Company>
          </Hold>
          <Hold>
            <S>{/* <Logo/><span>Position Held</span> */}</S>
            <Company>CEO</Company>
          </Hold>

          <Hold>
            <S>
              <Logo1 />
              <span>Company location</span>
            </S>
            <Company>wilma road by ojodu berger</Company>
          </Hold>
          <Hold>
            <S>
              <Logo2 />
              <span>About Company</span>
            </S>
            <Company>
              Because very optimistic entrepreneur needs a dose of reality now
              and then. Cold statistics like these are not intended to
              discourage entrepreneurs, but to encourage them to work smarter
              and harder.
            </Company>
          </Hold>
        </Prof>
        <Jobs>
          <P>Posted Jobs</P>
          <WrapJob>
            <JobPost />
          </WrapJob>
        </Jobs>
      </Con>
    </>
  );
};

export default Client;
const Tog = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    padding-top: 20px;
    margin-left: 30px;
  }
`;

const S = styled.div`
  display: flex;
  align-items: center;
`;
const Hold = styled.div`
  /* background-color:red ; */
  width: 80%;
  margin-bottom: 20px;
  span {
    font-family: poppins;
  }
`;
// const Logo = styled(SiNamecheap)`
// display: flex;
// color: black;
// margin-right: 10px;
// color: blue;
// font-size: 20px;
// `
const Logo1 = styled(IoLocationSharp)`
  display: flex;
  color: black;
  margin-right: 10px;
  color: blue;
  font-size: 20px;
`;
const Logo2 = styled(GiCompanionCube)`
  display: flex;
  color: black;
  margin-right: 10px;
  color: blue;
  font-size: 20px;
`;
const Company = styled.div`
  /* color: pink; */
  margin-left: 29px;
  margin-top: 10px;
  border-bottom: 2px solid gray;
  font-size: 17px;
`;

const Name = styled.div`
  font-family: poppins;
  margin-top: 20px;
  font-size: 18px;
`;

const Pic = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 100%;
  background-color: black;
  object-fit: cover;
`;

const PicHold = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px 40px;
`;
const Con = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  /* padding-bottom: 50px; */
`;
const Prof = styled.div`
  height: 100%;
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgb(0, 0, 255, 0.6);

  @media screen and (max-width: 768px) {
    position: absolute;
    height: auto;
    top: 55px;
    left: ${({ change }) => (change ? '-100%' : 0)};
    background-color: lightblue;
    border-radius: 5px 0px 0px 5px;
    transition: all 900ms;
  }
`;
const Jobs = styled.div`
  width: 95%;
  /* background-color: green; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* border-left: solid 1px black; */
`;
const WrapJob = styled.div`
  padding-top: 30px;
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 430px) {
    background-color: red;
  }
`;
const P = styled.div`
  font-size: 30px;
  font-family: poppins;
  color: black;
  display: flex;
  justify-content: center;
`;
