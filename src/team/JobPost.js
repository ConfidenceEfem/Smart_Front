import React from 'react';
import styled from 'styled-components';
import { GoPerson } from 'react-icons/go';
import { FaUserCircle } from 'react-icons/fa';
import { BiCurrentLocation, BiTask } from 'react-icons/bi';
import { AiOutlineCamera } from 'react-icons/ai';

const JobPost = () => {
  return (
    // <Container>
    <Field>
      <HeadHold>
        <CompName>
          <Icon />
          <Input placeholder="Company name" />
        </CompName>
      </HeadHold>
      <ImageHold>
        <Iconn>
          <AiOutlineCamera size="30px" />
        </Iconn>
        <Image src="boy.png" alt="photo related to project" />
      </ImageHold>
      <CompName1>
        <Icon1 />
        <Input1 placeholder="Job Post" />
      </CompName1>
      <Disc>
        <Textarea placeholder="Job description" />
        <Joint>
          <CompName2>
            <Icon2 />
            <Input2 placeholder="years of Experience" />
          </CompName2>
          <CompName2>
            <Icon3 />
            <Input2 placeholder="enter your Location" />
          </CompName2>
        </Joint>
        <ButH>
          <But>Post</But>
        </ButH>
      </Disc>
    </Field>
  );
};
export default JobPost;
const Iconn = styled.div`
  height: 50px;
  width: 70px;
  color: blue;
  /* background-color: black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButH = styled.div`
  display: flex;
  justify-content: center;
`;
const But = styled.div`
  height: 45px;
  width: 150px;
  background-color: blue;
  color: white;
  font-family: poppins;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

const Joint = styled.div`
  width: 460px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;
const Textarea = styled.textarea`
  width: 270px;
  height: 70px;
  resize: none;
  /* margin-left: 10px; */
  border: 0;
  outline: none;
  border-radius: 5px;
  margin: 10px 0;
  background: transparent;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  ::placeholder {
    font-family: poppins;
    font-size: 15px;
  }
`;
const Disc = styled.div`
  width: 480px;
  /* height: 180px; */
  /* background: red; */
  margin-top: 10px;
  margin-left: 15px;
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
const Input2 = styled.input`
  /* background: green; */
  border: 0;
  outline: none;
  height: 90%;
  font-size: 15px;
  /* padding-left: 5px; */
  font-family: poppins;
  flex: 1;
  ::placeholder {
    font-family: poppins;
    font-size: 15px;
  }
`;
const Icon3 = styled(BiCurrentLocation)`
  margin-right: 5px;
  font-size: 20px;
`;
const Icon2 = styled(FaUserCircle)`
  margin-right: 5px;
  font-size: 20px;
`;
const CompName2 = styled.div`
  height: 50px;
  width: 200px;
  margin-top: 5px;
  /* background-color: blue; */
  padding: 0 10px;
  display: flex;
  align-items: center;
  /* border: 0.5px solid grey; */
  /* margin-left: 15px; */
  border-radius: 5px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
`;
const Input1 = styled.input`
  /* background: green; */
  border: 0;
  outline: none;
  height: 90%;
  font-size: 15px;
  font-family: poppins;
  flex: 1;
  ::placeholder {
    font-family: poppins;
    font-size: 15px;
  }
`;
const Icon1 = styled(BiTask)`
  margin-right: 5px;
  font-size: 20px;
`;
const CompName1 = styled.div`
  height: 50px;
  width: 250px;
  margin-top: 10px;
  /* background-color: blue; */
  padding: 0 10px;
  display: flex;
  align-items: center;
  /* border: 0.5px solid grey; */
  margin-left: 15px;
  border-radius: 5px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
`;
const Input = styled.input`
  /* background: green; */
  border: 0;
  outline: none;
  height: 90%;
  font-size: 15px;
  font-family: poppins;
  flex: 1;
  ::placeholder {
    font-family: poppins;
    font-size: 15px;
  }
`;
const Icon = styled(GoPerson)`
  margin-right: 5px;
  font-size: 20px;
`;
const CompName = styled.div`
  height: 50px;
  width: 250px;
  /* background-color: blue; */
  padding: 0 10px;
  display: flex;
  align-items: center;
  /* border: 0.5px solid grey; */
  margin-left: 15px;
  border-radius: 5px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
`;
const HeadHold = styled.div`
  width: 100%;
  height: 90px;
  /* background: red; */
  font-size: 20px;
  font-family: poppins;
  font-weight: 600;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Field = styled.div`
  width: 500px;
  margin: 20px 0;
  /* height: 600px; */
  /* background-color: lightgrey; */
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  padding-bottom: 20px;
`;
// const Container = styled.div`
//   width: 100%;
//   /* height: 100%;s */
//   /* min-height: 100vh; */
//   display: flex;
//   justify-content: center;

// `;
