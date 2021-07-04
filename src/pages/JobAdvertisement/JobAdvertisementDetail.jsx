import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import JobAdvertisementService from "../../services/jobAdvertisementService.js";
import {
  Container,
  Image,
  Grid,
  Segment,
  Button,
  Header,
  Divider,
  Icon,
} from "semantic-ui-react";
import "./jobAdvertisement.css";
import { Link } from "react-router-dom";

export default function JobAdvertisementDetail() {
  let { id } = useParams();

  const [jobAdvertisement, setJobAdvertisement] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getById(id)
      .then((response) => setJobAdvertisement(response.data.data));
  }, []);

  // function setDay(){
  //   let nowDate = new Date();
  //   let endDate = new Date();
  //   console.log(nowDate)
  //   console.log(endDate)
  //   let dayNumber = Math.abs(nowDate.getTime() - endDate)
  //   return dayNumber;
  // }

  return (
    <div>
      <Container style={{minHeight:"1100px"}}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3} />
            <Grid.Column width={10}>
              <Segment className="segmentjobadvertisement">
                <Header>
                  <h1 className="jobheaderjobadvertisement">
                    {jobAdvertisement.title}
                  </h1>
                </Header>
                <Grid style={{ marginTop: "20px" }}>
                  <Grid.Column width={5}>
                    <Link as={Link} to="/employer">
                      <h3 className="jobadvertisementCompanyName">
                        {jobAdvertisement.employer?.companyName}
                      </h3>
                    </Link>
                  </Grid.Column>
                  <Grid.Column width={1}>
                    <Divider vertical inverted />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <h4 className="jobadvertisementCompanyName">
                      <Link as={Link} to="/jobadvertisements">
                        {jobAdvertisement.job?.name}
                      </Link>
                    </h4>
                  </Grid.Column>
                  <Grid.Column width={1}>
                    <Divider vertical inverted />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <h4 className="jobadvertisementCompanyName">
                      {jobAdvertisement.city?.country?.countryName} /{" "}
                      {jobAdvertisement.city?.cityName}
                    </h4>
                  </Grid.Column>
                </Grid>

                <Divider style={{ marginTop: "30px" }} />
                <Grid columns={2} divided>
                  <Grid.Row>
                    <Grid.Column>
                      <Icon
                        size="large"
                        name="book"
                        className="jobadvertisementIcon"
                      />
                      <h3 className="jobAdvertisementWorkingHour">
                        {jobAdvertisement.workingHour?.workingHour}
                      </h3>
                    </Grid.Column>
                    <Grid.Column>
                      <Icon
                        size="large"
                        name="computer"
                        className="jobAdvertisementIcon2"
                      />
                      <h3 className="jobAdvertisementWorkingType">
                        {jobAdvertisement.workingType?.workingType}
                      </h3>
                    </Grid.Column>
                    <Grid.Column>
                      <Icon
                        size="large"
                        name="users"
                        className="jobAdvertisementIcon3"
                      />
                      <h3 className="jobAdvertisementCount">
                        {jobAdvertisement.numberOfPosition}
                      </h3>
                    </Grid.Column>
                    <Grid.Column>
                      <Icon
                        size="large"
                        name="calendar alternate outline"
                        className="jobadvertisementIcon4"
                      />
                      <h3 className="jobAdvertisementLastDate">
                        {jobAdvertisement.lastDate}
                      </h3>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                  <Grid.Column>
                      <Icon
                        size="large"
                        name="money bill alternate outline"
                        className="jobadvertisementIcon"
                      />
                      <h3 className="jobAdvertisementWorkingHour">
                        {jobAdvertisement.minSalary} ₺
                      </h3>
                    </Grid.Column>
                    <Grid.Column>
                      <Icon
                        size="large"
                        name="money bill alternate outline"
                        className="jobAdvertisementIcon2"
                      />
                      <h3 className="jobAdvertisementWorkingType">
                        {jobAdvertisement.maxSalary} ₺
                      </h3>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>

                <p className="jobAdvertisementDescription">
                  {jobAdvertisement.description}
                </p>
                <Button size="massive" color="facebook" style={{marginTop:"15px"}}>Başvur</Button>
              </Segment>
            </Grid.Column>
            <Grid.Column width={3} />
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
