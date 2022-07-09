import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const SmallDetails = ({ job, id }) => {
  const [mainData, setMainData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:2023';
      const mainUrl = 'https://smart-2022.herokuapp.com';
      try {
        const res = await axios.get(`${mainUrl}/clientonejob/${id}`);
        console.log(res?.data?.data);
        setMainData(res?.data?.data);

        // console.log(res?.data?.data?.apply);
      } catch (error) {
        // Swal.fire({
        //   icon: 'error',
        //   title: 'Unable to get Data',
        //   timer: 2500,
        //   showConfirmButton: false,
        // });
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {job ? (
        <JobTitle>
          <span>Applied For:Hwy</span>
          {mainData?.jobTitle}
          Hello Wold bae
        </JobTitle>
      ) : null}
    </div>
  );
};

export default SmallDetails;

const CardWrapper = styled.div`
  width: 97%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PendingButton = styled.div`
  /* padding: 10px 15px; */
  /* border-radius: 30px; */
  /* background: red; */
  font-weight: 700;

  font-size: 12px;
  color: red;
`;
const HiredDate = styled.div`
  display: flex;
  font-size: 13px;
  font-weight: 600;
`;
const Amount = styled.div`
  display: flex;
  font-weight: 600;
  color: blue;
  font-size: 12px;
`;
const JobTitle = styled.div`
  font-weight: 600;
  color: blue;
  display: flex;
  align-items: center;
  /* flex: 2; */
  span {
    color: black;
    font-size: 12px;
    margin-right: 5px;
  }
`;
