import React, { useContext } from 'react';
import styled from 'styled-components';
import DashHeader from './DashHeader';
import DashNav from './DashNav';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { AuthContext } from '../AuthState/AuthProvider';

const PostJob = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const navigate = useNavigate();

  const schema = yup.object().shape({
    jobTitle: yup.string().required('Input Job Title'),
    skillset: yup.string().required('Input Skill Set'),
    email: yup.string().email().required('Input Email'),
    salary: yup.string().required('Input Salary'),
    experience: yup.string().required('Input Experience'),
    deadline: yup.date().required('Input deadline'),
    detail: yup.string().required('Input detail'),
  });

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submit = handleSubmit(async (data) => {
    const { jobTitle, skillset, email, salary, experience, deadline, detail } =
      data;

    try {
      const url = 'http://localhost:2023';
      const mainUrl = 'https://smart-2022.herokuapp.com';
      const res = await axios.post(`${url}/jobpost/${currentUser?._id}`, {
        jobTitle,
        contactemail: email,
        description: detail,
        skillSet: skillset,
        cost: salary,
        experience,
        deadline,
      });
      console.log(res);
      if (res) {
        Swal.fire({
          icon: 'success',
          title: 'Job Posted Successfully',
          timer: 2500,
          showConfirmButton: true,
        }).then(() => {
          navigate(`/dash/postedjob`);
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: error.response.data.message,
        timer: 2500,
        showConfirmButton: false,
      });
    }

    reset();
  });

  return (
    <Container>
      <DashHeader />
      <NavAndPageHolder>
        <DashNav />
        <DashComp>
          <DashWrapper>
            <Form onSubmit={submit}>
              <InputHolder>
                <Text>Job Title*:</Text>
                <div style={{ width: '100%' }}>
                  <Input
                    placeholder="Frontend Developer"
                    {...register('jobTitle')}
                  />
                  <Error>{errors?.jobTitle?.message}</Error>
                </div>
              </InputHolder>
              <InputHolder>
                <Text>Skill Set*:</Text>
                <div style={{ width: '100%' }}>
                  <Input
                    placeholder="ReactJs, Material UI"
                    {...register('skillset')}
                  />
                  <Error>{errors?.skillset?.message}</Error>
                </div>
              </InputHolder>
              <InputHolder>
                <Text>Employers' Mail Address:</Text>
                <div style={{ width: '100%' }}>
                  <Input
                    placeholder="andela@gmail.com"
                    {...register('email')}
                  />
                </div>
              </InputHolder>
              <InputHolder>
                <Text>Salary*:</Text>
                <div style={{ width: '100%' }}>
                  <Input
                    placeholder="$300"
                    type="number"
                    {...register('salary')}
                  />{' '}
                  <Error>{errors?.salary?.message}</Error>
                </div>
              </InputHolder>
              <InputHolder>
                <Text>Experience*:</Text>
                <div style={{ width: '100%' }}>
                  <Input placeholder="2 Years" {...register('experience')} />{' '}
                  <Error>{errors?.experience?.message}</Error>
                </div>
              </InputHolder>
              <InputHolder>
                <Text>Deadline*:</Text>{' '}
                <div style={{ width: '100%' }}>
                  <Input {...register('deadline')} type="date" />{' '}
                  <Error>{errors?.deadline?.message}</Error>
                </div>
              </InputHolder>
              <InputHolder1>
                <Text1>Detail*:</Text1>
                <div style={{ width: '100%' }}>
                  <TextArea
                    placeholder="You would be working with a team to build a start up in 3 months"
                    {...register('detail')}
                  />{' '}
                  <Error>{errors?.detail?.message}</Error>
                </div>
              </InputHolder1>
              <ButtonHolder>
                <Button type="submit">Post Job</Button>
              </ButtonHolder>
            </Form>
          </DashWrapper>
        </DashComp>
      </NavAndPageHolder>
    </Container>
  );
};

export default PostJob;

const Error = styled.div`
  font-size: 10px;
  font-weight: 600;
  color: red;
`;
const Button = styled.button`
  margin: 0 5px;
  border: none;
  outline: none;
  width: 170px;
  height: 50px;
  background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  color: white;
  border-radius: 3px;
  transition: all 349ms;
  :hover {
    transform: scale(1.01);
  }
  /* color: bleack; */
`;
const ButtonHolder = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 160px;
  padding: 10px;
  border: none;
  outline: none;
  background: rgba(0, 0, 255, 0.5);
  margin: 0 5px;
  font-size: 15px;
  font-weight: 500;
  color: white;
  line-height: 20px;
  border-radius: 7px;
  :focus {
    border: 2px solid blue;
  }
  ::placeholder {
    font-size: 15px;
    color: white;
  }
`;

const Input = styled.input`
  /* width: 200px; */
  width: 100%;
  height: 36px;
  border: none;
  outline: none;
  background: rgba(0, 0, 255, 0.5);
  /* margin: 0 5px; */
  font-size: 15px;
  font-weight: 500;
  border-radius: 7px;
  color: white;
  padding: 10px;
  :focus {
    border: 2px solid blue;
  }
  ::placeholder {
    font-size: 12px;
    color: white;
  }
`;

const Text1 = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-top: 20px;
  width: 150px;
`;
const Text = styled.div`
  font-size: 14px;
  font-weight: 450;
  /* margin-right: 20px; */
  width: 150px;
`;
const InputHolder1 = styled.div`
  display: flex;
  /* align-items: center; */
  width: 100%;
  margin: 10px 0;
`;
const InputHolder = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 7px 0;
`;
const Form = styled.form`
  display: flex;
  width: 450px;
  flex-direction: column;
  /* background: red; */

  align-items: center;
`;

const DashWrapper = styled.div`
  width: 92%;
  display: flex;
  justify-content: center;
`;
const DashComp = styled.div`
  width: calc(100vw - 350px);
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #fafcff;
  flex-direction: column;
`;

const NavAndPageHolder = styled.div`
  display: flex;
  min-height: calc(100vh - 90px);
`;
const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  /* align-items: flex-end; */

  /* min-height: 100vh; */
  justify-content: space-between;
  height: 100%;
`;
