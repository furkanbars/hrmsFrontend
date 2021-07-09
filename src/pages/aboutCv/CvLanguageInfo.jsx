import React from 'react'
import { Grid, Segment, Image, Header, Icon, Divider } from "semantic-ui-react";
import "./cvInfo.css";

export default function CvLanguageInfo({cvLanguages}) {

    function cvLanguageCountControl() {
        if (cvLanguages?.length > 1) {
          return true;
        }
        return false;
      }

    return (
        <div>
            <Segment raised style={{marginTop:"20px"}} className="profilJobSeekerExperience">
        <Header>
          <h1 className="education">Yabancı Dil</h1>
        </Header>

        {cvLanguages?.map((cvLanguage) => (
          <Grid>
            <Grid.Row>
              
              <Grid.Column width={6}>
                <label style={{ marginLeft: "-225px", textAlign: "left" }}>
                  Dil
                </label>
                <h3 style={{ margin: "0px", textAlign: "left" }}>
                  {cvLanguage.language?.languageName}
                </h3>
                
              </Grid.Column>
              <Grid.Column width={6}>
                <div style={{ marginLeft: "30px" }}>
                  <label style={{ marginLeft: "-205px", textAlign: "left" }}>
                    Seviye
                  </label>
                  <h3
                    style={{
                      margin: "0px",
                      textAlign: "left",
                      marginLeft: "6px",
                    }}
                  >
                    {cvLanguage.languageLevel}
                  </h3>
                </div>
              </Grid.Column>
            </Grid.Row>
            {cvLanguageCountControl() === true ? <Divider></Divider> : null}
          </Grid>
        ))}
      </Segment>
        </div>
    )
}
