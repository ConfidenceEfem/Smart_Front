import React from 'react';
import styled from 'styled-components';
import avatar from './images/avatar.png';

const UserDelivered = () => {
  return (
    <Container>
      <Wrapper>
        <CardHolder>
          <Card>
            <CardWrapper>
              <Image src={avatar} />
              <Name>Odoma Website</Name>
              <Amount>$200</Amount>
              <Url>www.odomameet.com</Url>
              <Delivered bg>Delivered</Delivered>
            </CardWrapper>
          </Card>

          <Card>
            <CardWrapper>
              <Image src={avatar} />
              <Name>Google Meeet</Name>
              <Amount>$200</Amount>
              <Url>www.googlemeet.com</Url>
              <Delivered bg>Delivered</Delivered>
            </CardWrapper>
          </Card>
        </CardHolder>
      </Wrapper>
    </Container>
  );
};

export default UserDelivered;

const Delivered = styled.div`
  font-size: 14px;
  /* color: ${(cl) => (cl ? 'red' : 'blue')}; */
  color: blue;
  font-weight: 600;
`;

const Url = styled.div`
  margin: 0 70px;
  font-size: 15px;
  color: red;
  cursor: pointer;
`;

const Amount = styled.div`
  font-size: 17;
  font-weight: 800;
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin-right: 60px;
  font-style: italic;
`;

const Image = styled.img`
  height: 100%;
  width: 80px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 20px;
`;
const CardWrapper = styled.div`
  width: 95%;
  height: 80%;
  display: flex;
  align-items: center;
  /* justify-content: censpsacer; */
`;
const Card = styled.div`
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 800px;
  background-color: #fafcff;
  height: 100px;
  box-shadow: 1px 1px 1px lightgray;
`;

const CardHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  margin-top: 20px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
