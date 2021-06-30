import React from 'react'
import { Card,Grid,Icon,Segment } from 'semantic-ui-react'

export default function Footer() {
    return (
        <div className="footer">
             <Segment textAlign='center' inverted color='black'>
                <Icon name = "envelope outline"/>abdullahfurkanbars@gmail.com 	&nbsp;&nbsp;&nbsp;
                <Icon name = "phone"/>0523 222 11 23 &nbsp;&nbsp;&nbsp;
                <Icon name = "address book outline"/>Bursa/Türkiye &nbsp;&nbsp;&nbsp;
                <br></br>
                <br></br>
                 ©Copyright Made By Hrms Company
            </Segment>
        </div>
    )
}



// style={{position:"unset",right:"0px",left:"0px",bottom:"0px"}}
