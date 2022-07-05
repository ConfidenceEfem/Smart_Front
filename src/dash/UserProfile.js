import React, { useState } from 'react';
import styled from 'styled-components';

import { FaGithub, FaFileSignature } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import avatar from './images/avatar.png';

const DetailScreen = () => {
  const [post, setPost] = useState(true);
  const [video, setVideo] = useState(false);
  const [save, setSave] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Top>
          <Image src={avatar} />
          <Contents>
            <NameDetails>
              <ProfileName>samuel Olorunda</ProfileName>
              <EditButton
              //   to="/edit"
              >
                Edit Profile
              </EditButton>
              <Icon />
            </NameDetails>

            <Detail>
              <Name>Dev sam</Name>
              <Bio>
                senior developer, i code, i design and i pitch ideas...tech
                activist
              </Bio>
              <WebSite href="#">SmartDev.com</WebSite>
            </Detail>
          </Contents>
        </Top>

        <Nav>
          <NavHolder>
            <NavHolder
              bg={post ? 'bg' : ''}
              onClick={() => {
                setPost(true);
                setVideo(false);
                setSave(false);
              }}
            >
              <Count>{0}</Count>
              <Title>Posts</Title>
            </NavHolder>
            <NavHolder
              bg={video ? 'bg' : ''}
              onClick={() => {
                setPost(false);
                setVideo(true);
                setSave(false);
              }}
            >
              <Count>{0}</Count>
              <Title>Ratings</Title>
            </NavHolder>
            <NavHolder
              bg={save ? 'bg' : ''}
              onClick={() => {
                setPost(false);
                setVideo(false);
                setSave(true);
              }}
            >
              <Count>{0}</Count>
              <Title>Following</Title>
            </NavHolder>
          </NavHolder>
        </Nav>

        <Info>
          <AboutHold>
            <About>
              About <span></span>
            </About>
            <AboutInput>
              senior developer, i code, i design and i pitch ideas...tech
              activist a full stack developer with a bachelor degree in computer
              science
            </AboutInput>
          </AboutHold>

          <StackHold>
            <About>
              Stack <span></span>
            </About>
            <Holder>
              <Full>Full stack developer</Full>
            </Holder>
          </StackHold>

          <LinkHold>
            <Links>
              Links <span></span>
            </Links>
            <Hold>
              <Icon1 />
              <Des>
                Github : <span></span>
              </Des>
              <a href="https://github.com/Anozieluciana/social-Backend">
                {' '}
                https://github.com/Anozieluciana/social-Backend
              </a>
            </Hold>
            <Hold>
              <Icon2 />
              <Des>
                linkden : <span></span>
              </Des>
              <a href="https://github.com/Anozieluciana/social-Backend">
                {' '}
                https://github.com/Anozieluciana/social-Backend
              </a>
            </Hold>
            <Hold>
              <Icon3 />
              <Des>
                Portfolio : <span></span>
              </Des>
              <a href="https://github.com/Anozieluciana/social-Backend">
                {' '}
                https://github.com/Anozieluciana/social-Backend
              </a>
            </Hold>
          </LinkHold>

          <StackHold>
            <About1>
              Projects <span></span>
            </About1>
            <Holder>
              <Stack1>.</Stack1>
              <Full>developed link</Full>
            </Holder>
          </StackHold>

          <Save>
            <But1>Hire Now</But1>
            <But1>Contact Us</But1>
          </Save>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default DetailScreen;
const Save = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 40px;
`;
const But1 = styled.div`
  height: 50px;
  width: 150px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: blue;
  color: white;
  font-family: poppins;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  transition: all 350ms;
  transform: scale(1);
  :hover {
    background-color: white;
    color: blue;
    transition: all 800ms;
    transform: scale(1.01);
  }
`;
const StackHold = styled.div``;
const Holder = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Stack1 = styled.div`
  font-family: poppins;
  font-size: 30px;
`;
const Full = styled.div`
  font-size: 14px;
  line-height: 25px;
  font-weight: 450;
`;

const Icon2 = styled(AiFillLinkedin)`
  font-size: 20px;
`;
const Icon3 = styled(FaFileSignature)`
  font-size: 20px;
`;

const LinkHold = styled.div`
  margin-top: 30px;
`;

const Links = styled.div`
  font-family: poppins;
  font-size: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    height: 3px;
    background-color: black;
    width: 40px;
    margin-left: 5px;
    border-radius: 10px;

    :hover {
      background: lightblue;
    }
  }
