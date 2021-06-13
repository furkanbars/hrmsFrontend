import React,{ useState,useEffect } from "react";
import { Button,Card,Image } from "semantic-ui-react";
import CvService from "../services/cvService"
 
export default function cvList() {
    const [cvs, setCvs] = useState([])

    useEffect(() => {
        let cvService=new CvService()
        cvService.getCvs().then(response=>setCvs(response.data.data))
    }, [])
  return (
    <div>
        <Dropdown placeholder='Ülke' search selection  />
        <Dropdown placeholder='İl' search selection  />
        <Dropdown placeholder='İlçe' search selection  />
    </div>
  );
}
