import moment from 'moment';
import React from 'react';
import styled from 'styled-components';
import JobDevProfile from './JobDevProfile';

const HiredCard = ({ props }) => {
  return (
    <SecondCard key={props._id}>
      <CardWrapper>
        {/* <Avatar
        size="md"
        name={``}
        mr={1}
        ml={5}
      /> */}
        {/* <AvatarAndName>
        <Circle>CE</Circle>
        <DeveloperName>Confidence Efem</DeveloperName>
      </AvatarAndName> */}
        <JobDevProfile dev={props?.developer} />
        <JobTitle>
          <span>Hired For:</span>
          {props.jobTitle}
        </JobTitle>
        <HiredDate>
          Hired: <span>{moment(props?.createdAt).fromNow()}</span>
        </HiredDate>
        <Amount>{props?.clientName}</Amount>

        {props?.acceptOffer ? (
          <PendingButton style={{ backgroundColor: '#3ddabe', color: 'black' }}>
            Offer Accepted
          </PendingButton>
        ) : (
          <PendingButton style={{ backgroundColor: '#3ddabe', color: 'black' }}>
            Offer Pending
          </PendingButton>
        )}

        {/* <PendingButton>View CV</PendingButton> */}
      </CardWrapper>
    </SecondCard>
  );
};

export default HiredCard;

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
const DeveloperName = styled.div`
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
