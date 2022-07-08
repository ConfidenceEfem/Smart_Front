import React, { useContext } from 'react';
import styled from 'styled-components';
import { GrSearch } from 'react-icons/gr';
import img from '../dash/images/profile.png';
import { useNavigate } from 'react-router';
import { AuthContext } from '../AuthState/AuthProvider';

const Hero = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Left>
          <Lefthold>
            <Text>
              <BigText>
                Find & Hire
                <br />
                <span
                  style={{
                    color: 'orange',
                    // textDecoration: 'underline',
                    // textDecorationColor: 'blue',
                  }}
                >
                  Smart
                </span>{' '}
                Developers
              </BigText>
              <SmallText>
                Work with the best freelance talent from around the world on our
                secure,
                <br />
                flexible and cost-effective platform.
              </SmallText>
              <Div></Div>
            </Text>
            <InputHold>
              <Btnhd2>
                {/* <Btn1
                
                  onClick={() => {
                    if(currentUser?.client)
                    navigate(`/signup`);
                  }}
                >
                  Post a Job - it free
                </Btn1> */}
              </Btnhd2>
            </InputHold>
          </Lefthold>
        </Left>
        <Right>
          <Righthold>
            <img src={img} alt="loading" />
          </Righthold>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Righthold = styled.div`
  width: 600px;
  height: 100%;
  /* background-color: green; */
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

// const Stkhold = styled.div`
//   width: 680px;
//   display: flex;
//   margin-top: 20px;
//   height: 60px;
//   justify-content: space-between;
//   align-items: center;
//   @media screen and (max-width: 768px) {
//     /* flex-direction: column; */
//     display: none;
//   }

//   /* background-color: green; */
// `;
// const Stk = styled.div`
//   width: 120px;
//   height: 40px;
//   border: 1px solid grey;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 15px;
//   font-weight: 600;
//   color: grey;
//   font-family: poppins;
//   :hover {
//     transform: scale(0.9);
//     color: white;
//     cursor: pointer;
//   }
// `;

const InputHold = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  /* height: 100px; */
  /* background-color: green; */
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
// const Input = styled.input`
//   width: 450px;
//   height: 55px;
//   outline: none;
//   border: 0;
// `;

const Div2 = styled.div`
  font-size: 25px;
  font-family: poppins;
  font-weight: 600;
  color: #fff;
  margin-left: 10px;
`;
// const Inputhd1 = styled.div`
//   width: 450px;
//   height: 60px;
//   background-color: white;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 0 10px;
//   border-radius: 9px;
// `;
const Btnhd2 = styled.div`
  /* background: red; */
  display: flex;
  justify-content: flex-start;
`;

const Container = styled.div`
  width: 100%;
  height: 75vh;
  /* height: 100%; */
  /* position: relative; */
  /* position: fixed; */
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #363e51;
`;
const Wrapper = styled.div`
  width: 85%;
  margin-top: 20px;
  /* min-height: 80vh; */
  height: 90%;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background: red; */
  /* flex-direction: row; */
  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;
const Left = styled.div`
  width: 50%;
  height: 100%;
  /* background: blue; */
  /* background-color: grey; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Right = styled.div`
  /* width: 500px; */
  height: 100%;
  /* width: 40%; */
  /* background-color: blue; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Text = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: green; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  /* margin-top: 10px; */
`;
const BigText = styled.div`
  font-size: 60px;
  font-family: poppins;
  /* background: red; */
  font-weight: 700;
  line-height: 1.2;
  color: white;
`;
const SmallText = styled.div`
  font-size: 20px;
  font-family: poppins;
  font-weight: 600;
  margin: 30px 0;
  color: white;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
const Div = styled.div`
  height: 2px;
  width: 100px;
  margin-top: 15px;
  background-color: white;
`;
const Lefthold = styled.div`
  width: 100%;
  /* height: 700px; */
  /* margin-top: 50px; */
  /* background-color: red; */
  /* display: flex;
  justify-content: flex-start;
  align-items: space-around; */
`;

const Btn1 = styled.button`
  /* margin-left: 15px; */
  width: 200px;
  height: 55px;
  border: 0;
  border-radius: 5px;
  outline: none;
  font-weight: 700;
  /* color: white; */
  font-size: 17px;
  font-family: poppins;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 450px;
  }
`;
