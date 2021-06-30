import React from "react";
import {
  Segment,
  Container,
  Grid,
  Form,
  Checkbox,
  Button,
  Image,
  Icon
} from "semantic-ui-react";
import "./auth.css";
import { Link } from "react-router-dom"

export default function JobSeekerRegister() {
  return (
    <div>
      <Container className="registerJobSeekerContainer">
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              <Image
                className="registerJobSeekerImage"
                src="https://cdn.pixabay.com/photo/2014/04/02/10/16/fire-303309_1280.png"
                size="small"
              />
              <h1 className="registerJobSeekerImageHeader">Türkiye'nin en çok tercih edilen aday takip sistemi!</h1>
              {/* <Icon size="big" className="icon1" name="arrow right"></Icon><h2 Icon="arrow right">İlk ay ücretsiz!</h2>
              <Icon size="big" className="icon2" name="arrow right"></Icon> */}
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment raised className="registerJobSeekerSegment">
                <Form>
                  <h2 className="registerJobSeekerHeader">Hemen Kayıt Olun!</h2>
                  <div className="registerJobSeekerDiv">
                    <Form.Field>
                      <input placeholder="Adınız" style={{ width: "20em" }} />
                    </Form.Field>
                    <Form.Field>
                      <input
                        placeholder="Soyadınız"
                        style={{ width: "20em" }}
                      />
                    </Form.Field>
                    <Form.Field>
                      <input
                        placeholder="Tc Kimlik No"
                        style={{ width: "20em" }}
                      />
                    </Form.Field>
                    <Form.Field>
                      <input placeholder="Email" style={{ width: "20em" }} />
                    </Form.Field>
                    <Form.Field>
                      <input
                        placeholder="Doğum Tarihi"
                        style={{ width: "20em" }}
                      />
                    </Form.Field>
                    <Form.Field>
                      <input
                        placeholder="Şifre"
                        style={{ width: "20em" }}
                      />
                    </Form.Field>
                    <Form.Field>
                      <input
                        placeholder="Şifre Tekrarı"
                        style={{ width: "20em" }}
                      />
                    </Form.Field>
                    <Form.Field>
                      <Checkbox
                        className="registerJobSeekerCheckBox"
                        label="Bilgilerimin Hrms'ye göderilmesini kabul 
                      ediyorum."
                      />
                    </Form.Field>
                    <Form.Field>
                      <Checkbox
                        className="registerJobSeekerCheckBox2"
                        label="Kişisel verilerimin işlenmesine ait KVKK aydınlatma metnini okudum."
                      />
                    </Form.Field>
                  </div>
                  <Button
                    className="registerJobSeekerButton"
                    type="submit"
                    color="blue"
                  >
                    Kayıt Ol
                  </Button>
                </Form>
              </Segment>
              <h3 className="alreadyAccount">Hesabın var mı?</h3>
              <h3 className="alreadyAccountSignIn"><Link as={Link} to="/login">Giriş yap</Link></h3>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
