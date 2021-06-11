import React, { useState,useEffect } from "react";
import CityService from "../services/cityService.js";
import { Button,Card,Image,Dropdown } from "semantic-ui-react";

export default function CityList() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((response) => setCities(response.data.data));
  }, []);

  return (
    <div>
      <Dropdown placeholder='Ülke' search selection/>
      <Dropdown placeholder='İl' search selection/>
      <Dropdown placeholder='İlçe' search selection  />
    </div>
  );
}
