import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router";
import styled from "styled-components";
import img from "../dash/images/avatar.png";
import ClientDetailComp from "./ClientDetail";

// import { AuthContext } from '../AuthState/AuthProvider';

const DevCard = ({ props }) => {
  console.log(props);

  // const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <Card
      onClick={() => {
        navigate(`/myprofile/${props._id}`);
      }}
    >
      {props?.image === "" ? (
        <Image src={img} alt="image" />
      ) : (
        <Image src={props?.image} alt="image" />
      )}

      <Title>
        <span>{props?.name}</span>
      </Title>
      <CardWrapper>
        <ClientDetailComp id={props?._id} />
        <Desc>{props?.bio}</Desc>

        <Button>Hire Now</Button>
      </CardWrapper>
    </Card>
  );
};

export default DevCard;

const Button = styled.div`
  padding: 10px 15px;
  font-size: 12px;
  margin-top: 20px;
  font-weight: 500;
  border-radius: 5px;
  color: white;
  background: blue;
  margin-bottom: 20px;
`;
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

const Desc = styled.div`
  width: 100%;
  font-size: 13px;
  text-align: center;
  font-weight: 450;
  margin-bottom: 10px;
  line-height: 20px;
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
  height: auto;
  /* background: red; */
  box-shadow: 1px 1px 1px lightgray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 15px;
  align-items: center;
  overflow: hidden;
  transition: all 350ms;
  cursor: pointer;
  font-family: poppins;
  position: relative;
  /* padding-bottom: 20px; */
  top: 0;
  :hover {
    transform: scale(1.01);
  }
  @media screen and (max-width: 425px) {
    margin-top: 30px;
  }
  @media screen and (max-width: 375px) {
    height: auto;
  }
  @media screen and (max-width: 320px) {
    height: auto;
  }
`;
