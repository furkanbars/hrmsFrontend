import React from "react";
import {
  Segment,
  Container,
  Grid,
  Checkbox,
  Button,
  Image,
  Icon,
  Divider,
} from "semantic-ui-react";
import "./auth.css";
import { Link, useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormTextInput from "../../utilities/customFormControls/FormTextInput";
import AuthService from "../../services/authService";
import { toast } from "react-toastify"

export default function JobSeekerRegister() {

  const history = useHistory()

  const initialValues = {
    firstName: "",
    lastName: "",
    identityNumber: "",
    birthDate: "",
    email: "",
    password: "",
    passwordRep: "",
  };

  const schema = Yup.object({
    firstName: Yup.string().required("İsim zorunludur"),
    lastName: Yup.string().required("Soyisim zorunludur"),
    identityNumber: Yup.string().required("Tc kimlik numarası zorunludur"),
    birthDate: Yup.string().required("Doğum yılı zorunludur"),
    email: Yup.string().required("Email zorunludur"),
    password: Yup.string().required("Şifre zorunludur"),
    passwordRep: Yup.string().required("Şifre tekrarı zorunludur"),
  });

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
              <h1 className="registerJobSeekerImageHeader">
                Türkiye'nin en çok tercih edilen aday takip sistemi!
              </h1>
              <Divider style={{marginLeft:"-19em", marginTop:"1em"}}></Divider>
              <h5 className="registerJobSeekerSpot">
                Siz de hemen kaydolun, şirketinizi bulup aradığınız işinize kavuşun. 
              </h5>
              {/* <Icon size="big" className="icon1" name="arrow right"></Icon><h2 Icon="arrow right">İlk ay ücretsiz!</h2>
              <Icon size="big" className="icon2" name="arrow right"></Icon> */}
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment raised className="registerJobSeekerSegment">
                <Formik
                  initialValues={initialValues}
                  validationSchema={schema}
                  onSubmit={(values) => {
                    let authService=new AuthService();
                    console.log(values);
                    authService.retgisterJobSeeker(values).then(toast.success("Başarıyla kayıt olundu")).catch((error) =>toast.error(error))

                    //alert("Kayıt olundu")

                    //history.push("/jobadvertisements")
                  }}
                >
                  <Form className="ui form">
                    <h2 className="registerJobSeekerHeader">
                      Hemen Kayıt Olun!
                    </h2>
                    <div className="registerJobSeekerDiv">
                      <FormTextInput
                        name="firstName"
                        placeholder="Adınız"
                        style={{ width: "20em" }}
                      ></FormTextInput>

                      <FormTextInput
                        name="lastName"
                        placeholder="Soyadınız"
                        style={{ width: "20em", marginTop:"1em" }}
                      ></FormTextInput>
                      <FormTextInput
                        name="identityNumber"
                        placeholder="Tc Kimlik No"
                        style={{ width: "20em", marginTop:"1em" }}
                      ></FormTextInput>

                      <FormTextInput
                        name="birthDate"
                        placeholder="Doğum yılı"
                        style={{ width: "20em", marginTop:"1em" }}
                      ></FormTextInput>

                      <FormTextInput
                        name="email"
                        placeholder="Email"
                        style={{ width: "20em", marginTop:"1em" }}
                      ></FormTextInput>
                      
                      <FormTextInput
                        name="password"
                        placeholder="Şifre"
                        type="password"
                        style={{ width: "20em", marginTop:"1em" }}
                      ></FormTextInput>
                      <FormTextInput
                        name="passwordRep"
                        placeholder="Şifre Tekrarı"
                        type="password"
                        style={{ width: "20em", marginTop:"1em" }}
                      ></FormTextInput>
                      <Checkbox
                        className="registerJobSeekerCheckBox"
                        label="Bilgilerimin Hrms'ye göderilmesini kabul 
                      ediyorum."
                      />

                        <Checkbox
                          className="registerJobSeekerCheckBox2"
                          label="Kişisel verilerimin işlenmesine ait KVKK aydınlatma metnini okudum."
                        />
                    </div>
                    <Button
                      className="registerJobSeekerButton"
                      type="submit"
                      color="blue"
                    >
                      Kayıt Ol
                    </Button>
                  </Form>
                </Formik>
              </Segment>
              <h3 className="alreadyAccount">Hesabın var mı?</h3>
              <h3 className="alreadyAccountSignIn">
                <Link as={Link} to="/login">
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
