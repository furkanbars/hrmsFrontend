import React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";
import "./Navi";

export default function SignIn(props) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          src="https://mrandmrs50plus.com/wp-content/uploads/2018/04/Sean-Patrick-150x150.jpg"
        />
         <Dropdown text="Abdullah Furkan Barış" simple item>
        <Dropdown.Menu >
          <Dropdown.Item text="Profil" icon="info" />
          <Dropdown.Item text="Ayarlar" icon="setting" />
          <Dropdown.Item  position="right"
            onClick={props.signOut}
            text="Çıkış yap"
            icon="sign-out"
          />
        </Dropdown.Menu>
      </Dropdown>
      </Menu.Item>
     
    </div>
  );
}
