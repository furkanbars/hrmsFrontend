import React from "react";
import { Button, Menu, Dropdown } from "semantic-ui-react";
import "./Navi";
import { Link } from "react-router-dom";

export default function SignedOut(props) {
  const options = [
    { key: 1, text: "Giriş Yap", value: 1 },
    { key: 1, text: "Kayıt Ol", value: 2 },
  ];

  return (
    <div>
      <Menu.Item>
        <Button.Group>
          <Button as={Link} to={"/login"} onClick={props.signIn}>
            Giriş Yap
          </Button>
          <Button.Or text="or" />
          <Button as={Link} to={"/register/jobseeker"} positive>
            Kayıt Ol
          </Button>
        </Button.Group>
        <Menu compact style={{position:"relative",float:"left", left:"15px",marginRight:"20px", backgroundColor:"rgb(  52, 73, 94  )"}} >
          <Dropdown
            className="employernavidropdown"
            text="İş veren"
            style={{ marginLeft: "0.3em" ,color:"white"}}
            simple
            item>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/login/employer">Giriş Yap</Dropdown.Item>
                <Dropdown.Item as={Link} to="/register/employer">Kayıt Ol</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </Menu>
      </Menu.Item>
    </div>
  );
}

{
  /* <Button inverted color="twitter" style={{ marginLeft: "0.7em" }}>
İş veren
</Button> */
}
