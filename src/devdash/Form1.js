import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router';
import styled from 'styled-components';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthContext } from '../AuthState/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import LoadingScreen from '../team/LoadingScreen';
import { useSelector } from 'react-redux';
import img from '../dash/images/apply.jpg';

const Form1 = () => {
  const { id } = useParams();

  const { currentUser, loading, dispatch } = useContext(AuthContext);

  const selector = useSelector((state) => state.persistedReducer.current.data);

  const navigate = useNavigate();

  const [image, setImage] = React.useState('');

  const uploadCv = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    application: yup.string().required(),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submit = handleSubmit(async (data) => {
    console.log(data);
    dispatch({ type: 'DataRequest' });

    const { name, email, application } = data;

    const url = 'http://localhost:2023';
    const mainUrl = 'https://smart-2022.herokuapp.com';
    try {
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };

      const formData = new FormData();

      formData.append('email', email);
      formData.append('cvImage', image);
      formData.append('name', name);
      formData.append('applicationLetter', application);
      const res = await axios.post(
        `${mainUrl}/oneapply/${selector?._id}/${id}`,
        {
          email: email,
          name: name,
          applicationLetter: application,
        }
      );
      if (res) {
        dispatch({ type: 'DataSuccess' });
        Swal.fire({
          icon: 'success',
          title: 'Job Application Submitted Successfully',
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          navigate(`/dev/appliedjob`);
        });
      }
    } catch (error) {
      dispatch({ type: 'DataFailed' });
      Swal.fire({
        icon: 'error',
        title: 'Failed to Apply For Job',
        showConfirmButton: false,
        timer: 2500,
      });
    }
  });

  return (
    <Container>
      {loading ? <LoadingScreen /> : null}

      <Card>
        <HeadHold>
          <BoldTxt>APPLY NOW</BoldTxt>
          <Div></Div>
          <LigTxt>Fill out the form below to learn more!</LigTxt>
        </HeadHold>
        <Details onSubmit={submit}>
          <Time>
            <Sec>
              <FirstName>Name</FirstName>
              <input placeholder="Enter your Name" {...register('name')} />
            </Sec>
          </Time>
          <Time1>
            <Sec>
              <FirstName>Email</FirstName>
              <input placeholder="Input your Email" {...register('email')} />
            </Sec>
          </Time1>
          <Time2>
            <Sec1>
              <FirstName1>Cv Image</FirstName1>
              <input type="file" style={{ color: 'red' }} onChange={uploadCv} />
            </Sec1>
          </Time2>
          <Textarea
            placeholder="Write a short descriptive Application Letter"
            {...register('application')}
          />
          <Btn>Send</Btn>
        </Details>
      </Card>
    </Container>
  );
};

export default Form1;

const Btn = styled.button`
  border: none;
  cursor: pointer;
  width: 150px;
  height: 40px;
  background-color: #363e51;
  color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 5px;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 600;
  transition: all 550ms;
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
const Textarea = styled.textarea`
  width: 455px;
  height: 130px;
  font-family: poppins;
  /* background: lightgrey; */
  resize: none;
  border: 0;
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  @media screen and (max-width: 425px) {
    width: 220px;
    margin-top: 10px;
  }
  ::placeholder {
    font-family: poppins;
    font-size: 15px;
  }
`;
const Sec1 = styled.div`
  input {
    width: 455px;
    height: 35px;
    font-family: poppins;
    /* padding: 0 10px; */
    border: 0;
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
const Sec = styled.div`
  font-family: poppins;
  input {
    font-family: poppins;
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
const Time1 = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  margin-top: -15px;
  align-items: center;
  /* background-color: #f5f5f5; */
`;
const Time2 = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  margin-top: -15px;
  align-items: center;
  /* background-color: #f5f5f5; */
`;
const FirstName1 = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin: 4px 5px;
`;
const FirstName = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin: 4px 9px;
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
  /* background: grey; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-image: url(${img});
  background-size: cover;
  /* background-repeat: no-repeat; */
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
  position: relative;
  justify-content: center;
  align-items: center;
  font-family: poppins;
`;
