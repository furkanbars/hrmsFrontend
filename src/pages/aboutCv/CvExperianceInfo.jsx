import React from "react";
import { Grid, Segment, Image, Header, Icon, Divider } from "semantic-ui-react";
import "./cvInfo.css";

export default function CvExperianceInfo({ experiences }) {
  function calculateDate(firstDate, lastDate) {
    let date1 = new Date(firstDate);
    let date2 = new Date(lastDate);
    let result = date2.getMonth() - date1.getMonth();
    return result + " ay";
  }

  function experienceCountControl() {
    if (experiences?.length > 1) {
      return true;
    }
    return false;
  }

  return (
    <div>
      <Segment
        raised
        style={{ marginTop: "20px" }}
        className="profilJobSeekerExperience"
      >
        <Header>
          <h1 className="education">İş Deneyimleri</h1>
        </Header>

        {experiences?.map((experience) => (
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <Image
                  style={{ marginLeft: "20px", width: "100px" }}
                  src="https://im0-tub-com.yandex.net/i?id=4dc558532e0de724b0b51cf471fe6bbe&n=13"
                />
                <div className="date" style={{marginLeft: "55px",
                      margin: "3px"}}>
                  <h3
                    style={{
                      textAlign: "left"
                    }}
                  >
                    {calculateDate(experience.startDate, experience.endDate)}
                  </h3>
                </div>
              </Grid.Column>
              <Grid.Column width={6}>
                <label style={{ marginLeft: "-225px", textAlign: "left" }}>
                  Pozisyon
                </label>
                <h3 style={{ margin: "0px", textAlign: "left" }}>
                  {experience.jobPosition?.name}
                </h3>
                <div style={{ margin: "5px" }}>
                  <label style={{ marginLeft: "-217px" }}>Firma Adı</label>
                  <h3
                    style={{
                      margin: "0px",
                      textAlign: "left",
                      marginLeft: "-5px",
                    }}
                  >
                    {experience.companyName}
                  </h3>
                </div>

                <label style={{ marginLeft: "-181px" }}>Başlangıç Tarihi</label>
                <h3 style={{ margin: "0px", textAlign: "left" }}>
                  {experience.startDate}
                </h3>
              </Grid.Column>
              <Grid.Column width={6}>
                <div style={{ marginLeft: "30px" }}>
                  <label style={{ marginLeft: "-205px", textAlign: "left" }}>
                    Şehir
                  </label>
                  <h3
                    style={{
                      margin: "0px",
                      textAlign: "left",
                      marginLeft: "6px",
                    }}
                  >
                    {experience.city.cityName}
                  </h3>

                  <div style={{ margin: "7px" }}>
                    <label style={{ marginLeft: "-155px", textAlign: "left" }}>
                      Çalışma Şekli
                    </label>
                    <h3 style={{ margin: "0px", textAlign: "left" }}>
                      {experience.workType?.workingType}
                    </h3>
                  </div>

                  <div style={{ margin: "7px" }}>
                    <label style={{ marginLeft: "-168px", textAlign: "left" }}>
                      Bitiş Tarihi
                    </label>
                    <h3 style={{ margin: "0px", textAlign: "left" }}>
                      {experience.endDate}
                    </h3>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column width={4} />
              <Grid.Column width={12}>
                <div style={{ margin: "7px" }}>
                  <label style={{ marginLeft: "-520px", textAlign: "left" }}>
                    Açıklama
                  </label>
                  <h4
                    style={{
                      margin: "0px",
                      textAlign: "left",
                      marginLeft: "-5px",
                    }}
                  >
                    {experience.description}
                  </h4>
                </div>
              </Grid.Column>
            </Grid.Row>
            {experienceCountControl() === true ? <Divider></Divider> : null}
          </Grid>
        ))}
      </Segment>
    </div>
  );
}
