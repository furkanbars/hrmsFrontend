import React, { useState, useEffect } from "react";
import CityService from "../services/cityService.js";
import CountryService from "../services/countryService";
import {
  Button,
  Card,
  Image,
  Dropdown,
  Segment,
  Select,
} from "semantic-ui-react";

export default function CityList() {
  const [cities, setCities] = useState([]);

  const [countries, setCountries] = useState([]);

  let countriesOptions = countries.map((country) => ({
    key: country.id,
    text: country.countryName,
    value: country.id,
  }));

  let citiesOptions = cities.map((city) => ({
    key: city.id,
    text: city.cityName,
    value: city.id,
  }));

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
      <Segment style={{ height: "17em" }}>
        <header style={{ marginLeft: "-9em" }}>Ülke/İl/İlçe</header>
        <Select placeholder="Ülke" options={countriesOptions} style={{ marginTop: "15px" }}/>
        <Select placeholder="İl" options={citiesOptions} style={{ marginTop: "15px" }}/>
        <Select placeholder="İlçe" style={{ marginTop: "15px" }}/>
      </Segment>
    </div>
  );
}
