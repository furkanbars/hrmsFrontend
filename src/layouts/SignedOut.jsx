import React from "react";
import { Button, Divider, Menu } from "semantic-ui-react";
import "./Navi";

export default function SignedOut(props) {
  return (
    <div>
        <Menu.Item>
          <Button.Group>
            <Button onClick={props.signIn}>Giriş Yap</Button>
            <Button.Or text="or" />
            <Button positive>Kayıt Ol</Button>
          </Button.Group>
          <Button inverted color="twitter"  style={{marginLeft:"0.7em"}}>
            İş veren
          </Button>
        </Menu.Item>
    </div>
  );
}
