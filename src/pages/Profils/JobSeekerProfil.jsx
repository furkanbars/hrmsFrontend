import React from "react";
import { Grid, Segment, Image, Header, Icon, Divider } from "semantic-ui-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CvService from "../../services/aboutCv/cvService.js";
import "./Profils.css";
import CvEducationInfo from "../aboutCv/CvEducationInfo"
import CvExperianceInfo from "../aboutCv/CvExperianceInfo"
import CvLanguageInfo from "../aboutCv/CvLanguageInfo"

export default function JobSeekerProfil() {
  let id = 1;
  const [jobSeekerCv, setJobSeekerCv] = useState([]);

  useEffect(() => {
    let cvService = new CvService();
    cvService
      .getByJobSeekerId(id)
      .then((response) => setJobSeekerCv(response.data.data));
  }, []);

  function educationCountControl(){
    console.log(jobSeekerCv.educations?.length)
    if(jobSeekerCv.educations?.length>1){
      return true;
    }
    return false;
  }


  return (
    <div className="profilJobSeekerContainer">
      <Grid>
        <Grid.Row>
          <Grid.Column width={3} />
          <Grid.Column width={3}>
            <Segment raised className="profilJobSeekerLeftbar">
              <Image
                src="https://scontent.fyei2-1.fna.fbcdn.net/v/t1.6435-1/p200x200/73541664_2988212794540270_97768543877070848_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=7206a8&_nc_ohc=cKbsHpfI8igAX-90uZF&_nc_ht=scontent.fyei2-1.fna&tp=6&oh=5e199c3453c42b41a7380bdecf91b3df&oe=60E66A5B"
                style={{ width: "200px", left: "55px", top: "30px" }}
                circular
              />
              <div className="header">
                <Header>
                  <h1 className="profilJobSeekerHeaderName">
                    {jobSeekerCv.jobSeeker?.firstName}{" "}
                    {jobSeekerCv.jobSeeker?.lastName}
                  </h1>
                </Header>
              </div>

              <div className="leftbarOptions">
                <div style={{ marginLeft: "-278px", opacity: "0.7" }}>
                  <Icon name="mail"></Icon>
                  <label className="emailLabel" style={{ opacity: "0.7" }}>
                    Email
                  </label>
                </div>
                <h3 className="email">{jobSeekerCv.jobSeeker?.email}</h3>

                <div style={{ marginLeft: "-231px", opacity: "0.7" }}>
                  <Icon name="birthday"></Icon>
                  <label className="birthDateLabel" style={{ opacity: "0.7" }}>
                    Doğum Günü
                  </label>
                </div>
                <h3 className="birthDate">
                  {jobSeekerCv.jobSeeker?.birthDate}
                </h3>

                <div style={{ marginLeft: "-280px", opacity: "0.7" }}>
                  <Icon name="location arrow"></Icon>
                  <label className="cityLabel" style={{ opacity: "0.7" }}>
                    Şehir
                  </label>
                </div>
                <h3 className="cityName">
                  {jobSeekerCv.jobSeeker?.city?.cityName}
                </h3>

                <div style={{ marginLeft: "-228px", opacity: "0.7" }}>
                  <Icon name="user circle"></Icon>
                  <label className="cityLabel" style={{ opacity: "0.7" }}>
                    Sosyal Medya
                  </label>
                </div>
                {jobSeekerCv.githubLink ? (
                  <h3 className="github">Github: {jobSeekerCv.githubLink}</h3>
                ) : null}
                {jobSeekerCv.linkedinLink ? (
                  <h3 className="lenkedn">
                    Linkedn: {jobSeekerCv.linkedinLink}
                  </h3>
                ) : null}
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column width={7}>
            <CvEducationInfo educations={jobSeekerCv.educations}></CvEducationInfo>
            <CvExperianceInfo experiences={jobSeekerCv.experiences}></CvExperianceInfo>
            <CvLanguageInfo languages={jobSeekerCv.cvLanguages}></CvLanguageInfo>
          </Grid.Column>
          <Grid.Column width={3} />
        </Grid.Row>
      </Grid>
    </div>
  );
}
