import React from "react";
import {
  Segment,
  Container,
  Grid,
  Checkbox,
  Button,
  Image,
  Divider,
} from "semantic-ui-react";
import "./auth.css";
import { Link, useHistory } from "react-router-dom";
import { Formik,Form } from "formik";
import * as Yup from "yup";
import FormTextInput from "../../utilities/customFormControls/FormTextInput";
import AuthService from "../../services/authService";
import { toast } from "react-toastify"

export default function EmployerRegister() {

  const history = useHistory();

  const initialValues = {
    companyName: "",
    webSite: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwordRep: "",
  };

  const schema = Yup.object({
    companyName: Yup.string().required("Firma adı zorunludur"),
    webSite: Yup.string().required("Web sitesi zorunludur"),
    email: Yup.string().required("Email zorunludur"),
    phoneNumber: Yup.string().required("Telefon numarası zorunludur").max(11),
    password: Yup.string().required("Şifre zorunludur"),
    passwordRep: Yup.string().required("Şifre tekrarı zorunludur"),
  });



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
                <Formik
                  initialValues={initialValues}
                  validationSchema={schema}
                  onSubmit={(values)=>{
                    let authService = new AuthService()
                    authService.registerEmployer(values).then(toast.success("Başarıyla kayıt olundu. Hrms kontrolünden sonra aktif olabileceksiniz"))
                    alert("İş ilanı eklendi, personelin onayı ardından listelenecektir");
                    history.push("/jobadvertisements")
                  }}
                >
                  <Form className="ui form">
                    <h2 className="registerEmployerHeader">
                      Hemen Kayıt Olun!
                    </h2>

                    <div className="registerEmployerDiv">
                      <FormTextInput
                        placeholder="Şirket Adı"
                        name="companyName"
                        style={{ width: "20em" }}
                      ></FormTextInput>
                      
                      <FormTextInput
                        placeholder="Telefon Numarası"
                        name="phoneNumber"
                        style={{ width: "20em", marginTop: "1em" }}
                      ></FormTextInput>
                      
                      <FormTextInput
                        placeholder="Web Sitesi"
                        name="webSite"
                        style={{ width: "20em", marginTop: "1em" }}
                      ></FormTextInput>
                      
                      <FormTextInput
                        placeholder="Email"
                        name="email"
                        style={{ width: "20em", marginTop: "1em" }}
                      ></FormTextInput>
                      
                      <FormTextInput
                        placeholder="Şifre"
                        name="password"
                        type="password"
                        style={{ width: "20em", marginTop: "1em" }}
                      ></FormTextInput>
                     
                      <FormTextInput
                        placeholder="Şifre Tekrarı"
                        name="passwordRep"
                        type="password"
                        style={{ width: "20em", marginTop: "1em" }}
                      ></FormTextInput>
                     
                        <Checkbox
                          className="registerEmployerCheckBox"
                          label="Bilgilerimin Hrms'ye göderilmesini kabul 
                      ediyorum."
                        />
                        <Checkbox
                          className="registerEmployerCheckBox2"
                          label="Kişisel verilerimin işlenmesine ait KVKK aydınlatma metnini okudum."
                        />
                    </div>
                    <Button
                      className="registerEmployerButton"
                      type="submit"
                      color="blue"
                    >Kayıt Ol</Button>
                  </Form>
                </Formik>
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
