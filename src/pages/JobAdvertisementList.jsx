import React, { useState, useEffect } from "react";
import { Button, Card, Image, Grid } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";

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
      {jobAdvertisements.map((jobAdvertisement) => (
        <Card.Group>
          <Card style={{ width: "90em" }}>
            <Card.Content>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={2}>
                    <Image
                      floated="left"
                      size="small"
                      src="https://images.squarespace-cdn.com/content/5a731e85f6576e32b715abc8/1579896824767-9MU5NQSUV2QV9IFT0VO6/Screen+Shot+2020-01-24+at+3.13.03+PM.png?content-type=image%2Fpng"
                    />
                  </Grid.Column>
                  <Grid.Column width={14}>
                    <div style={{marginLeft:"-5em"}}>
                      <Card.Header>
                        {jobAdvertisement.employer.companyName}
                      </Card.Header>
                      <Card.Meta>{jobAdvertisement.city.cityName}</Card.Meta>
                      <Card.Description>
                        {jobAdvertisement.description}
                        <strong> </strong>
                      </Card.Description>
                    </div>
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
    </div>
  );
}
