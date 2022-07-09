import axios from 'axios';
import React, { useContext } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import DashHeader from './DashHeader';
import DashNav from './DashNav';
import { AiFillCamera } from 'react-icons/ai';
import { AuthContext } from '../AuthState/AuthProvider';
import { useNavigate } from 'react-router';
import Header from '../team/Header';
import { useDispatch, useSelector } from 'react-redux';
import { user } from '../reduxpersist/actions';
import { ErrorFunction } from '../team/Error';

const DashEditProfile = () => {
  const { currentUser, loading, dispatch } = useContext(AuthContext);

  const selector = useSelector((state) => state.persistedReducer.current);

  const dispatchEdit = useDispatch();

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
  const [status, setStatus] = React.useState('');
  const [experience, setExperience] = React.useState(
    currentUser?.data?.experience || ''
  );
  const [bio, setBio] = React.useState('');

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);
    setImageLink(file);
  };

  const onSubmitForm = async () => {
    console.log(name, status, experience, bio);

    try {
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };

      const formData = new FormData();

      formData.append('name', name);
      formData.append('image', imageLink);
      formData.append('status', status);
      formData.append('bio', bio);
      formData.append('experience', experience);

      const url = 'http://localhost:2023';
      const mainUrl = 'https://smart-2022.herokuapp.com';

      const res = await axios.put(`${mainUrl}/user/${selector?.data?._id}`, {
        name: name,
        status,
        experience,
        bio,
      });
      if (res) {
        Swal.fire({
          icon: 'success',
          title: 'User Profile Updated Successfully',
          timer: 2500,
          showConfirmButton: true,
        }).then(() => {
          navigate(`/dash/overview`);
        });
      }
      console.log(res?.data?.data);
      dispatchEdit(user({ data: res?.data?.data, token: selector?.token }));
      // localStorage.setItem(
      //   'smartuser',
      //   JSON.stringify({ token: currentUser?.token, data: res?.data?.data })
      // );
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Failed to edit profile',
        text: `${ErrorFunction(error)}`,
        timer: 2500,
        showConfirmButton: true,
      });
    }
  };
  return (
    <Container>
      {/* <DashHeader /> */}
      <Header />
      <NavAndPageHolder>
        <DashNav />
        <DashComp>
          <DashWrapper>
            <Form>
              <Title>Edit Profile</Title>
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
                    setName(e.target.value);
                  }}
                />
              </InputHolder>

              <InputHolder>
                <Label>Status</Label>
                <Input
                  placeholder="Status"
                  defaultValue={data?.status}
                  onChange={(e) => {
                    setStatus(e.target.value);
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

export default DashEditProfile;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 14px;
  font-weight: 500;
  width: 95%;
  height: 50px;
  font-family: poppins;
  border: 1px solid black;
  outline: none;
  /* background: rgb(0, 0, 255, 0.7); */
  color: black;
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
  font-family: poppins;
  width: 95%;
  border: 1px solid black;
  outline: none;
  /* background: rgb(0, 0, 255, 0.7); */
  color: black;
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
  align-items: center;
  width: 100%;
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
  font-family: poppins;
  flex-direction: column;
  /* align-items: flex-end; */

  /* min-height: 100vh; */
  justify-content: space-between;
  height: 100%;
`;
