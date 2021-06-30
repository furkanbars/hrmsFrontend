import React, { useState } from "react";
import { Container, Menu, Button } from "semantic-ui-react";
import { useHistory } from "react-router"
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { Link } from "react-router-dom"

export default function Navi() {
    const [isAuthenticated,setAuthenticated]=useState(false)
    const history=useHistory()

    function handleSignOut(){
        setAuthenticated(false)
    }

    function handleSignIn(){
        setAuthenticated(true)
    }

  return (
    <div>
      <Menu className="myNavi" stackable size="large" style={{position:"fixed",top:"0px",right:"-4px",left:"-4px"}}>
        <Container>
          <Menu.Item>
            <img src="https://cdn.pixabay.com/photo/2014/04/02/10/16/fire-303309_1280.png" />
          </Menu.Item>
          <Menu.Item as={Link} to={"/home"}  name="main"> Ana Sayfa</Menu.Item>
          <Menu.Item as={Link} to={"/jobadvertisements"} name="jobpositions">İş İlanları</Menu.Item>
          <Menu.Item as={Link} to={"/aboutus"} name="aboutus">Hakkımızda</Menu.Item>
          <Menu.Menu position="right">
              {isAuthenticated?<SignedIn />:<SignedOut />}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}

// signOut={handleSignOut}
// signIn={handleSignIn}