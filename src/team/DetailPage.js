import React from "react";
import styled from "styled-components";
import { BiCurrentLocation } from "react-icons/bi";
import { FaUserCircle, FaMoneyBillAlt } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";

const DetailPage = () => {
  return (
    <Container>
      <HeadHold>
        <IconTextHold>
          <IconHold>
            <Icon />
          </IconHold>
          <TextHold>
            <BoldText>Junior Graphic Designer</BoldText>
            <LightText>
              <Itext1>
                <Icon1 />
                <Text1>Design, Development</Text1>
              </Itext1>
              <Itext1>
                <Icon1 />
                <Text1>New york</Text1>
              </Itext1>
              <Itext1>
                <Icon1 />
                <Text1>june 20,2022</Text1>
              </Itext1>
              <Itext1>
                <Icon1 />
                <Text1>$150 / Week</Text1>
              </Itext1>
            </LightText>
            <Button>Full Time</Button>
          </TextHold>
        </IconTextHold>
        <TextBtnHold>
          <RunTime>
            Application ends: <span>May 18, 2026</span>
          </RunTime>
          <BtnBig>Apply Now</BtnBig>
        </TextBtnHold>
      </HeadHold>
      <JobText>
        <JobHeadText>Job Overview</JobHeadText>
        <JobIconpackHold>
          <JobIconpack>
            <JobIcon />
            <JobTextDetail>
              <Detail1>Data Posted</Detail1>
              <Detail2>June 20, 2022</Detail2>
            </JobTextDetail>
          </JobIconpack>
          <JobIconpack>
            <JobIcon1 />
            <JobTextDetail>
              <Detail1>Location</Detail1>
              <Detail2>Nigeria</Detail2>
            </JobTextDetail>
          </JobIconpack>
          <JobIconpack>
            <JobIcon2 />
            <JobTextDetail>
              <Detail1>Offered Salary</Detail1>
              <Detail2>$150 / week2</Detail2>
            </JobTextDetail>
          </JobIconpack>
          <JobIconpack>
            <JobIcon />
            <JobTextDetail>
              <Detail1>Data Posted</Detail1>
              <Detail2>June 20, 2022</Detail2>
            </JobTextDetail>
          </JobIconpack>
          <JobIconpack>
            <JobIcon />
            <JobTextDetail>
              <Detail1>Data Posted</Detail1>
              <Detail2>June 20, 2022</Detail2>
            </JobTextDetail>
          </JobIconpack>
          <JobIconpack>
            <JobIcon />
            <JobTextDetail>
              <Detail1>Data Posted</Detail1>
              <Detail2>June 20, 2022</Detail2>
            </JobTextDetail>
          </JobIconpack>
          <JobIconpack>
            <JobIcon />
            <JobTextDetail>
              <Detail1>Data Posted</Detail1>
              <Detail2>June 20, 2022</Detail2>
            </JobTextDetail>
          </JobIconpack>
          <JobIconpack>
            <JobIcon />
            <JobTextDetail>
              <Detail1>Data Posted</Detail1>
              <Detail2>June 20, 2022</Detail2>
            </JobTextDetail>
          </JobIconpack>
        </JobIconpackHold>
      </JobText>
      <Disc>
        <HeadDiscText>Job Description</HeadDiscText>
        <Discription>
          As a Product Designer, you will work within a Product Delivery Team
          fused with UX, engineering, product and data talent. You will help the
          team design beautiful interfaces that solve business challenges for
          our clients. We work with a number of Tier 1 banks on building
          web-based applications for AML, KYC and Sanctions List management
          workflows
        </Discription>
      </Disc>
    </Container>
  );
};

export default DetailPage;

