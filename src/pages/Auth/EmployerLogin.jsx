import React from "react";
import {
  Segment,
  Form,
  Checkbox,
  Button,
  Grid,
  Container,
  Divider,
  Image,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function EmployerLogin() {
  return (
    <div>
      <div className="loginEmployerContainer">
        <Grid>
          <Grid.Row>
            <Grid.Column width={11}>
              <Image className="loginEmployerImage" size="large" src="https://nosykemarketing.com/wp-content/uploads/2019/07/Business-Transparent-PNG.png" />
              <h1 className="loginEmployerSpot">Kullanıcıların memnun olduğu platform.</h1>
              <Container>
                  <Divider className="loginEmployerSpotDivider"></Divider>
              </Container>
              <h5 className="loginEmployerSpot2">Siz de hemen kaydolun, şirkenizin gücüne güç katacak çalışanlarınızı seçin.</h5>
            </Grid.Column>
            <Grid.Column width={3}>
              <Segment raised className="loginEmployerSegment">
                <h2 className="loginEmployerHeader">Giriş</h2>
                <Form>
                  <Form.Field>
                    <input placeholder="Email" />
                  </Form.Field>
                  <Form.Field>
                    <input placeholder="Şifre" />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox className="loginCheckBox" label="Beni hatırla" />
                    <a href="#" className="forgottenPassword">
                      Şifreni mi unuttun?
                    </a>
                  </Form.Field>
                  <Form.Field>
                    <Button color="blue" className="loginButton" type="submit">
                      Giriş Yap
                    </Button>
                  </Form.Field>
                </Form>
                <Divider className="loginDivider" horizontal>
                  Or
                </Divider>
                <h4 className="beRegisterText">
                  Eğer üye değilseniz hemen üye olup şirkeniz için uygun kişiyi
                  bulabilirsiniz.
                </h4>
                <Button as={Link} to="/register/employer" inverted color="blue" className="employerRegisterButton" type="submit">
                  Kayıt Ol
                </Button>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}

{
  /* <h3>
                    <Link
                      as={Link}
                      to="/register/employer"
                      className="loginNewAccount"
                    >
                      Hemen Kayıt Ol
                    </Link>
                  </h3> */
}
