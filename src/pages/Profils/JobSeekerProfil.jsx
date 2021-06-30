import React from "react";
import { Grid, Segment, Image, Header } from "semantic-ui-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CvService from "../../services/aboutCv/cvService.js";
import "./Profils.css";

export default function JobSeekerProfil() {
  let id = 1;
  const [jobSeeker, setJobSeeker] = useState([]);

  useEffect(() => {
    let cvService = new CvService();
    console.log(id);
    cvService
      .getByJobSeekerId(id)
      .then((response) => setJobSeeker(response.data.data));
    console.log(jobSeeker);
  }, []);

  return (
    <div className="profilJobSeekerContainer">
      <Grid>
        <Grid.Row>
          <Grid.Column width={2} />
          <Grid.Column width={4}>
            <Segment raised className="profilJobSeekerLeftbar">
              <Image
                src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                style={{ width: "200px", left: "110px", top: "30px" }}
                circular
              />
              <div className="header">
                <Header >
                  <h1 className="profilJobSeekerHeaderName">
                    {jobSeeker.jobSeeker?.firstName}{" "}
                    {jobSeeker.jobSeeker?.lastName}
                  </h1>
                </Header>
              </div>
              <h4 className="email">{jobSeeker.jobSeeker?.email}</h4>

              <div className="leftbarOptions">
                <Segment><h4 className="barOption">İLETİŞİM BİLGİLERİ</h4></Segment>
                <Segment><h4 className="barOption">İŞ DENEYİMLERİ</h4></Segment>
                <Segment><h4 className="barOption">EĞİTİM BİLGİLERİ</h4></Segment>
                <Segment><h4 className="barOption">YABANCI DİLLER</h4></Segment>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment raised className="profilJobSeekerMainArea"></Segment>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>
      </Grid>
    </div>
  );
}
