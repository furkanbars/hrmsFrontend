import React, { useState, useEffect } from "react";
import CityService from "../services/cityService.js";
import CountryService from "../services/countryService";
import WorkingTypeService from "../services/workTypeService";
import WorkHourService from "../services/workHourService";
import { Segment, Select, Radio, Divider,Header, Button } from "semantic-ui-react";

export default function CityList() {
  const [cities, setCities] = useState([]);

  const [countries, setCountries] = useState([]);

  const [workingTypes, setWorkingTypes] = useState([]);

  const [workingHours, setWorkingHours] = useState([]);

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

  let workingHoursOptions = workingHours.map((workingHour) => ({
    key:workingHour.id,
    text:workingHour.workingHour,
    value:workingHour.workingHour,
  }))

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((response) => setCities(response.data.data));

    let countryService = new CountryService();
    countryService
      .getCountries()
      .then((response) => setCountries(response.data.data));

    let workingTypeService = new WorkingTypeService();
    workingTypeService
      .getWorkingTypes()
      .then((response) => setWorkingTypes(response.data.data));

    let workingHourService = new WorkHourService();
    workingHourService
      .getWorkHours()
      .then((response) => setWorkingHours(response.data.data));
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
        <Header as="h4" style={{ marginLeft: "-73px", marginTop: "1em" }}>
          Çalışma Saatine Göre
        </Header>
        {workingTypes.map((workingType) => (
          <Radio
            className="workingTypeRadio"
            label={workingType.workingType}
            value={workingType.workingType}
          />
        ))}

        <Divider style={{marginTop:"4em"}}></Divider>

        <Header as="h4" style={{ marginLeft: "-73px", marginTop: "1em" }}>
          Çalışma Saatine Göre
        </Header>
        <Select
          placeholder="Çalışma saati türünü seçiniz"
          options={workingHoursOptions}
          style={{ marginTop: "5px" }}
        /> 
        
      </Segment>
      <Segment raised style={{ marginTop:"29px" }}>
           <Button className="filterButton" color="facebook" size="huge" >Filtrele</Button>
        </Segment>
    </div>
  );
}
