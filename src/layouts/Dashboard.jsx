import React from "react";
import CityList from "../pages/CityList";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import { Button,Card,Image,Grid } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
              <CityList/>
          </Grid.Column>
          <Grid.Column width={12}>
            <JobAdvertisementList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
