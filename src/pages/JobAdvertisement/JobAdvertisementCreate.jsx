import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import JobPositionService from "../../services/jobPositionService";
import CityService from "../../services/cityService";
import WorkPlaceTypeService from "../../services/workPlaceTypeService";
import WorkTypeService from "../../services/workTypeService";
import {
  Button,
  Grid,
  Header,
  Container,
  Segment,
  Form,
  TextArea,
  Label,
} from "semantic-ui-react";
import "./jobAdvertisement.css";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

export default function JobAdvertisementCreate() {
  let jobAdvertisementService = new JobAdvertisementService();

  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);
  const [workingPlaceTypes, setWorkingPlaceTypes] = useState([]);
  const [workingTypes, setWorkingTypes] = useState([]);

  useEffect(() => {
    let jobService = new JobPositionService();
    jobService
      .getPositions()
      .then((response) => setJobPositions(response.data.data));

    let cityService = new CityService();
    cityService.getCities().then((response) => setCities(response.data.data));

    let workPlaceTypeService = new WorkPlaceTypeService();
    workPlaceTypeService
      .getWorkingPlaceTypes()
      .then((response) => setWorkingPlaceTypes(response.data.data));

    let workTypeService = new WorkTypeService();
    workTypeService
      .getWorkTypes()
      .then((response) => setWorkingTypes(response.data.data));
  }, []);

  const history = useHistory();

  let cityOptions = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id,
  }));

  let workingPlaceTypeOptions = workingPlaceTypes.map((workingPlaceType, index) => ({
    key: index,
    text: workingPlaceType.workingPlaceType,
    value: workingPlaceType.id,
  }));

  let jobPositionOptions = jobPositions.map((jobPosition, index) => ({
    key: index,
    text: jobPosition.name,
    value: jobPosition.id,
  }));

  let workingTypeOptions = workingTypes.map((workingType, index) => ({
    key: index,
    text: workingType.workingType,
    value: workingType.id,
  }));

  const jobAdvertisementAddSchema = Yup.object().shape({
    jobId: Yup.number().required("???? poziyonu bo?? b??rak??lamaz!"),
    cityId: Yup.number().required("??ehir bilgisi bo?? b??rak??lamaz!"),
    workingPlaceTypeId: Yup.number().required("??al????ma stili bo?? b??rak??lamaz!"),
    workingTypeId: Yup.number().required("??al????ma saati tipi bo?? b??rak??lamaz!"),
    minSalary: Yup.number().min(0, "Maa?? 0'dan k??????k olamaz!"),
    maxSalary: Yup.number().min(0, "Maa?? 0'dan k??????k olamaz!"),
    numberOfPosition: Yup.number()
      .min(0, "??stihdam say??s?? 0'dan k??????k olamaz!")
      .required("??stihdam say??s?? bo?? b??rak??lamaz!"),
    lastDate: Yup.date()
      .min(new Date(), "Son ba??vuru tarihi bug??nden itibaren olmal??d??r!")
      .required("Son ba??vuru tarihi bo?? b??rak??lamaz!"),
    title: Yup.string().required("???? ba??l?????? bo?? b??rak??lamaz!"),
    description: Yup.string().required("???? a????klamas?? bo?? b??rak??lamaz!"),
  });

  const formik = useFormik({
    initialValues: {
      jobId: "",
      cityId: "",
      workingPlaceTypeId: "",
      workingTypeId: "",
      minSalary: "",
      maxSalary: "",
      numberOfPosition: "",
      lastDate: "",
      title: "",
      description: "",
    },
    validationSchema: jobAdvertisementAddSchema,
    onSubmit: (values) => {
      values.employerId = 5;

      jobAdvertisementService
        .addJobAdvertisement(values)
        .then((result) => toast.success("???? ilan?? eklendi, personelin onay??n??n ard??ndan yay??nlanacakt??r."));
      alert("???? ilan?? eklendi, personelin onay?? ard??ndan listelenecektir");
      history.push("/jobadvertisements");
    },
  });

  return (
    <div className="jobAdvertisementCreateDiv">
      <Container style={{ minHeight: "1000px", height:"auto" }}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}></Grid.Column>
            <Grid.Column width={8}>
              <Segment className="jobAdvertisementCreateSegment" raised >
                <Header>
                  <h3 className="formHeader">???? ??lan?? Ekle </h3>
                </Header>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Field>
                    <label style={{ position: "relative", float: "left" }}>
                      ??ehir
                      {formik.errors.cityId && formik.touched.cityId ? (
                        <Label style={{ marginLeft: "2em" }}>
                          <Label.Detail style={{ color: "red" }}>
                            {formik.errors.cityId}
                          </Label.Detail>
                        </Label>
                      ) : null}
                    </label>
                    <Form.Select
                      id="cityId"
                      clearable
                      placeholder="??ehir se??iniz"
                      options={cityOptions}
                      selection
                      search
                      value={formik.values.cityId}
                      onChange={(event, data) =>
                        formik.setFieldValue("cityId", data.value)
                      }
                      onBlur={formik.onBlur}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label style={{ position: "relative", float: "left" }}>
                      ???? pozisyonu
                      {formik.errors.jobId && formik.touched.jobId ? (
                        <Label style={{ marginLeft: "2em" }}>
                          <Label.Detail style={{ color: "red" }}>
                            {formik.errors.jobId}
                          </Label.Detail>
                        </Label>
                      ) : null}
                    </label>
                    <Form.Select
                      placeholder="Pozisyon se??iniz"
                      clearable
                      value={formik.values.jobId}
                      onChange={(event, data) =>
                        formik.setFieldValue("jobId", data.value)
                      }
                      options={jobPositionOptions}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label style={{ position: "relative", float: "left" }}>
                      ??al????ma yerine g??re tipi
                      {formik.errors.workingPlaceTypeId &&
                      formik.touched.workingPlaceTypeId ? (
                        <Label style={{ marginLeft: "2em" }}>
                          <Label.Detail style={{ color: "red" }}>
                            {formik.errors.workingPlaceTypeId}
                          </Label.Detail>
                        </Label>
                      ) : null}
                    </label>
                    <Form.Select
                      placeholder="??al????ma tipini se??iniz"
                      clearable
                      options={workingPlaceTypeOptions}
                      value={formik.values.workingPlaceTypeId}
                      onChange={(event, data) =>
                        formik.setFieldValue("workingPlaceTypeId", data.value)
                      }
                    />
                  </Form.Field>
                  <Form.Field>
                    <label style={{ position: "relative", float: "left" }}>
                      ??al????ma tipi
                      {formik.errors.workingTypeId &&
                      formik.touched.workingTypeId ? (
                        <Label style={{ marginLeft: "2em" }}>
                          <Label.Detail style={{ color: "red" }}>
                            {formik.errors.workingTypeId}
                          </Label.Detail>
                        </Label>
                      ) : null}
                    </label>
                    <Form.Select
                      placeholder="??al????ma s??resini se??iniz"
                      clearable
                      options={workingTypeOptions}
                      value={formik.values.workingTypeId}
                      onChange={(event, data) =>
                        formik.setFieldValue("workingTypeId", data.value)
                      }
                    />
                  </Form.Field>
                  <Form.Group>
                    <Form.Field>
                      <label style={{ position: "relative", float: "left" }}>
                        Minimum maa??
                        {formik.errors.minSalary && formik.touched.minSalary ? (
                          <Label>
                            <Label.Detail style={{ color: "red" }}>
                              {formik.errors.minSalary}
                            </Label.Detail>
                          </Label>
                        ) : null}
                      </label>
                      <Form.Input
                        name="minSalary"
                        type="number"
                        placeholder="Minimum maa???? giriniz"
                        style={{ width: "18em" }}
                        value={formik.values.minSalary}
                        onChange={formik.handleChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label style={{ position: "relative", float: "left" }}>
                        Maximum maa??
                        {formik.errors.maxSalary && formik.touched.maxSalary ? (
                          <Label>
                            <Label.Detail style={{ color: "red" }}>
                              {formik.errors.maxSalary}
                            </Label.Detail>
                          </Label>
                        ) : null}
                      </label>
                      <Form.Input
                        name="maxSalary"
                        type="number"
                        placeholder="Maximum maa???? giriniz"
                        style={{ width: "18em" }}
                        value={formik.values.maxSalary}
                        onChange={formik.handleChange}
                      />
                    </Form.Field>
                  </Form.Group>
                  <Form.Group>
                    <Form.Field>
                      <label style={{ position: "relative", float: "left" }}>
                        A????k Poziyon Say??s??
                        {formik.errors.numberOfPosition &&
                        formik.touched.numberOfPosition ? (
                          <Label>
                            <Label.Detail style={{ color: "red" }}>
                              {formik.errors.numberOfPosition}
                            </Label.Detail>
                          </Label>
                        ) : null}
                      </label>
                      <Form.Input
                        name="numberOfPosition"
                        type="number"
                        placeholder="A????k pozisyon say??s??n?? giriniz"
                        style={{ width: "18em" }}
                        value={formik.values.numberOfPosition}
                        onChange={formik.handleChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label style={{ position: "relative", float: "left" }}>
                        Son ba??vuru tarihi
                        {formik.errors.lastDate && formik.touched.lastDate ? (
                          <Label>
                            <Label.Detail style={{ color: "red" }}>
                              {formik.errors.lastDate}
                            </Label.Detail>
                          </Label>
                        ) : null}
                      </label>
                      <Form.Input
                        name="lastDate"
                        type="date"
                        placeholder="mm/dd/yyyy"
                        style={{ width: "18em" }}
                        value={formik.values.lastDate}
                        onChange={formik.handleChange}
                      />
                    </Form.Field>
                  </Form.Group>
                    <Form.Field>
                      <label style={{ position: "relative", float: "left" }}>
                        ???? ba??l??????
                        {formik.errors.title && formik.touched.title ? (
                          <Label>
                            <Label.Detail style={{ color: "red" }}>
                              {formik.errors.title}
                            </Label.Detail>
                          </Label>
                        ) : null}
                      </label>
                      <Form.Input
                        name="title"
                        type="text"
                        placeholder="???? ba??l??????n?? giriniz"
                        style={{ width: "37em" }}
                        value={formik.values.title}
                        onChange={formik.handleChange}
                      />
                    </Form.Field>
                  <Form.Field>
                    <label style={{ position: "relative", float: "left" }}>
                      A????klama
                      {formik.errors.description &&
                      formik.touched.description ? (
                        <Label style={{ marginLeft: "2em" }}>
                          <Label.Detail style={{ color: "red" }}>
                            {formik.errors.description}
                          </Label.Detail>
                        </Label>
                      ) : null}
                    </label>
                    <Form.Input
                      name="description"
                      placeholder="A????klama giriniz"
                      style={{
                        position: "static",
                        float: "left",
                        width: "37em",
                      }}
                      control={TextArea}
                      value={formik.values.description}
                      onChange={formik.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Button
                      type="submit"
                      color="green"
                      style={{ marginTop: "15px", float: "left" }}
                    >
                      ??lan?? Ekle
                    </Button>
                  </Form.Field>
                </Form>
              </Segment>
            </Grid.Column>
            <Grid.Column width={4}></Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
