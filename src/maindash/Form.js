import React from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Swal from 'sweetalert2';
import axios from 'axios';
import { AuthContext } from '../AuthState/AuthProvider';

const Form = () => {
  const { id } = useParams();
  const { currentUser, see } = React.useContext(AuthContext);
  console.log(currentUser);
  console.log(see);
  const schema = yup.object().shape({
    name: yup.string().required('Input your detail'),
    email: yup.string().required('Input your email'),
    job: yup.string().required('Input your job'),
    salary: yup.number().required('Input your salary'),
    hours: yup.string().required('Input working errors'),
    description: yup.string().required('Input your description'),
  });

  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submit = handleSubmit(async (data) => {
    const url = 'http://localhost:2023';
    const mainUrl = 'https://smart-2022.herokuapp.com';
    try {
      const res = await axios.post(`${mainUrl}/hire/${currentUser?._id}/${id}`);
      if (res) {
        Swal.fire({
          icon: 'success',
          title: 'Created Developer Successfully',
          showConfirmButton: false,
          timer: 2500,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Failed to Hire Developer',
        text: error.response.data.message || error.message,
        showConfirmButton: false,
        timer: 2500,
      });
    }

    console.log(data);
  });

  return (
    <Container>
      <Card>
        <HeadHold>
          <BoldTxt>HIRE US</BoldTxt>
          <Div></Div>
          <LigTxt>Fill out the form below to learn more!</LigTxt>
        </HeadHold>
        <Details onSubmit={submit}>
          <NameInput>
            <Fir>
              <FirstName>ClientName</FirstName>
              <input placeholder="Clinton" {...register('name')} />
            </Fir>
            <Fir>
              <FirstName>Email</FirstName>
              <input placeholder="kennedy" {...register('email')} />
            </Fir>
          </NameInput>
          <NameInput>
            <Fir>
              <FirstName>Job</FirstName>
              <input placeholder="Frontend" {...register('job')} />
            </Fir>
            <Fir>
              <FirstName>Salary</FirstName>
              <input placeholder="$300" type="number" {...register('salary')} />
            </Fir>
          </NameInput>
          <Time>
            <Sec>
              <FirstName>Working Hours</FirstName>
              <input placeholder="10hrs/days" {...register('hours')} />
            </Sec>
          </Time>
          <TextArea
            placeholder="Enter Job Description"
            {...register('description')}
          />
          <Btn type="submit">Send</Btn>
        </Details>
      </Card>
    </Container>
  );
};

export default Form;

const Btn = styled.button`
  width: 150px;
  outline: none;
  border: none;
  height: 40px;
  background-color: #363e51;
  color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 600;
  @media screen and (max-width: 425px) {
    width: 230px;
    height: 40px;
    padding: 5px 0;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
const TextArea = styled.textarea`
  width: 455px;
  height: 130px;
  /* background: lightgrey; */
  resize: none;
  border: 0;
  outline: none;
  border-radius: 5px;
  padding: 0 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  @media screen and (max-width: 425px) {
    width: 220px;
    margin-top: 10px;
  }
`;
const Sec = styled.div`
  input {
    width: 455px;
    height: 35px;
    padding: 0 10px;
    border: 0.5px solid lightgrey;
    outline: none;
    margin: 0 9px;
    border-radius: 3px;
    @media screen and (max-width: 425px) {
      width: 220px;
    }

    ::placeholder {
      font-family: poppins;
      font-size: 15px;
    }
  }
`;
const Time = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #f5f5f5; */
`;
const FirstName = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin: 0 9px;
`;
const Fir = styled.div`
  @media screen and (max-width: 425px) {
    margin: 5px 0;
  }
  input {
    width: 210px;
    height: 35px;
    padding: 0 10px;
    border: 0.5px solid lightgrey;
    outline: none;
    margin: 0 9px;
    border-radius: 3px;

    ::placeholder {
      font-family: poppins;
      font-size: 15px;
    }
  }
`;
const NameInput = styled.div`
  width: 100%;
  height: 80px;
  /* background: grey; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 425px) {
    flex-direction: column;
    margin: 35px 0;
  }
`;
const Details = styled.form`
  width: 100%;
  height: 468px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  /* background: lightcyan; */
  @media screen and (max-width: 425px) {
    width: 100%;
    height: 490px;
  }
`;

const LigTxt = styled.div`
  font-size: 17px;
  color: white;
  @media screen and (max-width: 320px) {
    font-size: 15px;
  }
`;
const Div = styled.div`
  height: 1px;
  width: 200px;
  background: grey;
`;
const BoldTxt = styled.div`
  font-size: 40px;
  color: white;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
  @media screen and (max-width: 320px) {
    font-size: 30px;
  }
`;

const HeadHold = styled.div`
  width: 100%;
  height: 180px;
  background: lightgrey;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-image: url('dev.jpg');
  background-size: cover;
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
  }
`;
const Card = styled.div`
  width: 550px;
  height: 650px;
  /* background: lightgrey; */
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    height: 680px;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
`;
