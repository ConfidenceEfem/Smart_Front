import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { IoPersonOutline } from 'react-icons/io5';
import { VscBriefcase } from 'react-icons/vsc';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';
import Header from './Header';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Swal from 'sweetalert2';
import { ErrorFunction } from './Error';

const SignIn = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState('Developer' || '');

  const [accept, setAccept] = useState(false);
  const [acceptClient, setAcceptClient] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().email().required('This field is required'),
    name: yup.string().required('Input your Name'),
    password: yup.string().required('Input your password'),
    confirm: yup.string().oneOf([yup.ref('password')]),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submit = handleSubmit(async (data) => {
    console.log(data);
    const { email, password, confirm, name } = data;
    const url = 'http://localhost:2023';
    const mainUrl = 'https://smart-2022.herokuapp.com';

    try {
      const res = await axios.post(`${url}/register`, {
        email: email,
        password: confirm,
        name,
      });
      console.log(res);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Check your Mail`,
        showConfirmButton: true,
        // timer: 2500,
      });
    } catch (error) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: `${ErrorFunction(error)}`,
        showConfirmButton: false,
        timer: 2500,
      });
    }
  });
  const submitClient = handleSubmit(async (data) => {
    console.log(data);
    const { email, password, confirm, name } = data;
    const url = 'http://localhost:2023';
    const mainUrl = 'https://smart-2022.herokuapp.com';

    try {
      const res = await axios.post(`${url}/register/client`, {
        email: email,
        password: confirm,
        name,
      });
      console.log(res);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Check your Mail`,
        showConfirmButton: true,
        // timer: 2500,
      });
    } catch (error) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: `${ErrorFunction(error)}`,
        showConfirmButton: false,
        timer: 2500,
      });
    }
  });

  const changeStatusClient = () => {
    setActive('Client');
  };
  const changeStatusDev = () => {
    setActive('Developer');
  };

  return (
    <MainContainer>
      <Header />
      <Con>
        <Wrap>
          <Descrip>
            <Login>Create a free SmartDev account</Login>
            <Link to="/">
              <G></G>
            </Link>
          </Descrip>
          <HoldDescrip>
            {active === 'Developer' ? (
              <But1>
                <Icon />
                <Icondescrip>Developer</Icondescrip>
              </But1>
            ) : (
              <But1
                bg
                onClick={() => {
                  changeStatusDev();
                }}
              >
                <Icon />
                <Icondescrip>Developer</Icondescrip>
              </But1>
            )}
            {active === 'Client' ? (
              <But2>
                <Icon2 />
                <Icondescrip>Client</Icondescrip>
              </But2>
            ) : (
              <But2
                bg
                onClick={() => {
                  changeStatusClient();
                }}
              >
                <Icon2 />
                <Icondescrip>Client</Icondescrip>
              </But2>
            )}
          </HoldDescrip>

          {active === 'Developer' ? (
            <InputMainHolder onSubmit={submit}>
              <InputHold>
                <Tag>
                  Name <span>*</span>
                </Tag>
                <input placeholder="Name" {...register('name')} />
                <Error>{errors?.name?.message}</Error>
              </InputHold>
              <InputHold>
                <Tag>
                  Email <span>*</span>
                </Tag>
                <input placeholder="Email" {...register('email')} />
                <Error>{errors?.email?.message}</Error>
              </InputHold>
              <InputHold>
                <Tag>
                  Password <span>*</span>
                </Tag>
                <input placeholder="Password" {...register('password')} />
                <Error>{errors?.email?.message}</Error>
              </InputHold>
              <InputHold>
                <Tag>
                  Comfirm Password <span>*</span>
                </Tag>
                <input
                  placeholder="Comfirm Password"
                  {...register('confirm')}
                />
                <Error>{errors?.email?.message}</Error>
              </InputHold>

              <Checker>
                <input
                  type="checkbox"
                  onClick={() => {
                    setAccept(!accept);
                  }}
                />
                <Terms>
                  You accept our Terms and Conditions and Privacy Policy
                </Terms>
              </Checker>
              {active === 'Developer' ? (
                <div>
                  {accept ? (
                    <Reg type="submit">Register As A Developer</Reg>
                  ) : (
                    <RegUnable>Registering As A Developer</RegUnable>
                  )}
                </div>
              ) : active === 'Client' ? (
                <Reg>Register As A Client</Reg>
              ) : null}
            </InputMainHolder>
          ) : (
            <InputMainHolder onSubmit={submitClient}>
              <InputHold>
                <Tag>
                  Name <span>*</span>
                </Tag>
                <input placeholder="Name" {...register('name')} />
                <Error>{errors?.name?.message}</Error>
              </InputHold>
              <InputHold>
                <Tag>
                  Email <span>*</span>
                </Tag>
                <input placeholder="Email" {...register('email')} />
                <Error>{errors?.email?.message}</Error>
              </InputHold>
              <InputHold>
                <Tag>
                  Password <span>*</span>
                </Tag>
                <input placeholder="Password" {...register('password')} />
                <Error>{errors?.email?.message}</Error>
              </InputHold>
              <InputHold>
                <Tag>
                  Comfirm Password <span>*</span>
                </Tag>
                <input
                  placeholder="Comfirm Password"
                  {...register('confirm')}
                />
                <Error>{errors?.email?.message}</Error>
              </InputHold>

              <Checker1>
                <input
                  type="checkbox"
                  onClick={() => {
                    setAcceptClient(!acceptClient);
                  }}
                />
                <Terms>
                  You accept our Terms and Conditions and Privacy Policy
                </Terms>
              </Checker1>
              {active === 'Developer' ? (
                <Reg type="submit">Register As A Developer</Reg>
              ) : active === 'Client' ? (
                <div>
                  {acceptClient ? (
                    <Reg type="submit">Register As A Client</Reg>
                  ) : (
                    <RegUnable>Register As A Client</RegUnable>
                  )}
                </div>
              ) : null}
            </InputMainHolder>
          )}

          <AL>
            <Login1>
              Already have an accout?{' '}
              <Link to="/signin" style={{ textDecoration: 'none' }}>
                Login
              </Link>
            </Login1>
          </AL>
        </Wrap>
      </Con>
    </MainContainer>
  );
};

