import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaUserCircle, FaMoneyBillAlt } from 'react-icons/fa';
import { MdOutlineWork } from 'react-icons/md';
import { BiCurrentLocation } from 'react-icons/bi';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { AuthContext } from '../AuthState/AuthProvider';

const Card = () => {
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [jobData, setJobData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:2023';
      const mainUrl = 'https://smart-2022.herokuapp.com';
      await axios
        .get(`${url}/alljobs`)
        .then((result) => {
          console.log(result?.data?.data);
          setJobData(result?.data?.data);
        })
        .catch((erro) => {
          console.log(erro);
        });
    };

    fetchData();
  }, []);

  return (
    <Container>
      {' '}
      <ContWrapper>
        <TextHolder>
          <TextHeading>Popular Job Categories</TextHeading>
          <SubDetail>Find the best Job on Our Platform</SubDetail>
        </TextHolder>
        <Wrapper>
          {jobData.map((props) => (
            <Carder
              key={props._id}
              onClick={() => {
                if (currentUser?.data?.isDeveloper) {
                  navigate(`/dev/applyform/${props._id}`);
                }
              }}
            >
              <Holder>
                <IconHold>
                  <Icon>
                    <FaUserCircle size="35px" />
                  </Icon>
                </IconHold>
                <TextHold>
                  <BoldText>{props?.jobTitle}</BoldText>
                  <LightText>
                    <IconText>
                      <Icon1></Icon1>
                      <Text1>{props.skillSet},</Text1>
                    </IconText>

                    <IconText1>
                      <Icon3></Icon3>
                      <Text1>N{props?.cost}/ day</Text1>
                    </IconText1>
                  </LightText>
                  <Btn>Full Time</Btn>
                </TextHold>
              </Holder>
            </Carder>
          ))}
        </Wrapper>
      </ContWrapper>
    </Container>
  );
};

export default Card;

const SubDetail = styled.div`
  margin-top: 10px;
  font-size: 14px;
`;

const ContWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* margin-top: 20px; */
  /* margin: 30px 0; */
  width: 90%;
`;
const TextHeading = styled.div`
  font-size: 30px;
  font-weight: 600;
`;
const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Btn = styled.div`
  width: 100px;
  height: 50px;
  background: lightblue;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  font-size: 16px;
  color: blue;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    margin: 7px 0 0 0;
  }
  @media screen and (max-width: 425px) {
    margin: -5px 0 0 0;
  }
  @media screen and (max-width: 375px) {
    margin: -1px 0 0 0;
  }
`;
const Text1 = styled.div`
  font-size: 15px;
  color: grey;
  margin-left: 10px;
  /* flex-wrap: wrap; */
`;
const IconText = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-left: 9px;
    margin-bottom: 3px;
  }
`;
const IconText1 = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    margin-bottom: 3.5px;
  }
`;
const LightText = styled.div`
  display: flex;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    margin-top: -1px;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
  }
  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
    margin-top: 5px;
  }
  @media screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    margin-top: -1px;
  }
`;
const BoldText = styled.div`
  font-size: 20px;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    font-size: 17px;
    margin-bottom: 7px;
  }
`;
const TextHold = styled.div`
  width: auto;
  /* width: 364px; */
  height: 100%;
  /* background: lightcyan; */
  margin-left: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 250px;
  }
  @media screen and (max-width: 425px) {
    width: 280px;
  }
  @media screen and (max-width: 375px) {
    width: 240px;
  }
`;
const Icon = styled.div`
  width: 70%;
  height: 70%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon1 = styled(MdOutlineWork)`
  font-size: 20px;
  color: grey;
`;
const Icon2 = styled(BiCurrentLocation)`
  font-size: 20px;
  color: grey;
`;
const Icon3 = styled(FaMoneyBillAlt)`
  font-size: 20px;
  color: grey;
`;
const IconHold = styled.div`
  width: 70px;
  height: 70px;
  background: red;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;
const Holder = styled.div`
  width: auto;
  height: 90px;
  /* background: grey; */
  margin-left: 20px;
  margin-right: 20px;
  margin-top: -15px;
  display: flex;
  @media screen and (max-width: 768px) {
    width: 320px;
    margin-top: -50px;
  }
  @media screen and (max-width: 425px) {
    width: 370px;
    margin-top: -25px;
  }
  @media screen and (max-width: 375px) {
    width: 333px;
    margin-top: -50px;
  }
  @media screen and (max-width: 320px) {
    width: 270px;
    /* margin-top: -50px; */
  }
`;
const Carder = styled.div`
  width: auto;
  height: 150px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 10px;
  display: flex;
  margin: 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 350ms;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
  }
  @media screen and (max-width: 1024px) {
    width: 470px;
    margin: 9px 0;
  }
  @media screen and (max-width: 768px) {
    width: 350px;
    height: 170px;
  }
  @media screen and (max-width: 425px) {
    width: 500px;
    height: 150px;
  }
  @media screen and (max-width: 375px) {
    width: 365px;
    height: 180px;
  }
  @media screen and (max-width: 320px) {
    width: 340px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  /* height: 100%; */
  /* height: 70px; */
  /* background: red; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* background: lightgray; */
  @media screen and (max-width: 1024px) {
    width: 95%;
  }
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;
const Container = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  /* margin-top: 30px; */
  justify-content: center;
  font-family: poppins;
`;
