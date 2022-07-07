import Reac, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Header from './Header';
import img from '../dash/images/avatar.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ClientDetailComp from './ClientDetail';
import { AuthContext } from '../AuthState/AuthProvider';

const Userr = () => {
  const [data, setData] = useState([]);

  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const fetchData = async () => {
    const url = 'http://localhost:2023';
    const mainUrl = 'https://smart-2022.herokuapp.com';
    const res = await axios.get(`${url}/allusers`);
    setData(res.data.data);
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  return (
    <MainContainer>
      <Header />
      <Con>
        <Hold>
          {data?.map((props) =>
            props?.isDeveloper ? (
              <Card
                onClick={() => {
                  if (currentUser?.data?.isDeveloper) {
                    navigate(`/talent`);
                    console.log('bad');
                  } else if (currentUser?.data?.isClient) {
                    navigate(`/myprofile/${props._id}`);
                    console.log('good');
                  } else {
                    navigate('/');
                  }
                }}
              >
                <Image src={props.image} alt="image" />
                <Title>
                  <span>{props.name}</span>
                </Title>
                <CardWrapper>
                  <ClientDetailComp id={props.user} />
                  <Desc>
                    Hello World are you doing and i am doing fine always good
                    but
                  </Desc>
                  <Stack>
                    <span>Stack:</span>
                    React, Node, MongodDB
                  </Stack>{' '}
                  <Experience>
                    <span>Experience:</span>2 Years
                  </Experience>
                  <AmountAndEmail>
                    <Email>confidenceefem1@gmail.com</Email>
                    <Amount>$5000</Amount>
                  </AmountAndEmail>
                  <Button>Hire Now</Button>
                </CardWrapper>
              </Card>
            ) : null
          )}
        </Hold>
      </Con>
    </MainContainer>
  );
};

export default Userr;

const Button = styled.div`
  padding: 10px 15px;
  font-size: 12px;
  margin-top: 20px;
  font-weight: 500;
  border-radius: 5px;
  color: white;
  background: blue;
  margin-bottom: 20px;
`;
const Title = styled.div`
  opacity: 1;
  font-size: 14px;
  font-weight: 550;
  text-transform: uppercase;

  position: absolute;
  top: 0;
  color: white;
  transition: all 350ms;

  span {
    opacity: 0;
    width: 300px;
    height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
  }
  :hover {
    span {
      opacity: 1;
    }
  }
`;
const Amount = styled.div`
  font-weight: 600;
  color: blue;
`;
const Email = styled.div`
  font-weight: 450;
  font-size: 10px;
`;
const AmountAndEmail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Experience = styled.div`
  width: 100%;
  font-size: 13px;
  margin: 3px 0;
  span {
    font-weight: 500;
    font-size: 11px;
    color: black;
    margin-right: 5px;
  }
`;
const Deadline = styled.div`
  width: 100%;
  font-size: 13px;
  margin-bottom: 20px;
  span {
    font-weight: 500;
    font-size: 11px;
    color: black;
    margin-right: 5px;
  }
`;
const Stack = styled.div`
  width: 100%;
  display: flex;
  font-weight: 500;
  justify-content: flex-start;
  align-items: center;

  color: blue;

  span {
    font-weight: 500;
    font-size: 11px;
    color: black;
    margin-right: 5px;
  }
`;
const Desc = styled.div`
  width: 100%;
  font-size: 13px;
  text-align: left;
  font-weight: 500;
  margin-bottom: 10px;
  line-height: 20px;
`;
const Company = styled.div`
  font-size: 13px;
`;
const ClientName = styled.div`
  font-weight: 600;
  font-size: 14px;
`;
const ClientNameAndCompany = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const ClientImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const ClientDetail = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 15px 0;
`;
const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
`;
const Card = styled.div`
  width: 300px;
  height: 430px;
  /* background: red; */
  box-shadow: 1px 1px 1px lightgray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 15px;
  align-items: center;
  overflow: hidden;
  transition: all 350ms;
  cursor: pointer;
  position: relative;
  /* padding-bottom: 20px; */
  top: 0;
  :hover {
    transform: scale(1.01);
  }
`;

const MainContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const Hold = styled.div`
  width: 90%;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`;
// const Deta = styled.div`
//   text-align: center;
//   padding: 10px 0px;
//   width: 85%;
//   font-family: Arial, Helvetica, sans-serif;
// `;

// const Cont = styled(Link)`
//   height: 40px;
//   width: 150px;
//   text-decoration: none;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   /* background-color: green; */
//   border: 1px solid gray;
//   border-radius: 5px;
//   font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
//     'Lucida Sans', Arial, sans-serif;
//   cursor: pointer;

//   :active {
//     background-color: green;
//   }
// `;

// const Hire = styled(Link)`
//   height: 40px;
//   width: 150px;
//   display: flex;
//   color: white;
//   justify-content: center;
//   align-items: center;
//   background-color: #1967d2;
//   border-radius: 5px;
//   font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
//     'Lucida Sans', Arial, sans-serif;
// `;

// const But = styled.div`
//   padding: 40px 0px;
//   display: flex;
//   justify-content: space-between;
//   width: 85%;
// `;

// const Web = styled.div`
//   font-size: 14px;
//   color: gray;
//   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
//     'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
// `;

// const Name = styled.div`
//   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//   font-weight: 700;
//   font-size: 20px;
//   margin-bottom: 5px;
// `;

// const Pic = styled.img`
//   height: 100px;
//   width: 100px;
//   border-radius: 100%;
//   object-fit: cover;
//   margin-bottom: 10px;
// `;

const Con = styled.div`
  width: 100%;
  height: calc(100vh - 95px);
  display: flex;
  justify-content: center;
`;

// const Card = styled.div`
//   box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
//     rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
//   /* height: 500px; */
//   width: 400px;
//   /* min-height: 350px; */
//   padding: 20px 10px;
//   margin: 15px;
//   height: 350px;
// `;

// const Am = styled.div`
//   padding: 10px 10px;
//   background-color: blue;
//   color: white;
//   display: flex;
//   justify-content: center;
//   width: 100px;
//   font-size: 16px;
//   font-family: poppins;
//   border-radius: 20px;
// `;

// const ImageHold = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   padding: 20px 0;
// `;
