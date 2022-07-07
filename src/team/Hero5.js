import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import img from '../dash/images/avatar.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../AuthState/AuthProvider';
import ClientDetailComp from './ClientDetail';
const Hero5 = () => {
  const [data, setData] = useState([]);

  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const fetchData = async () => {
    const url = 'http://localhost:2023';
    const mainUrl = 'https://smart-2022.herokuapp.com';
    const res = await axios.get(`${url}/allusers`);
    setData(res.data.data);
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);
  return (
    <Container>
      <Wrapper>
        <HeadText>Hire a Programmer for any project</HeadText>
        <ProfileHold>
          {data.map((props, i) =>
            i < 2 && props.isDeveloper ? (
              // <ProfileCard to={`/myprofile/${props._id}`} key={props._id}>
              //   <ImgHold>
              //     <img src={props.image} alt="loading" />
              //   </ImgHold>
              //   <TextHold>
              //     <SmallTextHold>
              //       <BoldText>{props.name}</BoldText>
              //       <LightText>{props?.stack}</LightText>
              //     </SmallTextHold>
              //     <Discription>{props.description}</Discription>
              //     {/* <HireText>
              //       <IconText>
              //         <Icon />
              //         <Write>HIRE ME</Write>
              //       </IconText>
              //     </HireText> */}
              //     {/* <But>
              //       <Hire to="/send">Hire Me</Hire>
              //       <Cont to="/send">Contact Me</Cont>
              //     </But> */}
              //   </TextHold>
              // </ProfileCard>
              <Card
                onClick={() => {
                  if (currentUser?.data?.isDeveloper) {
                    navigate(`/talent`);
                    console.log('bad');
                  } else if (currentUser?.data?.isClient) {
                    navigate(`/myprofile/${props._id}`);
                    console.log('good');
                  } else {
                    navigate('/');
                  }
                }}
              >
                {props.image === '' ? (
                  <Image src={img} alt="image" />
                ) : (
                  <Image src={props?.image} alt="image" />
                )}

                <Title>
                  <span>{props.name}</span>
                </Title>
                <CardWrapper>
                  <ClientDetailComp id={props.user} />
                  <Desc>
                    Hello World are you doing and i am doing fine always good
                    but
                  </Desc>
                  <Stack>
                    <span>Stack:</span>
                    React, Node, MongodDB
                  </Stack>{' '}
                  <Experience>
                    <span>Experience:</span>2 Years
                  </Experience>
                  <AmountAndEmail>
                    <Email>confidenceefem1@gmail.com</Email>
                    <Amount>$5000</Amount>
                  </AmountAndEmail>
                  <Button>Hire Now</Button>
                </CardWrapper>
              </Card>
            ) : null
          )}
        </ProfileHold>
      </Wrapper>
    </Container>
  );
};

export default Hero5;

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
  font-weight: 500;
  margin-bottom: 10px;
  line-height: 20px;
`;
const Company = styled.div`
  font-size: 13px;
`;
const ClientName = styled.div`
  font-weight: 600;
  font-size: 14px;
`;
const ClientNameAndCompany = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const ClientImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const ClientDetail = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 15px 0;
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
  height: 440px;
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
  position: relative;
  /* padding-bottom: 20px; */
  top: 0;
  :hover {
    transform: scale(1.01);
  }
`;

const MainContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const Hold = styled.div`
  width: 90%;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`;

// const Cont = styled(Link)`
//   height: 40px;
//   width: 150px;
//   text-decoration: none;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   /* background-color: green; */
//   border: 1px solid gray;
//   border-radius: 5px;
//   font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
//     'Lucida Sans', Arial, sans-serif;
//   cursor: pointer;

//   :active {
//     background-color: green;
//   }
// `;

// const Hire = styled(Link)`
//   height: 40px;
//   width: 150px;
//   display: flex;
//   color: white;
//   justify-content: center;
//   align-items: center;
//   background-color: #1967d2;
//   border-radius: 5px;
//   font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
//     'Lucida Sans', Arial, sans-serif;
// `;

// const But = styled.div`
//   padding: 40px 0px;
//   display: flex;
//   justify-content: space-between;
//   width: 85%;
// `;

// const Write = styled.div`
//   font-size: 15px;
//   font-weight: 600;
//   font-family: poppins;
//   margin-left: 5px;
// `;
// const Icon = styled(AiFillStar)`
//   font-size: 20px;
//   margin-left: 10px;
// `;
// const IconText = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: 15px;
// `;
// const HireText = styled.div`
//   width: 95%;
//   height: 100px;
//   display: flex;
//   flex-direction: column;
// `;
// const Discription = styled.div`
//   height: 120px;
//   width: 90%;
//   color: grey;
//   line-height: 25px;
//   font-size: 16px;
//   font-family: poppins;
//   font-weight: 600;
//   text-align: flex-start;
//   margin-left: 10px;
// `;
// const LightText = styled.div`
//   font-size: 15px;
//   font-family: poppins;
//   font-weight: 600;
//   color: grey;
//   text-transform: Capitalize;
//   margin-top: 8px;
//   margin-left: 10px;
// `;
// const BoldText = styled.div`
//   font-size: 19px;
//   font-family: poppins;
//   font-weight: 700;
//   margin-left: 10px;
// `;
// const SmallTextHold = styled.div`
//   width: 95%;
//   height: 70px;
//   margin-top: 10px;
//   /* background-color: green; */
// `;
// const TextHold = styled.div`
//   width: 100%;
//   height: 310px;
//   display: flex;
//   /* background: red; */
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// `;
// const ImgHold = styled.div`
//   height: 220px;
//   width: 100%;
//   background: white;
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;
// const ProfileCard = styled(Link)`
//   width: 350px;
//   height: 480px;
//   background: white;
//   text-decoration: none;
//   box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
//     rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
//   display: flex;
//   flex-direction: column;
//   border-radius: 10px;
//   margin: 25px;
//   :hover {
//     transform: scale(1.01);
//   }
// `;
const ProfileHold = styled.div`
  width: 100%;
  /* height: 600px; */
  /* background: grey; */
  display: flex;
  /* justify-content: space-around; */
  flex-wrap: wrap;
  align-items: center;
`;
const HeadText = styled.div`
  width: 100%;
  height: 90px;
  /* background: red; */
  font-size: 20px;
  font-weight: 700;
  font-family: poppins;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  /* background: aquamarine; */
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: aquamarine; */
`;
