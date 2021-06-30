import React from "react";
import {
  Segment,
  Form,
  Checkbox,
  Button,
  Grid,
  Container,
  Divider
} from "semantic-ui-react";
import "./auth.css";
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div>
      <div className="loginContainer">
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width={5} />
              <Grid.Column width={5}>
                <Segment raised className="loginSegment">
                  <h2 className="loginHeader">Giriş yap</h2>
                  <Form>
                    <Form.Field>
                      <input placeholder="Email" />
                    </Form.Field>
                    <Form.Field>
                      <input placeholder="Şifre" />
                    </Form.Field>
                    <Form.Field>
                      <Checkbox
                        className="loginCheckBox"
                        label="Beni hatırla"
                      />
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
                  <Divider className="loginDivider" horizontal>Or</Divider>
                  <h3 ><Link as={Link} to="/register/jobseeker" className="loginNewAccount">Hemen Kayıt Ol</Link></h3>
                </Segment>
              </Grid.Column>
              <Grid.Column width={5} />
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
