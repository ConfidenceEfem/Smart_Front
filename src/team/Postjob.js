import React from "react";
import styled from "styled-components";
import { GoPerson } from "react-icons/go";
import { BiTask } from "react-icons/bi";

const Postjob = () => {
  return (
    <Container>
      <Wrapper>
        <HeadText>
          <Icon />
          <Text1>Company Name</Text1>
        </HeadText>
        <ImageHold>
          <Image src="boy.png" alt="photo related to project" />
        </ImageHold>
        <Text2>
          <Icon1 />
          Job post
        </Text2>
        <Distk>Job Discription</Distk>
        <Joint>
          <Expre>Years of Experience</Expre>
          <Loc>Location</Loc>
        </Joint>
      </Wrapper>
    </Container>
  );
};
export default Postjob;

const Loc = styled.div`
  font-size: 17px;
  font-weight: 500;
  /* background-color: blue; */
  padding: 10px 20px;
`;
const Expre = styled.div`
  font-size: 17px;
  font-weight: 500;
  margin-left: -40px;
  /* background-color: green; */

  padding: 10px 10px;
`;
const Joint = styled.div`
  width: 90%;
  margin-top: 10px;
  padding: 20px 10px;
  /* background-color: red; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Distk = styled.div`
  width: 350px;
  /* height: 78px; */
  padding: 20px 10px;
  /* background-color: red; */
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  margin-left: 15px;
  margin-top: 7px;
`;
const Icon1 = styled(BiTask)`
  margin-right: 5px;
  font-size: 20px;
`;
const Text2 = styled.div`
  width: 90%;
  height: 50px;
  margin-top: 8px;
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-left: 15px;

  /* background: red; */
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ImageHold = styled.div`
  width: 100%;
  height: 250px;
  /* background-color: grey; */
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
`;
const Text1 = styled.div`
  font-size: 17px;
  font-family: poppins;
  font-weight: 500;
  margin-left: 5px;
`;
const Icon = styled(GoPerson)`
  font-size: 25px;
`;
const HeadText = styled.div`
  width: 90%;
  height: 75px;
  margin-left: 15px;
  /* background: red; */
  font-size: 20px;
  font-family: poppins;
  font-weight: 600;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 400px;
  height: 550px;
  /* background-color: lightgrey; */
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
`;
