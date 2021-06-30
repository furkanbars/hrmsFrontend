import React from "react";
import {
  Segment,
  Container,
  Grid,
  Form,
  Checkbox,
  Button,
  Image,
  Icon,
  Divider,
} from "semantic-ui-react";
import "./auth.css";
import { Link } from "react-router-dom";

export default function EmployerRegister() {
  return (
    <div>
      <Container className="registerEmployerContainer">
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              <Image
                className="registerEmployerImage"
                size="large"
                src="https://nosykemarketing.com/wp-content/uploads/2019/07/Business-Transparent-PNG.png"
              />
              <h1 className="registerEmployerSpot">
                Kullanıcıların memnun olduğu platform.
              </h1>
              <Container>
                <Divider className="registerEmployerSpotDivider"></Divider>
              </Container>
              <h5 className="loginEmployerSpot2">
                Siz de hemen kaydolun, şirkenizin gücüne güç katacak
                çalışanlarınızı seçin.
              </h5>
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment raised className="registerEmployerSegment">
                <Form>
                  <h2 className="registerEmployerHeader">Hemen Kayıt Olun!</h2>
                  <div className="registerEmployerDiv">
                    <Form.Field>
                      <input
                        placeholder="Şirket Adı"
                        style={{ width: "20em" }}
                      />
                    </Form.Field>
                    <Form.Field>
                      <input
                        placeholder="Telefon Numarası"
                        style={{ width: "20em" }}
                      />
                    </Form.Field>
                    <Form.Field>
                      <input
                        placeholder="Web Sitesi"
                        style={{ width: "20em" }}
                      />
                    </Form.Field>
                    <Form.Field>
                      <input placeholder="Email" style={{ width: "20em" }} />
                    </Form.Field>
                    <Form.Field>
                      <input placeholder="Şifre" style={{ width: "20em" }} />
                    </Form.Field>
                    <Form.Field>
                      <input
                        placeholder="Şifre Tekrarı"
                        style={{ width: "20em" }}
                      />
                    </Form.Field>
                    <Form.Field>
                      <Checkbox
                        className="registerEmployerCheckBox"
                        label="Bilgilerimin Hrms'ye göderilmesini kabul 
                      ediyorum."
                      />
                    </Form.Field>
                    <Form.Field>
                      <Checkbox
                        className="registerEmployerCheckBox2"
                        label="Kişisel verilerimin işlenmesine ait KVKK aydınlatma metnini okudum."
                      />
                    </Form.Field>
                  </div>
                  <Button
                    className="registerEmployerButton"
                    type="submit"
                    color="blue"
                  >
                    Kayıt Ol
                  </Button>
                </Form>
              </Segment>
              <h3 className="alreadyAccount">Hesabın var mı?</h3>
              <h3 className="alreadyAccountSignIn">
                <Link as={Link} to="/login/employer">
                  Giriş yap
                </Link>
              </h3>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
