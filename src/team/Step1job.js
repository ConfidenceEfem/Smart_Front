import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import avatar1 from '../dash/images/avatar1.webp';

function Step1() {
  return (
    <>
      <Container>
        <Wrapper>
          <Box1>
            <S>
              Smart<span>D</span> Verification
            </S>
            <C>
              Just Few Step Away From Being a Smart <span>D</span>{' '}
            </C>
            <PicHold>
              <img src={avatar1} />
            </PicHold>

            <Des>
              <input type="radio" />
              <D>Desired Job</D>
            </Des>
          </Box1>
          <Box2>
            <Hold>
              <D>Desired Job</D>
              <Stacks>
                <Full>Full Stack Dev</Full>
                <Full>Front End Dev</Full>
                <Full>Backend Dev</Full>
                <Full>Mobile Dev</Full>
                <Full>Data Scientist</Full>
                <Full>Game Dev</Full>
                <Full>Data Engineer</Full>
                <Full>DevOps</Full>
                <Full>+ Others</Full>
              </Stacks>
              <No>
                <input type="checkbox" />
                <Not>Not Sure right now</Not>
              </No>
              <Direction>
                <Back>Back</Back>
                <Next to="/dash">Next</Next>
              </Direction>
            </Hold>
          </Box2>
        </Wrapper>
      </Container>
    </>
  );
}

export default Step1;
const C = styled.div`
  font-size: 14px;
  span {
    color: blue;
    margin-left: 2px;
  }
`;

const Des = styled.div`
  display: flex;
  margin-top: 20px;

  input {
    height: 15px;
    width: 15px;
    border: none;
    outline: 0;
    cursor: pointer;
    margin-right: 10px;
    margin-top: 5px;
  }
`;

const PicHold = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 50px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const S = styled.div`
  font-family: poppins;
  margin-top: 30px;
  font-size: 30px;
  span {
    color: blue;
    margin-left: 5px;
  }
`;

const Back = styled.div`
  color: lightgray;
`;
const Direction = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Next = styled(Link)`
  padding: 10px 10px;
  background-color: blue;
  display: flex;
  text-decoration:none;
  color: white
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  width: 80px;
  border: 0;
  outline: 0;
  font-size: small;
  margin-left: 5px;
  color: lightgray;
  cursor: pointer;
`;

const No = styled.div`
  display: flex;
  input {
    height: 15px;
    width: 15px;
    border: none;
    outline: 0;
    cursor: pointer;
  }
`;
const Flex = styled.div``;
const Not = styled.div`
  margin-left: 6px;
  color: lightgray;
`;
const Hold = styled.div`
  width: 100%;
  /* background-color: red; */
  flex-wrap: wrap;
`;
const D = styled.div`
  margin-bottom: 30px;
  color: blue;
`;

const Stacks = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
`;

const Full = styled.div`
  padding: 10px 10px;
  background-color: lightgray;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  border: 0;
  outline: 0;
  font-size: small;
  margin-left: 5px;
  color: white;
  cursor: pointer;
  margin-bottom: 20px;
  :hover {
    color: blue;
    background-color: white;
  }
`;

const Box1 = styled.div`
  width: 500px;
  height: 600px;
  /* background-color: pink; */
`;

const Box2 = styled.div`
  width: 500px;
  height: 600px;
  /* background-color: pink; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: ; */
  height: 100%;
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: whitesmoke;
`;
const Wrapper = styled.div`
  /* height: 500px; */
  /* background-color: red; */
  display: flex;
  width: 70%;
  justify-content: space-between;
  flex-wrap: wrap;
`;
