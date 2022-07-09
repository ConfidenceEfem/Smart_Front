import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { IoPersonOutline } from 'react-icons/io5';
import { VscBriefcase } from 'react-icons/vsc';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Header from './Header';
import axios, { useContext } from 'axios';
import { Email } from '@mui/icons-material';
import Swal from 'sweetalert2';
import { ErrorFunction } from './Error';
import { useDispatch, useSelector } from 'react-redux';
import { user } from '../reduxpersist/actions';
// import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthState/AuthProvider';

const SignIn = () => {
  // const { loading, dispatch } = useContext(AuthContext);
  const dispatch1 = useDispatch();
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().email().required('This field is required'),
    password: yup.string().required('Input your password'),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submit = handleSubmit(async (data) => {
    // dispatch({ type: 'DataRequest' });
    console.log(data);
    const { email, password } = data;
    try {
      const url = 'http://localhost:2023';
      const mainUrl = 'https://smart-2022.herokuapp.com';
      const res = await axios.post(`${mainUrl}/loginverify`, data);
      if (res) {
        dispatch1(user(res?.data?.data));
        // dispatch({ type: 'DataSuccess' });
        // localStorage.setItem('smartuser', JSON.stringify(res?.data?.data));
        console.log(res?.data?.data);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `User Log In Successfully`,
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          if (res?.data?.data?.data?.isClient) {
            navigate('/dash/overview');
          } else if (res?.data?.data?.data?.isDeveloper) {
            navigate('/dev/main');
          } else {
            navigate('/');
          }
        });
      }
    } catch (error) {
      // dispatch({ type: 'DataFailed' });
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: `${ErrorFunction(error)}`,
        showConfirmButton: false,
        timer: 2500,
      });
    }
  });

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Header />
      <Con>
        <Wrap onSubmit={submit}>
          <Descrip>
            <Login>
              Log into your smartdev<span>..</span> account
            </Login>
            <Link to="/">
              {' '}
              <G></G>
            </Link>
          </Descrip>

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

          <Reg type="submit">Log In</Reg>

          <AL>
            <Login1>
              Dont have an accout?{' '}
              <Link to="/signup" style={{ textDecoration: 'none' }}>
                <span>SignUp</span>
              </Link>
            </Login1>
          </AL>
        </Wrap>
      </Con>
    </div>
  );
};

export default SignIn;

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
    color: darkblue;
  }
`;

const Reg = styled.button`
  width: 100%;
  font-family: poppins;
  outline: none;
  border: none;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  font-size: 10px;
  height: 38px;
  border-radius: 5px;
  /* font-family: poppins; */
  font-size: 13px;
  font-weight: 500;
  color: #fff;
  transition: all 350ms;
  :hover {
    background: darkblue;
  }
`;

const AL = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputHold = styled.div`
  margin-top: 20px;

  input {
    font-family: poppins;
    margin-top: 5px;
    border-radius: 5px;
    padding-left: 20px;
    font-size: 10px;
    width: 92%;
    height: 35px;
    outline: none;
    border: none;
    background-color: #f0f5f7;

    :focus {
      border: solid 1px orange;
    }
  }
`;

const Tag = styled.div`
  font-size: 12px;

  span {
    color: red;
  }
`;

const G = styled(FaTimes)``;
const Con = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #363e51;
  height: calc(100vh - 80px);
`;

const Wrap = styled.form`
  height: 350px;
  width: 400px;
  background: white;
  /* background-color: pink; */
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

  span {
    color: orange;
    font-family: poppins;
  }
`;
