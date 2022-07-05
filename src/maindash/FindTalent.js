import React from 'react';
import styled from 'styled-components';
import DashHeader from './DashHeader';
import DashNav from './DashNav';
import img from '../dash/images/avatar.png';

const FindTalent = () => {
  return (
    <Container>
      <DashHeader />
      <NavAndPageHolder>
        <DashNav />
        <DashComp>
          <DashWrapper>
            <Card
              onClick={() => {
                // navigate(`/details`);
              }}
            >
              <Image src={img} />
              <CardWrapper>
                <Title>Frontend Engineer</Title>
                <Desc>
                  I am a Frontend Developer. I have worked with countless
                  companies
                </Desc>
                <Button>Hire Confidence</Button>
              </CardWrapper>
            </Card>
          </DashWrapper>
        </DashComp>
      </NavAndPageHolder>
    </Container>
  );
};

export default FindTalent;

const Button = styled.div`
  font-size: 13px;
  width: 130px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background: blue;
  /* text-transform: uppercase; */
  color: white;
  font-weight: 500;
  display: flex;
`;
const Desc = styled.div`
  font-size: 13px;
  font-weight: 450;
  margin-bottom: 10px;
  text-align: center;
`;
const Title = styled.div`
  font-size: 15px;
  font-weight: 600;
  /* text-transform: uppercase; */
  margin: 7px 0;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 140px;
`;
const Card = styled.div`
  width: 240px;
  height: 280px;
  display: flex;
  margin: 10px;
  overflow: hidden;
  flex-direction: column;
  border-radius: 5px;
  align-items: center;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: all 350ms;
  cursor: pointer;
  :hover {
    transform: scale(1.01);
  }
`;
const CardHolder = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const DashWrapper = styled.div`
  width: 92%;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;
const DashComp = styled.div`
  width: calc(100vw - 350px);
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #fafcff;
  flex-direction: column;
`;

const NavAndPageHolder = styled.div`
  display: flex;
  min-height: calc(100vh - 90px);
`;
const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  /* align-items: flex-end; */

  /* min-height: 100vh; */
  justify-content: space-between;
  height: 100%;
`;
