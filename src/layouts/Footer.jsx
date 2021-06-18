import React from 'react'
import { Card,Grid,Icon,Segment } from 'semantic-ui-react'

export default function Footer() {
    return (
        <div style={{position:"unset",right:"0px",left:"0px",bottom:"0px"}}  className="footer">
             <Segment textAlign='center' inverted color='brown'>
                <Icon name = "envelope outline"/>hrmsCompany@hrms.io 	&nbsp;&nbsp;&nbsp;
                <Icon name = "phone"/>0523 222 11 23 &nbsp;&nbsp;&nbsp;
                <Icon name = "address book outline"/>İstanbul/Türkiye &nbsp;&nbsp;&nbsp;
                <br></br>
                <br></br>
                 ©Copyright Made By Hrms Company
            </Segment>
        </div>
    )
}
