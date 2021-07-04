import React, { useState, useEffect } from "react";
import CityService from "../services/cityService.js";
import CountryService from "../services/countryService";
import WorkingPlaceTypeService from "../services/workPlaceTypeService";
import WorkTypeService from "../services/workTypeService";
import { Segment, Select, Radio, Divider,Header, Button } from "semantic-ui-react";

export default function CityList() {
  const [cities, setCities] = useState([]);

  const [countries, setCountries] = useState([]);

  const [workingPlaceTypes, setWorkingPlaceTypes] = useState([]);

  const [workingTypes, setWorkingTypes] = useState([]);

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

  let workingTypesOptions = workingTypes.map((workingType) => ({
    key:workingType.id,
    text:workingType.workingType,
    value:workingType.workingType,
  }))

  let workingPlaceTypesOptions = workingPlaceTypes.map((workingPlaceType) => ({
    key:workingPlaceType.id,
    text:workingPlaceType.workingPlaceType,
    value:workingPlaceType.workingPlaceType,
  }))

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((response) => setCities(response.data.data));

    let countryService = new CountryService();
    countryService
      .getCountries()
      .then((response) => setCountries(response.data.data));

    let workingPlaceTypeService = new WorkingPlaceTypeService();
    workingPlaceTypeService
      .getWorkingPlaceTypes()
      .then((response) => setWorkingPlaceTypes(response.data.data));

    let workingTypeService = new WorkTypeService();
    workingTypeService
      .getWorkTypes()
      .then((response) => setWorkingTypes(response.data.data));
  }, []);

  return (
    <div>
      <Segment raised className="cityListSegment">
        <Header as="h4" style={{ marginLeft: "-73px", marginTop: "1em",marginLeft: "-9em" }}>
        Ülke/İl/İlçe
        </Header>
        <Select
          placeholder="Ülke"
          options={countriesOptions}
          style={{ marginTop: "10px" }}
        />
        <Select
          placeholder="İl"
          options={citiesOptions}
          style={{ marginTop: "15px" }}
        />
        <Select placeholder="İlçe" style={{ marginTop: "15px" }} />

        <Divider style={{marginTop:"2em"}}></Divider>

        {/* <header style={{ marginLeft: "-6em", marginTop: "1em" }}>
          Çalışma Yerine Göre
        </header> */}
        <Header as="h4" style={{ marginLeft: "-130px", marginTop: "1em" }}>
          Çalışma şekli
        </Header>
        <Select
          placeholder="Çalışma şeklini seçiniz"
          options={workingPlaceTypesOptions}
          style={{ marginTop: "5px" }}
        />

        <Divider style={{marginTop:"2em"}}></Divider>

        <Header as="h4" style={{ marginLeft: "-140px", marginTop: "1em" }}>
          Çalışma tipi
        </Header>
        <Select
          placeholder="Çalışma saati türünü seçiniz"
          options={workingTypesOptions}
          style={{ marginTop: "5px" }}
        /> 
        
      </Segment>
      <Segment raised style={{ marginTop:"29px" }}>
           <Button className="filterButton" color="facebook" size="huge" >Filtrele</Button>
        </Segment>
    </div>
  );
}
