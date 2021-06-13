import React, { useState, useEffect } from "react";
import CityService from "../services/cityService.js";
import CountryService from "../services/countryService";
import { Button, Card, Image, Dropdown, Segment } from "semantic-ui-react";

export default function CityList() {
  const [cities, setCities] = useState([]);

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((response) => setCities(response.data.data));

    let countryService = new CountryService();
    countryService
      .getCountries()
      .then((response) => setCountries(response.data.data));
  }, []);

  return (
    <div>
      <Segment style={{ height: "17em"}}>
        <header style={{marginLeft:"-9em"}}>Ülke/İl/İlçe</header>
        <div style={{marginTop:"15px"}}>
        <Dropdown placeholder="Ülke" scrolling selection>
          <Dropdown.Menu>
            {countries.map((country) => (
              <Dropdown.Item>{country.countryName}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown placeholder="İl" search selection style={{ top: "15px" }}>
          <Dropdown.Menu>
            {cities.map((city) => (
              <Dropdown.Item>{city.cityName}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown placeholder="İlçe" search selection style={{ marginTop: "30px" }}>
          <Dropdown.Menu></Dropdown.Menu>
        </Dropdown>
        </div>
      </Segment>
    </div>
  );
}