export default SignIn;
const InputMainHolder = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: white; */
  position: absolute;
`;
const Error = styled.div`
  font-size: 10px;
  color: red;
  margin-top: 5px;
  font-weight: 500;
`;
const Login1 = styled.div`
  margin-top: 20px;
  font-size: 13px;

  span {
    color: green;
  }
`;

const RegUnable = styled.div`
  width: 100%;
  border: none;
  outline: none;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  font-size: 10px;
  height: 38px;
  border-radius: 5px;
  /* font-family: poppins; */
  font-size: 13px;
  font-weight: 500;
  color: #fff;
`;
const Reg = styled.button`
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  font-size: 10px;
  height: 38px;
  border-radius: 5px;
  /* font-family: poppins; */
  font-size: 13px;
  font-weight: 500;
  color: #fff;

  :hover {
    background-color: darkblue;
  }
`;

const AL = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Checker1 = styled.div`
  margin-top: 10px;
  display: flex;

  input {
    /* background-color: green;  */
  }
`;
const Checker = styled.div`
  margin-top: 10px;
  display: flex;

  input {
    /* background-color: green;  */
  }
`;

const Terms = styled.div`
  font-size: 10px;
`;
const InputHold = styled.div`
  margin-top: 10px;

  input {
    margin-top: 5px;
    border-radius: 5px;
    padding-left: 20px;
    font-size: 13px;
    font-family: poppins;
    width: 92%;
    height: 35px;
    outline: none;
    border: none;
    background-color: #f0f5f7;

    :focus {
      border: solid 1px blue;
    }
  }
`;

const Tag = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;

  span {
    color: red;
  }
`;

const G = styled(FaTimes)``;
const Con = styled.div`
  display: flex;
  background-color: #363e51;
  height: calc(100vh - 80px);
  justify-content: center;
  align-items: center;
  width: 100%;
  /* background-color: rgb(0, 0, 0, 0.2); */

  /* height: 100vh; */
  /* position: absolute; */
  /* position: fixed; */
  /* transform: translate(0%, -20%); */
`;

const Wrap = styled.div`
  height: 530px;
  width: 420px;
  background-color: white;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 30px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const Descrip = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Login = styled.div`
  font-size: 15px;
`;

const HoldDescrip = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;
const But1 = styled.div`
  width: 180px;
  background-color: ${({ bg }) => (bg ? '#e1f2e5' : 'green')};
  color: ${({ bg }) => (bg ? 'green' : '#e1f2e5')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 45px;

  cursor: pointer;

  /* :hover {
    background: green;
    color: #fff;
  } */

  @media screen and (max-width: 400px) {
    width: 150px;
  }
  @media screen and (max-width: 320px) {
    width: 135px;
  }
`;

const Icon = styled(IoPersonOutline)`
  margin-right: 5px;
`;
const Icondescrip = styled.div`
  font-size: 13px;
`;

const Icon2 = styled(VscBriefcase)`
  margin-right: 5px;
`;
const But2 = styled.div`
  width: 180px;
  background-color: ${({ bg }) => (bg ? '#e1f2e5' : 'green')};
  color: ${({ bg }) => (bg ? 'green' : '#e1f2e5')};
  /* background-color: #e1f2e5;
  color: green; */
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 45px;

  :hover {
    background: green;
    color: #fff;
  }
  @media screen and (max-width: 400px) {
    width: 150px;
  }
  @media screen and (max-width: 320px) {
    width: 135px;
  }
`;
