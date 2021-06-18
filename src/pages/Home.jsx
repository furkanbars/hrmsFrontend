import React, { useState, useEffect } from "react";
import {
  Image,
  Header,
  Grid,
  Container,
  Card,
  Icon,
  Button
} from "semantic-ui-react";
import JobPositionService from "../services/jobPositionService";
import CityService from "../services/cityService";

export default function Home() {
  const [jobs, setJobs] = useState([]);

  const [cities, setCities] = useState([]);

  useEffect(() => {
    let jobService = new JobPositionService();
    jobService.getPositions().then((response) => setJobs(response.data.data));

    let cityService = new CityService();
    cityService.getCities().then((response) => setCities(response.data.data));
  }, []);

  return (
    <div className="homeDiv">
      <div className="myContainer">
        <Header style={{ paddingTop: "9em" }}>
          <h1 className="myHeader">İŞİNİ SEÇ HEMEN BAŞLA</h1>
          <h3 className="myPar">
            Yeni kariyer hedefi belirle, iş başvurusunda bulun ve çalışma imkanı
            yakala.
          </h3>
        </Header>
        <Button size="big" color="green" animated style={{width:"15em",height:"4em",top:"2em"}}>
          <Button.Content visible className="startButton">BAŞLA</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
        <Container>
          <Grid style={{ paddingTop: "20em" }}>
            <Grid.Row>
              <Grid.Column width={2}></Grid.Column>
              {jobs.map((job) => (
                <Grid.Column width={4}>
                  <Card raised="true" style={{}}>
                    <Image
                      src="https://im0-tub-com.yandex.net/i?id=4693f7554d3860ea91779cc623c22118&n=13"
                      wrapped
                      ui={false}
                    />
                    <Card.Content >
                      <Card.Header>{job.name}</Card.Header>
                    </Card.Content>
                    <Card.Content extra >
                      <a>
                        <Icon name="user" />
                        İş İlanlarına git
                      </a>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              ))}
              <Grid.Column width={2}></Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

// {jobs.map((job) => (  ))}
//   <Image src="https://www.resimyukle.org/images/2021/06/14/fc1783ea4a9b71d79f4dccfb40e7efda.png" fluid />
//   <Image src="../image.png" fluid />
