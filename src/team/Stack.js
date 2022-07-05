import React from 'react';
import styled from 'styled-components';
import { GoPerson } from 'react-icons/go';
import { MdEmail } from 'react-icons/md';
import Header from './Header';

const Stack = () => {
  return (
    <MainContainer>
      <Header />
      <Container>
        <Wrapper>
          <Card>
            <InputHold>
              <Icon />
              <Input1 placeholder="enter your name/companyname" />
            </InputHold>
            <InputHold>
              <Icon1 />
              <Input1 placeholder="enter your email" />
            </InputHold>
            <Textarea placeholder="work discription" />
            <Button>Send</Button>
          </Card>
        </Wrapper>
      </Container>
    </MainContainer>
  );
};
export default Stack;

const MainContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Button = styled.div`
  width: 200px;
  height: 50px;
  background: #1967d2;
  color: white;
  font-size: 17px;
  font-family: poppins;
  font-weight: 450;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  transition: all 350ms;
  cursor: pointer;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  :hover {
    transform: scale(1.01);
  }
`;
const Textarea = styled.textarea`
  width: 350px;
  height: 200px;
  resize: none;
  padding: 10px;
  border: 0;
  outline: none;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 50px;
  background: transparent;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  ::placeholder {
    font-family: poppins;
    font-size: 15px;
  }
`;
const Input1 = styled.input`
  background: transparent;
  border: 0;
  outline: none;
  height: 90%;
  font-size: 15px;
  font-family: poppins;
  flex: 1;
  ::placeholder {
    font-family: poppins;
    font-size: 12px;
  }
`;
const Icon1 = styled(MdEmail)`
  margin-right: 5px;
  font-size: 20px;
`;
const Icon = styled(GoPerson)`
  margin-right: 5px;
  font-size: 20px;
`;
const InputHold = styled.div`
  width: 350px;
  height: 55px;
  margin: 10px 0;
  background: transparent;
  padding: 0 10px;
  display: flex;
  align-items: center;
  /* border-radius: 10px; */
  border-bottom: 1px solid grey;
`;
const Card = styled.div`
  width: 450px;
  height: 550px;
  /* background: lightgray; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;
const Wrapper = styled.div`
  width: 800px;
  height: 600px;
  /* background-color: lightgray; */
  /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 95px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