const Discription = styled.div`
  font-size: 20px;
  width: 650px;
  text-align: center;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
  @media screen and (max-width: 425px) {
    font-size: 17px;
    text-align: center;
    width: 400px;
  }
  @media screen and (max-width: 375px) {
    font-size: 15px;
    text-align: center;
    width: 330px;
  }
  @media screen and (max-width: 320px) {
    font-size: 15px;
    text-align: center;
    width: 280px;
  }
`;
const HeadDiscText = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 5px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 320px) {
    font-size: 17px;
  }
`;
const Disc = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;
const JobIconpackHold = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /* flex-direction: column; */
`;
const Detail2 = styled.div`
  font-size: 17px;
  color: grey;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
const Detail1 = styled.div`
  font-size: 17px;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
const JobTextDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const JobIconpack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 15px;
`;
const JobHeadText = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;
const JobIcon = styled(FaUserCircle)`
  font-size: 35px;
  color: blue;
  margin-right: 10px;
`;
const JobIcon2 = styled(FaMoneyBillAlt)`
  font-size: 35px;
  color: blue;
  margin-right: 10px;
`;
const JobIcon1 = styled(BiCurrentLocation)`
  font-size: 35px;
  color: blue;
  margin-right: 10px;
`;
const JobText = styled.div`
  height: 170px;
  width: 900px;
  /* background: red; */
  padding: 15px 15px 30px 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: auto;
    height: auto;
  }
`;
const BtnBig = styled.div`
  width: 200px;
  height: 40px;
  background: blue;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 7px;
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 768px) {
    width: 170px;
    height: 35px;
  }
`;
const RunTime = styled.div`
  margin-bottom: 7px;
  font-size: 17px;
  font-weight: 500;
  span {
    font-size: 17px;
    font-weight: 700;
    color: red;
    @media screen and (max-width: 768px) {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
const TextBtnHold = styled.div`
  height: 200px;
  width: 400px;
  flex-direction: column;
  /* background: lightgoldenrodyellow; */
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 425px) {
    margin-top: -30px;
  }
`;

const Button = styled.div`
  width: 110px;
  height: 27px;
  background: red;
  color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-size: 15px;
`;
const Text1 = styled.div`
  font-size: 17px;
  color: grey;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Icon1 = styled(FaUserCircle)`
  font-size: 20px;
  color: grey;
  margin-right: 7px;
`;
const Itext1 = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;
  @media screen and (max-width: 768px) {
    margin: 5px 5px;
  }
`;
const LightText = styled.div`
  display: flex;
  margin: 5px 0 0 0;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;
const BoldText = styled.div`
  font-size: 30px;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-left: 5px;
  }
  @media screen and (max-width: 320px) {
    text-align: center;
  }
`;
const Icon = styled(FaUserCircle)`
  font-size: 60px;
  color: white;
`;
const TextHold = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    width: 300px;

    /* background: blue; */
  }
  @media screen and (max-width: 375px) {
    align-items: center;
  }
  @media screen and (max-width: 320px) {
    align-items: center;
  }
`;
const IconHold = styled.div`
  width: 110px;
  height: 110px;
  background: blue;
  border-radius: 10px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
  @media screen and (max-width: 375px) {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 320px) {
    margin-bottom: 10px;
  }
`;
const IconTextHold = styled.div`
  width: 800px;
  height: 200px;
  /* background: grey; */
  display: flex;
  align-items: center;
  /* box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset; */
  @media screen and (max-width: 1024px) {
    margin-left: 15px;
  }
  @media screen and (max-width: 768px) {
    width: 600px;
    margin-left: 10px;
  }
  @media screen and (max-width: 425px) {
    width: 97%;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
    flex-direction: column;
    height: 500px;
    /* margin: 0; */
    overflow: hidden;
    margin-top: 10px;
  }
`;
const HeadHold = styled.div`
  width: 100%;
  height: 300px;
  background: lightblue;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  justify-content: space-around;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    /* flex-wrap: wrap; */
    flex-direction: column;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
    height: 350px;
    overflow: hidden;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
  flex-direction: column;

  @media screen and (max-width: 768px) {
  }
`;
