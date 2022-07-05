import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const Foto = () => {
  return (
    <>
      <Con>
        <Wrap>
          <At>
            @ copyright 2022 <span>S</span>mart all right reserved
          </At>
          <IconHold>
            <F>
              <FaFacebook />
            </F>
            <F>
              <FaTwitter />
            </F>
            <F>
              <FaYoutube />
            </F>
            <F>
              <FaLinkedin />
            </F>
            <F>
              <AiFillInstagram />
            </F>
          </IconHold>
        </Wrap>
      </Con>
    </>
  );
};

export default Foto;
const Con = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  /* background-color: pink; */
  padding-top: 30px;
  padding-bottom: 30px;

  @media screen and (max-width: 556px) {
    flex-direction: column;
    align-items: center;
  }
`;

const At = styled.div`
  font-size: 15px;
  display: flex;
  align-items: center;

  span {
    color: blue;
    margin-left: 3px;
  }
  @media screen and (max-width: 430px) {
    font-size: 11px;
  }
  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
`;
const IconHold = styled.div`
  display: flex;

  @media screen and (max-width: 556px) {
    margin-top: 25px;
  }
`;

const F = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  background-color: #fafcff;
  font-size: 17px;
  color: darkblue;
  margin-right: 8px;
  cursor: pointer;
  @media screen and (max-width: 430px) {
    height: 30px;
    width: 30px;
  }
`;
