import React from "react";
import JobAdvertisementList from "../pages/JobAdvertisement/JobAdvertisementList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Home  from "../pages/Home";
import JobAdvertisementCreate from '../pages/JobAdvertisement/JobAdvertisementCreate'
import Login from '../pages/Auth/Login'
import JobSeekerRegister from "../pages/Auth/JobSeekerRegister";
import JobAdvertisementDetail from "../pages/JobAdvertisement/JobAdvertisementDetail"
import EmployerLogin from "../pages/Auth/EmployerLogin";
import EmployerRegister from "../pages/Auth/EmployerRegister";
import jobAdvertisementNotConfirm from "../pages/JobAdvertisement/jobAdvertisementNotConfirm";
import JobSeekerProfil from "../pages/Profils/JobSeekerProfil";
import Footer from "./Footer"
 
export default function Dashboard() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/jobadvertisements" component={JobAdvertisementList}/>
        <Route exact path="/jobadvertisement/add" component={JobAdvertisementCreate}/>
        <Route exact path="/jobadvertisement/detail/:id" component={JobAdvertisementDetail}/>
        <Route exact path="/login" component={Login}/> 
        <Route exact path="/login/employer" component={EmployerLogin}/>
        <Route exact path="/register/jobseeker" component={JobSeekerRegister}/>
        <Route exact path="/register/employer" component={EmployerRegister}/>
        <Route exact path="/profil/jobSeeker/:userId" component={JobSeekerProfil}/>
        <Route exact path="/jobadvertisements/waitingconfirm" component={jobAdvertisementNotConfirm}/>
      </Switch>
      <Footer className="footer"/>
    </div>
  );
}
