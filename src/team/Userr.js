import Reac, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Header from './Header';
import img from '../dash/images/avatar.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ClientDetailComp from './ClientDetail';
import { AuthContext } from '../AuthState/AuthProvider';
import DevCard from './DevCard';

const Userr = () => {
  const [data, setData] = useState([]);

  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const fetchData = async () => {
    const url = 'http://localhost:2023';
    const mainUrl = 'https://smart-2022.herokuapp.com';
    const res = await axios.get(`${mainUrl}/allusers`);
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
            props?.isDeveloper ? <DevCard props={props} /> : null
          )}
        </Hold>
      </Con>
    </MainContainer>
  );
};

export default Userr;

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hold = styled.div`
  /* display: flex; */
  width: 90%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Con = styled.div`
  width: 100%;
  min-height: calc(100vh - 95px);
  /* height: 100%; */
  display: flex;
  justify-content: center;
`;
