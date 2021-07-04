import React from "react";
import { Grid, Segment, Image, Header, Icon, Divider } from "semantic-ui-react";
import UpdateEducationModal from "../../modals/cvUpdate/UpdateEducationModal";
import "./cvInfo.css"

export default function CvEducationInfo({ educations }) {


  function educationCountControl() {
    if (educations?.length > 1) {
      return true;
    }
    return false;
  }


  return (
    <div>
      <Segment raised className="profilJobSeekerEducation">
        <Header>
          <h1 className="education">Eğitim</h1>
        </Header>

        {educations?.map((education) => (
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <Image
                  style={{ marginLeft: "20px", width: "100px" }}
                  src="https://cdn.freelogovectors.net/wp-content/uploads/2020/07/iskenderun-teknik-universitesi-logo.png"
                />
                <h3 style={{ textAlign:"left",marginLeft: "45px", margin: "3px" }}>
                  {education.graduate?.name}
                </h3>
              </Grid.Column>
              <Grid.Column width={6}>
                <label style={{ marginLeft: "-225px", textAlign: "left" }}>
                  Okul Adı
                </label>
                <h3 style={{ margin: "0px", textAlign: "left" }}>
                  {education.school?.name}
                </h3>
                <div style={{ margin: "5px" }}>
                  <label style={{ marginLeft: "-230px" }}>Fakülte</label>
                  <h3
                    style={{
                      margin: "0px",
                      textAlign: "left",
                      marginLeft: "-5px",
                    }}
                  >
                    {education.faculty?.name}
                  </h3>
                </div>

                <label style={{ marginLeft: "-238px" }}>Bölüm</label>
                <h3 style={{ margin: "0px", textAlign: "left" }}>
                  {education.department?.departmentName}
                </h3>
              </Grid.Column>
              <Grid.Column width={5}>
                <div style={{ marginLeft: "30px" }}>
                  <label style={{ marginLeft: "-96px", textAlign: "left" }}>
                    Başlangıç Tarihi
                  </label>
                  <h3
                    style={{
                      margin: "0px",
                      textAlign: "left",
                      marginLeft: "3px",
                    }}
                  >
                    {education.startDate}
                  </h3>
                  <div style={{ margin: "7px" }}>
                    <label style={{ marginLeft: "-120px", textAlign: "left" }}>
                      Bitiş Tarihi
                    </label>
                    <h3 style={{ margin: "0px", textAlign: "left" }}>
                      {education.endDate}
                    </h3>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column>
                <Icon  onClick={<UpdateEducationModal></UpdateEducationModal>} color="grey" name="edit"></Icon>
              </Grid.Column>
            </Grid.Row>
            {educationCountControl() === true ? <Divider></Divider> : null}
          </Grid>
        ))}
      </Segment>
    </div>
  );
}
