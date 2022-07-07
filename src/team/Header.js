import React, { useContext } from 'react';
import styled from 'styled-components';
import { HiOutlineBell } from 'react-icons/hi';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { BiUserCircle } from 'react-icons/bi';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../dash/images/logo11.png';
import img from '../dash/images/avatar.png';
import { AuthContext } from '../AuthState/AuthProvider';
import axios from 'axios';

const Header = () => {
  const { currentUser } = useContext(AuthContext);

  const [jobData, setJobData] = React.useState([]);

  const fetchData = async () => {
    const url = 'http://localhost:2023';
    const mainUrl = 'https://smart-2022.herokuapp.com';
    const res = await axios.get(`${url}/user/${currentUser?.data?._id}`);
    console.log(res);
    setJobData(res.data.data);
  };

  React.useEffect(() => {
    fetchData();
    // console.log(jobData);
  }, []);

  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <Navigation>
          <LogoDiv>
            <S>S</S>
            <Logo>mart</Logo>
          </LogoDiv>
          <Navs>
            <Nav to="/">Home</Nav>
            <Nav to="/jobs">Find jobs</Nav>
            <Nav to="/talent">Hire Talents</Nav>
          </Navs>
        </Navigation>
        {/* <Navigation> */}
        {currentUser?.token ? (
          <Btnhold>
            {' '}
            <Name>{jobData?.name}</Name>
            {jobData?.image === '' ? (
              <Avatar src={img} alt="avatar" />
            ) : (
              <Avatar src={jobData?.image} alt="avatar" />
            )}
            <DashButton
              onClick={() => {
                if (currentUser?.data?.isClient) {
                  navigate('/dash/overview');
                } else {
                  navigate('/dev/main');
                }
              }}
            >
              DashBoard
            </DashButton>
            <Logout
              onClick={() => {
                localStorage.removeItem('smartuser');
                window.location.reload();
              }}
            >
              Logout
            </Logout>
          </Btnhold>
        ) : (
          <Btnhold>
            <Btn1 to="/signin">Login</Btn1>
            <Btn2 to="/signup">Register</Btn2>
            <HiOutlineBell size={'30px'} cursor={'pointer'} />
          </Btnhold>
        )}

        <Icon2>
          <BiUserCircle size={'30px'} cursor={'pointer'} />
        </Icon2>
        <Icon>
          <IoReorderThreeOutline size={'30px'} cursor={'pointer'} />
        </Icon>
        {/* </Navigation> */}
      </Wrapper>
    </Container>
  );
};
export default Header;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  /* background: red; */
`;
const Name = styled.div`
  margin-right: 10px;
`;
const DashButton = styled.div`
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin: 0 20px;
  font-size: 15px;
  text-decoration: none;
  font-weight: bold;
  font-family: poppins;
  border: 0;
  border-radius: 5px;
  outline: none;
  color: white;
  background: #1967d2;
  cursor: pointer;
  :hover {
    transition: 350ms;
  }
`;
const Logout = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 15px;
  text-decoration: none;
  font-weight: bold;
  font-family: poppins;
  border: 0;
  border-radius: 5px;
  outline: none;
  color: white;
  background: red;
  cursor: pointer;
  :hover {
    transition: 350ms;
  }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
`;
const Container = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  font-family: poppins;
  /* position: fixed; */
  z-index: 10;
  background: white;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
`;

const S = styled.div`
  width: 50px;
  height: 60px;
  background-color: #1967d2;
  display: flex;
  border-radius: 13px;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 40px;
  color: white;
  font-family: hobo std;
  margin-right: 5px;
`;
const Logo = styled.div`
  /* width: 100%; */
  font-weight: 450;
  font-size: 20px;
  span {
    width: 40px;
    height: 100px;
  }
`;
const Navs = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  /* background: red; */

  @media screen and (max-width: 768px) {
    display: none;
  }

  /* background: white; */
`;
const Nav = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  /* color: #1967d2; */
  color: black;
  margin: 0 17px;
  cursor: pointer;
  font-family: poppins;
`;
const LogoDiv = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  /* height: 50px; */
`;
const Btnhold = styled.div`
  display: flex;
  /* background: red; */
  align-items: center;
  /* background: blue; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Btn1 = styled(Link)`
  text-decoration: none;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  color: #363e51;
  margin-right: 10px;
  border-radius: 5px;
  font-family: poppins;
  outline: none;
  font-size: 15px;
  font-weight: bold;
  transition: 350ms;
  cursor: pointer;
  :hover {
    transform: scale(0.95);
  }
`;
const Btn2 = styled(NavLink)`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-size: 15px;
  text-decoration: none;
  margin: 0 20px;
  font-weight: bold;
  font-family: poppins;
  border: 0;
  border-radius: 5px;
  outline: none;
  color: white;
  background: #1967d2;
  cursor: pointer;
  :hover {
    background: darkblue;
    transition: 350ms;
  }
`;

const Icon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const Icon2 = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    margin-right: 7px;
  }
`;
