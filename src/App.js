import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashMainDelivered from './dash/DashMainDelivered';
import DashMainEdit from './dash/DashMainEdit';
import DashMainProject from './dash/DashMainProject';
import DashMainUndeliver from './dash/DashMainUndeliver';
import DashNavs from './dash/DashNavs';
import DashOverview from './dash/DashOverview';
import Congratulation from './team/Congratulation';
import LandingPage from './team/LandingPage';
import SignIn from './team/SignIn';
import SignUp from './team/SignUp2';
import Step1job from './team/Step1job';
import Stack from './team/Stack';
import Userr from './team/Userr';
import EmployersPage from './team/EmployersPage';
import FindJobs from './team/FindJobs';
import Client from './team/Client';
import Postjob from './team/Postjob';
import VerifyClient from './team/VerifyClient';
import DashBoard from './admin/DashBoard';
import Myprofile from './admin/MyProfile';
import EditProfile from './admin/EditProfile';
import PostAJob from './admin/PostAJob';
import ViewJobs from './admin/ViewJobs';
import AppliedJobs from './admin/AppliedJobs';
import DashNav from './maindash/DashNav';
import MainDashScreen from './maindash/mainDashScreen';
import PostJob from './maindash/PostJob';
import FindTalent from './maindash/FindTalent';
import DashEditProfile from './maindash/DashEditProfile';
import AllAppliedJob from './maindash/AllAppliedJob';
import AllPostedJob from './maindash/AllPostedJob';
import DashHireDevelopers from './maindash/DashHireDeveloper';
import Profile from './team/Profile';
import AllHiredDeveloper from './maindash/AllHiredDeveloper';
import DevMainScreen from './devdash/DevMainScreen';
import DevEditProfile from './devdash/DevEditProfile';
import DevAppliedJob from './devdash/DevAppliedJob';
import DevHiring from './devdash/DevHiring';

const App = () => {
  return (
    <div style={{ display: 'flex', maxHeight: '100vh', width: '100vw' }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/con/:otp/:id" element={<Congratulation />} />
          <Route exact path="/client/:otp/:id" element={<VerifyClient />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route path="/projects" element={<DashMainProject />} />
          <Route path="/stack" element={<Step1job />} />
          {/* <Route path="/send" element={<Stack />} /> */}
          <Route path="/talent" element={<Userr />} />
          <Route path="/employers" element={<EmployersPage />} />
          <Route path="/jobs" element={<FindJobs />} />
          <Route path="/client" element={<Client />} />
          <Route path="/client2" element={<Postjob />} />
          <Route path="/dash" element={<DashBoard />} />
          <Route path="/dash/myprofile" element={<Myprofile />} />
          <Route path="/dash/viewjobs" element={<ViewJobs />} />
          <Route path="/dash/contacted" element={<AppliedJobs />} />
          <Route path="/dashnav" element={<DashNav />} />
          <Route path="/dash/overview" element={<MainDashScreen />} />
          <Route path="/dash/postjob" element={<PostJob />} />
          <Route path="/dash/findtalent" element={<FindTalent />} />
          <Route path="/dash/editprofile" element={<DashEditProfile />} />
          <Route path="/dash/appliedjob" element={<AllAppliedJob />} />
          <Route path="/dash/postedjob" element={<AllPostedJob />} />
          <Route path="/dash/form/:id" element={<DashHireDevelopers />} />
          <Route path="/myprofile/:id" element={<Profile />} />
          <Route path="/dash/hired" element={<AllHiredDeveloper />} />
          <Route path="/dev/main" element={<DevMainScreen />} />
          <Route path="/dev/editprofile" element={<DevEditProfile />} />
          <Route path="/dev/appliedjob" element={<DevAppliedJob />} />
          <Route path="/dev/hired" element={<DevHiring />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
