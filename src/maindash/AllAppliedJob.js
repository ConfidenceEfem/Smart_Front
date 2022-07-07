import React from 'react';
import styled from 'styled-components';
import Header from '../team/Header';
import DashHeader from './DashHeader';
import DashNav from './DashNav';

const AllAppliedJob = () => {
  return (
    <Container>
      {/* <DashHeader /> */}
      <Header />
      <NavAndPageHolder>
        <DashNav />
        <DashComp>
          <DashWrapper>
            <SecondCard>
              <CardWrapper>
                {/* <Avatar
                  size="md"
                  name={``}
                  mr={1}
                  ml={5}
                /> */}
                <AvatarAndName>
                  <Circle>CE</Circle>
                  <ClientName>Confidence Efem</ClientName>
                </AvatarAndName>
                <JobTitle>
                  <span>Applied For:</span>FrontEnd Engineerer
                </JobTitle>
                <HiredDate>
                  Applied: <span>2 days ago</span>
                </HiredDate>
                <Amount>confidenceefem@gmail.com</Amount>

                {/* <PendingButton
                  style={{ backgroundColor: '#3ddabe', color: 'black' }}
                >
                  Hired
                </PendingButton> */}

                <PendingButton>View CV</PendingButton>
              </CardWrapper>
            </SecondCard>
          </DashWrapper>
        </DashComp>
      </NavAndPageHolder>
    </Container>
  );
};

export default AllAppliedJob;

const CardWrapper = styled.div`
  width: 97%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;
const PendingButton = styled.div`
  padding: 10px 15px;
  border-radius: 30px;
  background: red;
  font-size: 12px;
  color: white;
`;
const HiredDate = styled.div`
  display: flex;
  font-size: 13px;
  font-weight: 600;
`;
const Amount = styled.div`
  display: flex;
  font-weight: 600;
  color: red;
  font-size: 12px;
`;
const JobTitle = styled.div`
  font-weight: 600;
  color: blue;
  display: flex;
  align-items: center;
  /* flex: 2; */
  span {
    color: black;
    font-size: 12px;
    margin-right: 5px;
  }
`;
const ClientName = styled.div`
  font-weight: 600;

  display: flex;
  /* flex: 1; */
`;

const AvatarAndName = styled.div`
  display: flex;
  align-items: center;
`;
const SecondCard = styled.div`
  width: 93%;
  display: flex;
  margin: 20px 0;
  align-items: center;
  background: white;
  /* margin-left: 20px; */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  min-height: 80px;
  height: 100%auto;
  justify-content: center;
`;

const DashWrapper = styled.div`
  width: 92%;
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
`;
const DashComp = styled.div`
  width: calc(100vw - 350px);
  height: 100%;
  display: flex;
  align-items: center;

  flex-direction: column;
`;

const NavAndPageHolder = styled.div`
  display: flex;
  background-color: #fafcff;
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
