import axios from 'axios';
import React, { useContext } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import DashNav from './DashNav';
import { AiFillCamera } from 'react-icons/ai';
import { AuthContext } from '../AuthState/AuthProvider';
import { useNavigate } from 'react-router';
import DashHeader from '../maindash/DashHeader';
import Header from '../team/Header';
import LoadingScreen from '../team/LoadingScreen';
import { useSelector, useDispatch } from 'react-redux';
import { user } from '../reduxpersist/actions';

const DevEditProfile = () => {
  const { currentUser, loading, dispatch } = useContext(AuthContext);

  const dispatchEdit = useDispatch();

  const selector = useSelector((state) => state.persistedReducer.current);
  console.log(selector?.token);

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:2023';
      const mainUrl = 'https://smart-2022.herokuapp.com';
      try {
        const res = await axios.get(`${mainUrl}/user/${selector?.data?._id}`);
        if (res) {
          console.log(res?.data?.data);
          setData(res?.data?.data);
        }
      } catch (error) {}
    };
    fetchData();
  }, []);

  const navigate = useNavigate();
  const [name, setName] = React.useState('');
  const [image, setImage] = React.useState('');
  const [imageLink, setImageLink] = React.useState('');
  const [stack, setStack] = React.useState('');
  const [experience, setExperience] = React.useState(
    selector?.data?.experience || ''
  );
  const [bio, setBio] = React.useState('');

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);
    setImageLink(file);
  };

  const onSubmitForm = async () => {
    console.log(name, stack, experience, bio);

    dispatch({ type: 'DataRequest' });
    try {
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };

      const formData = new FormData();

      formData.append('name', name);
      formData.append('stack', stack);
      formData.append('image', imageLink);
      formData.append('experience', experience);
      formData.append('bio', bio);

      const url = 'http://localhost:2023';
      const mainUrl = 'https://smart-2022.herokuapp.com';

      const res = await axios.put(`${mainUrl}/user/${selector?.data?._id}`, {
        name: name,
        stack,
        experience,
        bio,
      });
      if (res) {
        dispatch({ type: 'DataSuccess' });
        Swal.fire({
          icon: 'success',
          title: 'Developer Profile Updated Successfully',
          timer: 2500,
          showConfirmButton: true,
        }).then(() => {
          navigate(`/dev/main`);
        });
      }

      dispatchEdit(user({ data: res?.data?.data, token: selector?.token }));
      // console.log(res?.data?.data);
      // localStorage.setItem(
      //   'smartuser',
      //   JSON.stringify({ token: currentUser?.token, data: res?.data?.data })
      // );

      // window.location.reload();
    } catch (error) {
      dispatch({ type: 'DataFailed' });
      Swal.fire({
        icon: 'error',
        title: 'Failed to edit profile',
        text: error,
        timer: 2500,
        showConfirmButton: true,
      });
    }
  };
  return (
    <Container>
      {/* <DashHeader /> */}
      {loading ? <LoadingScreen /> : null}

      <Header />
      <NavAndPageHolder>
        <DashNav />
        <DashComp>
          <DashWrapper>
            <Form>
              <Title>Edit Profile </Title>
              {/* {imageLink === '' ? (
                <Circle htmlFor="pix">
                  <AiFillCamera />
                </Circle>
              ) : (
                <ImageCont src={image} alt="profile" />
              )}

              <input
                type="file"
                style={{ display: 'none' }}
                id="pix"
                onChange={uploadImage}
              /> */}
              <InputHolder>
                <Label>First Name</Label>
                <Input
                  placeholder="John "
                  defaultValue={data?.name}
                  onChange={(e) => {
                    setName(e.target.defaultValue);
                  }}
                />
              </InputHolder>

              <InputHolder>
                <Label>stack</Label>
                <Input
                  placeholder="Frontend Engineerer"
                  defaultValue={data?.stack}
                  onChange={(e) => {
                    setStack(e.target.value);
                  }}
                />
              </InputHolder>
              <InputHolder>
                <Label>Experience</Label>
                <Input
                  placeholder="2 years"
                  defaultValue={data?.experience}
                  onChange={(e) => {
                    setExperience(e.target.value);
                  }}
                />
              </InputHolder>
              <InputHolder>
                <Label>Bio</Label>
                <TextArea
                  placeholder="Short bio"
                  defaultValue={data?.bio}
                  onChange={(e) => {
                    setBio(e.target.value);
                  }}
                />
              </InputHolder>
              <Button
                onClick={() => {
                  onSubmitForm();
                }}
              >
                Update Profile
              </Button>
            </Form>
          </DashWrapper>
        </DashComp>
      </NavAndPageHolder>
    </Container>
  );
};

export default DevEditProfile;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 14px;
  color: black;
  font-weight: 500;
  width: 95%;
  height: 50px;
  border: 1px solid gray;
  outline: none;
  font-family: poppins;
  ::placeholder {
    color: black;
  }
  :focus {
    border: 2px solid blue;
  }
`;
const ImageCont = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  /* background: red; */
`;
const Circle = styled.label`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  transition: all 350ms;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
  }

  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0, 0, 255, 0.2);
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const Button = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  text-transform: uppercase;
  font-size: 13px;
  background: rgb(0, 0, 255, 0.7);
  margin-top: 20px;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  transition: all 349ms;
  :hover {
    transform: scale(1.01);
  }
`;
const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  width: 95%;
  color: black;
  font-family: poppins;
  border: 1px solid gray;
  outline: none;

  ::placeholder {
    color: black;
  }
  :focus {
    border: 2px solid blue;
  }
`;
const Label = styled.div`
  font-size: 12px;
  color: white;
  width: 100%;
  margin-bottom: 5px;
  margin-left: 8px;
  text-align: left;
`;
const InputHolder = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  align-items: center;
  width: 100%;
  color: black;
  margin-bottom: 10px;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px 40px;
  background-color: white;
`;

const DashWrapper = styled.div`
  width: 92%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: red; */
`;
const DashComp = styled.div`
  width: calc(100vw - 350px);
  min-height: calc(100vh - 90px);

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
  font-family: poppins;
`;
