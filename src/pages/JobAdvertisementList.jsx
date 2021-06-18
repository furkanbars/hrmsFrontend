import React, { useState, useEffect } from "react";
import { Button, Card, Image, Grid, Header,Container } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import CityList from "../pages/CityList";

export default function JobAdvertisementList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((response) => setJobAdvertisements(response.data.data));
    console.log(jobAdvertisements);
  }, []);

  return (
    <div>
      <Container className="main">
        <Header as="h2" textAlign="center" style={{ marginTop: "3em" }}>
          İş İlanları
        </Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <CityList />
            </Grid.Column>
            <Grid.Column width={12}>
              {jobAdvertisements.map((jobAdvertisement) => (
                <Card.Group>
                  <Card raised="true" style={{ width: "90em" }}>
                    <Card.Content>
                      <Grid>
                        <Grid.Row>
                          <Grid.Column width={2}>
                            <Image
                              floated="left"
                              style={{ marginTop: "15px" }}
                              size="small"
                              src="https://images.squarespace-cdn.com/content/5a731e85f6576e32b715abc8/1579896824767-9MU5NQSUV2QV9IFT0VO6/Screen+Shot+2020-01-24+at+3.13.03+PM.png?content-type=image%2Fpng"
                            />
                          </Grid.Column>
                          <Grid.Column width={12}>
                            <div style={{ marginLeft: "1em" }}>
                              <Card.Header>
                                <h3>
                                  {jobAdvertisement.employer.companyName}{" "}
                                </h3>
                              </Card.Header>
                              <Card.Meta>
                                {jobAdvertisement.city.cityName}{" "}
                              </Card.Meta>
                              <Card.Description textAlign="center">
                                {jobAdvertisement.description}
                              </Card.Description>
                            </div>
                          </Grid.Column>
                          <Grid.Column width={2}>
                            <Card.Meta style={{ marginTop: "25px" }}>
                              {jobAdvertisement.lastDate}{" "}
                            </Card.Meta>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Button basic color="green">
                          Başvur
                        </Button>
                        <Button basic color="blue">
                          İş İlanına Git
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                </Card.Group>
              ))}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
