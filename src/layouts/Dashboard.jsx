import React from "react";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Home  from "../pages/Home";
import JobAdvertisementCreate from '../pages/JobAdvertisementCreate'
 
export default function Dashboard() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/jobadvertisements" component={JobAdvertisementList}></Route>
        <Route exact path="/jobadvertisements/add" component={JobAdvertisementCreate}></Route>
      </Switch>
      {/* <Header as="h2" textAlign="center" style={{marginTop:"-2em"}}>İş İlanları</Header>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
              <CityList/>
          </Grid.Column>
          <Grid.Column width={12}>
            <JobAdvertisementList />
          </Grid.Column>
        </Grid.Row>
      </Grid> */}
    </div>
  );
}
