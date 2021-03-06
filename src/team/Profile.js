import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import {
  AiFillFacebook,
  AiOutlineGithub,
  AiFillLinkedin,
} from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import img from '../dash/images/avatar.png';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthState/AuthProvider';

import Header from './Header';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { id } = useParams();

  // const { currentUser } = useContext(AuthContext);

  const selector = useSelector((state) => state.persistedReducer.current.data);

  const navigate = useNavigate();

  const [data, setData] = React.useState([]);
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:2023';
      const mainUrl = 'https://smart-2022.herokuapp.com';
      try {
        const res = await axios.get(`${mainUrl}/user/${id}`);
        console.log(res?.data?.data);
        setData(res?.data?.data);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Unable to get Data',
          timer: 2500,
          showConfirmButton: false,
        });
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Con>
        <Header />
        <Wrap1>
          <Hol>
            <Hold>
              {data?.image === '' ? (
                <Card1>
                  <img src={img} />
                </Card1>
              ) : (
                <Card1>
                  <img src={data?.image} />
                </Card1>
              )}
              <Card2>
                <Name>{data?.name}</Name>
                <Stack>{data?.stack}</Stack>
                <Icons>
                  <Cir>
                    <AiFillFacebook />
                  </Cir>
                  <Cir>
                    <AiOutlineGithub />
                  </Cir>
                  <Cir>
                    <AiFillLinkedin />
                  </Cir>
                </Icons>
              </Card2>
            </Hold>
          </Hol>

          <Hold2>
            <B>
              <AHold>
                <About>
                  About <span>Me</span>
                </About>
                <Detail>{data?.bio}</Detail>

                <ButHold>
                  <But
                    onClick={() => {
                      if (selector?.isDeveloper) {
                        navigate(`/myprofile/${id}`);
                        // console.log('bad');
                      } else if (selector?.isClient) {
                        navigate(`/dash/form/${data?._id}`);
                        // console.log('good');
                      } else {
                        navigate('/');
                      }
                    }}
                  >
                    Hire Me
                  </But>
                </ButHold>
              </AHold>

              <Descrip>
                <First>
                  <AgeHold>
                    <A>Experience</A>
                  </AgeHold>
                  <AgeHold>
                    <A>Location</A>
                  </AgeHold>

                  <AgeHold>
                    <A>E-mail</A>
                  </AgeHold>
                </First>

                <Second>
                  <A1>
                    <Num>{data?.experience}</Num>
                  </A1>
                  <A1>
                    <Num>lagos nigeria</Num>
                  </A1>

                  <A1>
                    <Num href="mailto:anoziechiderasilverlin@gmail.com">
                      {data?.email}
                    </Num>
                  </A1>
                </Second>
              </Descrip>
            </B>
          </Hold2>
        </Wrap1>
      </Con>
    </>
  );
};

export default Profile;
const ButHold = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const First = styled.div``;
const A1 = styled.div`
  display: flex;
  /* background-color: red; */
  margin-bottom: 10px;
  margin-left: 30px;
`;

const Second = styled.div``;

const But = styled.div`
  height: 50px;
  width: 150px;
  cursor: pointer;
  border-radius: 5px;
  background-color: blue;
  color: white;
  font-family: poppins;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;
  :hover {
    transform: scale(1.02);
  }
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    width: 140px;
    height: 40px;
  }
`;

const Descrip = styled.div`
  width: 300px;
  /* background-color: pink; */
  display: flex;

  @media screen and (max-width: 1150px) {
    margin-top: 30px;
    width: 75%;
  }
`;
const AgeHold = styled.div`
  display: flex;
  /* background-color: red; */
  margin-bottom: 10px;
`;

const A = styled.div`
  font-family: poppins;
  font-size: 15px;

  @media screen and (max-width: 430px) {
    font-size: 12px;
  }
`;

const Num = styled.div`
  /* font-family: poppins; */
  font-size: 15px;
  margin-left: 20px;
  font-weight: 600;

  @media screen and (max-width: 430px) {
    font-size: 12px;
  }
`;

const Hold2 = styled.div`
  margin-top: 80px;
  /* background-color: red; */
  width: 100%;
  display: flex;
  justify-content: center;
  /* padding-left: 20px;
padding-right: 20px; */

  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`;
const About = styled.div`
  font-family: poppins;
  font-size: 25px;

  span {
    color: darkblue;
    font-family: poppins;
    font-size: 25px;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const AHold = styled.div`
  width: 400px;
  /* background-color: pink; */

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Detail = styled.div`
  font-family: poppins;
  font-size: 13px;
  margin-top: 10px;
  font-weight: 100;

  @media screen and (max-width: 768px) {
    text-align: center;
    padding-left: 15px;
    padding-right: 15px;
  }
  @media screen and (max-width: 430px) {
    font-size: 9px;
  }
`;

const B = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background-color: blue; */
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Con = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  /* padding-bottom: 70px; */
`;
const Card1 = styled.div`
  height: 300px;
  width: 300px;
  background-color: pink;
  border: solid 2px white;
  margin-bottom: -90px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: all 350ms;
  border-radius: 5px;

  img {
    height: 300px;
    width: 300px;
    background-color: pink;
    border: solid 2px white;
    margin-bottom: -90px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: all 350ms;
    border-radius: 5px;
    object-fit: cover;
  }
  /* transform: scale(1.12); */

  @media screen and (max-width: 1150px) {
    margin-bottom: 20px;
    height: 250px;
    width: 250px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    height: 250px;
    width: 250px;
  }
  @media screen and (max-width: 430px) {
    height: 150px;
    width: 150px;
  }
`;
const Card2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: red; */
`;
const Name = styled.div`
  font-family: poppins;
  color: white;
  font-size: 45px;
  margin-bottom: 15px;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 45px;
  }
  @media screen and (max-width: 430px) {
    width: 100%;
    font-size: 30px;
  }
  @media screen and (max-width: 320px) {
    width: 100%;
    font-size: 25px;
  }
`;
const Stack = styled.div`
  font-family: poppins;
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 10px;
  color: white;
`;
const Icons = styled.div`
  display: flex;
  /* width: 100%; */
`;
const Cir = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
  margin: 5px;
  color: blue;
`;

const Wrap1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-top: 50px;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  border-radius: 20px;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }

  @media screen and (max-width: 430px) {
    width: 80%;
  }
`;
const Hold = styled.div`
  width: 80%;
  background-color: darkblue;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    padding-bottom: 20px;
    /* width: 100%; */
  }
`;
const Hol = styled.div`
  background-color: darkblue;
  border-radius: 20px 20px 0px 0px;
  width: 100%;
  display: flex;
  /* height: auto; */
  justify-content: center;
  align-items: center;
`;
