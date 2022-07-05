import React from 'react';
import styled from 'styled-components';
import { AiFillLinkedin } from 'react-icons/ai';
// import { Link } from "react-router-dom";
import { FaGithub, FaFileSignature } from 'react-icons/fa';
import avatar from './images/avatar.png';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import DashNavs from './DashNavs';

const EditProfilePage = () => {
  const schema = yup.object().shape({
    name: yup.string(),
    devName: yup.string(),
    bio: yup.string(),
    details: yup.string(),
    stacks: yup.string(),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submit = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <Container>
      <Wrapper>
        <Logo>Edit Profile</Logo>

        <Text>Complete profile and help clients locate you faster</Text>

        <ImageHold>
          <Image src={avatar} />
          <ImageLabel htmlFor="pix">Upload Image</ImageLabel>
          <ImageInput id="pix" />
        </ImageHold>

        <InputHolder>
          <Input placeholder="Full Name :" {...register('name')} />
        </InputHolder>

        <InputHolder>
          <Input placeholder="Dev Name :" />
        </InputHolder>

        <InputHolder>
          <Input placeholder="About :" {...register('bio')} />
        </InputHolder>

        <LineHolder>
          <Line />
          <span>About</span>
          <Line1 />
        </LineHolder>

        <InputHolder>
          <Input placeholder="Details:" />
        </InputHolder>

        <LineHolder>
          <Line />
          <span>Stack</span>
          <Line1 />
        </LineHolder>
        <InputHolder>
          <Input placeholder="stacks :" {...register('stacks')} />
        </InputHolder>

        <LineHolder>
          <Line />
          <span>Links</span>
          <Line1 />
        </LineHolder>
        <InputHolder>
          <Icon1 />
          <Input placeholder="Github" />
        </InputHolder>

        <InputHolder>
          <Icon2 />
          <Input placeholder="linkden" />
        </InputHolder>

        <InputHolder>
          <Icon3 />
          <Input placeholder="Portfolio" />
        </InputHolder>

        <LineHolder>
          <Line />
          <span>Projects</span>
          <Line1 />
        </LineHolder>
        <InputHolder>
          <Input placeholder="projects done :" />
        </InputHolder>
        <Button>
          <span>Save</span>
        </Button>
      </Wrapper>
    </Container>
  );
};

export default EditProfilePage;

const Icon2 = styled(AiFillLinkedin)`
  margin: 0 10px;
  color: gray;
`;
const Icon3 = styled(FaFileSignature)`
  margin: 0 10px;
  color: gray;
`;

const Input = styled.input`
  flex: 1;
  outline: none;
  border: 0;
  padding-left: 8px;
  ::placeholder {
    font-family: Poppins;
  }
`;

const Icon1 = styled(FaGithub)`
  margin: 0 10px;
  color: gray;
`;

const InputHolder = styled.div`
  margin-top: 10px;
  border: 1px solid silver;
  width: 80%;
  height: 35px;
  display: flex;
  align-items: center;
  border-radius: 3px;
`;

const ImageInput = styled.input`
  display: none;
`;

const ImageLabel = styled.label`
  font-size: 12px;
  padding: 8px 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

  margin: 10px 0;
  background-color: rgb(16, 143, 233);
  color: white;
  border-radius: 3px;
`;

const Image = styled.img`
  object-position: top;
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid lightblue;
`;

const ImageHold = styled.div`
  margin-top: 20px;
  margin-left: 40px;
  margin-right: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Line1 = styled.div`
  border-top: 2px solid silver;
  width: 100%;
  margin-right: 40px;
`;

const Line = styled.div`
  border-top: 2px solid silver;
  width: 100%;
  margin-left: 40px;
`;

const LineHolder = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 20px;
  span {
    margin: 0 10px;
    text-transform: uppercase;
    font-size: 12px;
    font-family: poppins;
  }
`;

const Button = styled.div`
  background-color: rgb(16, 143, 233);
  /* width: 100%; */
  color: white;
  margin: 20px 0px;
  padding: 7px 50px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
`;

const Text = styled.div`
  padding: 0 30px;
  color: gray;
  text-align: center;
  line-height: 1.2;
  font-size: 14px;
`;

const Logo = styled.div`
  font-family: Pacifico;
  margin-top: 50px;
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  width: 500px;
  /* height: 100%;
  min-height: 100px; */
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 5px;
  justify-content: center;
  @media screen and (max-width: 450px) {
    width: 90%;
  }
`;

const Container = styled.div`
  padding-top: 70px;
  display: flex;
  overflow-y: scroll;
  width: 100%;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
  height: 100%auto;
`;