`;

const Hold = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Icon1 = styled(FaGithub)`
  font-size: 20px;
`;

const Des = styled.div`
  margin-left: 5px;
  font-family: poppins;
  span {
    margin-left: 10px;
  }
`;

const AboutHold = styled.div`
  margin-bottom: 25px;
  @media screen and (max-width: 768px) {
    width: 85%;
  }
`;

const About = styled.div`
  font-family: poppins;
  font-size: 20px;
  display: flex;

  font-weight: 500;
  text-transform: uppercase;
  align-items: center;
  cursor: pointer;
`;
const About1 = styled.div`
  margin-top: 20px;
  font-family: poppins;
  font-size: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    height: 3px;
    background-color: black;
    width: 40px;
    margin-left: 5px;
    border-radius: 10px;

    :hover {
      background: lightblue;
    }
  }
`;

const AboutInput = styled.div`
  margin-top: 10px;
  font-size: 14px;
  line-height: 25px;
`;

const Info = styled.div`
  /* height: 70%; */
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  /* background-color: red; */
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const NavHolder = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
  position: relative;

  :after {
    content: '';
    height: 2px;
    background-color: ${({ bg }) => (bg ? 'blue' : 'transparent')};
    width: 100%;
    position: absolute;
    top: -21px;
  }

  cursor: pointer;
`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid silver;
  border-bottom: 1px solid silver;
  padding: 20px 0;
  /* background-color: red; */
`;

const WebSite = styled.div`
  color: rgba(16, 143, 233);
  font-style: italic;
  cursor: pointer;
  text-decoration: none;
  margin-top: 10px;
  /* background-color:red; */
`;
const Bio = styled.div`
  font-size: 16px;
  margin-top: 10px;
  text-transform: Capitalize;
`;

const Name = styled.div`
  font-weight: 450;
  font-size: 15px;
`;

const Detail = styled.div`
  font-size: 13px;
  margin-top: 20px;
`;

const Title = styled.div`
  font-size: 30px;
  text-transform: ${({ cap }) => (cap ? 'uppercase' : 'normal')};
  font-size: ${({ fs }) => (fs ? '10px' : '12px')};
  font-weight: ${({ fs }) => (fs ? '500' : 'normal')};
  color: ${({ fs }) => (fs ? 'lightgray' : 'black')};
`;

const Count = styled.div`
  font-weight: 500;
  margin-right: 5px;
  font-family: poppins;
`;

const Post = styled.div`
  display: flex;
  margin-right: 20px;
  font-size: 13px;
`;

const Icon = styled(FiSettings)`
  font-size: 15px;
  :hover {
    cursor: pointer;
  }
`;

const EditButton = styled.div`
  padding: 10px 15px;
  border-radius: 3px;
  background: blue;
  cursor: pointer;
  color: white;
  font-size: 12px;
  font-weight: 500;
  margin-right: 20px;
  transition: all 350ms;
  :hover {
    transform: scale(1.01);
  }
  @media screen and (max-width: 450px) {
    padding: 5px 20px;
    font-size: 10px;
  }
`;

const ProfileName = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-right: 20px;
  text-transform: uppercase;
  font-family: poppins;

  @media screen and (max-width: 450px) {
    font-size: 15px;
  }
`;

const NameDetails = styled.div`
	display: flex;
	margin: 10px 0;
	align-items: center;

	@media screen and (max-width:450px){
		background-color: blue;
		width: 80%;
		m
	}
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 30px 2px 30px 2px;
  object-fit: cover;
  margin-right: 40px;

  @media screen and (max-width: 450px) {
    background-color: red;
    width: 40%;
  }
`;

const Top = styled.div`
  margin: 20px 40px;
  display: flex;
  @media screen and (max-width: 450px) {
    background-color: red;
    width: 80%;
  }
`;

const Wrapper = styled.div`
  width: 768px;
  margin-bottom: 30px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #fafafa;
  overflow-y: scroll;
  height: calc(100vh - 100px);
`;
