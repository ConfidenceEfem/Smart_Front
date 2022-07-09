import React from 'react';
import styled from 'styled-components';
import DashHeader from '../maindash/DashHeader';
import Header from '../team/Header';
import DevNav from './DashNav';
import Form1 from './Form1';
const DevApplyJob = () => {
  return (
    <Container>
      {/* <DashHeader /> */}
      <Header />
      <NavAndPageHolder>
        <DevNav />
        <DashComp>
          <DashWrapper>
            <Form1 />
          </DashWrapper>
        </DashComp>
      </NavAndPageHolder>
    </Container>
  );
};

export default DevApplyJob;

const Title = styled.div`
  opacity: 1;
  font-size: 14px;
  font-weight: 550;
  text-transform: uppercase;

  position: absolute;
  top: 0;
  color: white;
  transition: all 350ms;

  span {
    opacity: 0;
    width: 300px;
    height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
  }
  :hover {
    span {
      opacity: 1;
    }
  }
`;
const Amount = styled.div`
  font-weight: 600;
  color: blue;
`;
const Email = styled.div`
  font-weight: 450;
  font-size: 10px;
`;
const AmountAndEmail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Experience = styled.div`
  width: 100%;
  font-size: 13px;
  margin: 3px 0;
  span {
    font-weight: 500;
    font-size: 11px;
    color: black;
    margin-right: 5px;
  }
`;
const Deadline = styled.div`
  width: 100%;
  font-size: 13px;
  margin-bottom: 20px;
  span {
    font-weight: 500;
    font-size: 11px;
    color: black;
    margin-right: 5px;
  }
`;
const Stack = styled.div`
  width: 100%;
  display: flex;
  font-weight: 500;
  justify-content: flex-start;
  align-items: center;

  color: blue;

  span {
    font-weight: 500;
    font-size: 11px;
    color: black;
    margin-right: 5px;
  }
`;
const Desc = styled.div`
  width: 100%;
  font-size: 13px;
  text-align: left;
  margin-bottom: 10px;
  line-height: 25px;
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
`;
const Card = styled.div`
  width: 300px;
  height: 480px;
  box-shadow: 1px 1px 1px lightgray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  transition: all 350ms;
  cursor: pointer;
  position: relative;
  margin: 15px;
  top: 0;
  :hover {
    transform: scale(1.01);
  }
`;

const DashWrapper = styled.div`
  width: 92%;
  height: 100%;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;
const DashComp = styled.div`
  width: calc(100vw - 350px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavAndPageHolder = styled.div`
  display: flex;
  min-height: calc(100vh - 90px);
  background-color: #fafcff;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-family: poppins;
  /* align-items: flex-end; */

  /* min-height: 100vh; */
  justify-content: space-between;
  height: 100%;
`;
