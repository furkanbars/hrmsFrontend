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
    jobId: Yup.number().required("İş poziyonu boş bırakılamaz!"),
    cityId: Yup.number().required("Şehir bilgisi boş bırakılamaz!"),
    workingPlaceTypeId: Yup.number().required("Çalışma stili boş bırakılamaz!"),
    workingTypeId: Yup.number().required("Çalışma saati tipi boş bırakılamaz!"),
    minSalary: Yup.number().min(0, "Maaş 0'dan küçük olamaz!"),
    maxSalary: Yup.number().min(0, "Maaş 0'dan küçük olamaz!"),
    numberOfPosition: Yup.number()
      .min(0, "İstihdam sayısı 0'dan küçük olamaz!")
      .required("İstihdam sayısı boş bırakılamaz!"),
    lastDate: Yup.date()
      .min(new Date(), "Son başvuru tarihi bugünden itibaren olmalıdır!")
      .required("Son başvuru tarihi boş bırakılamaz!"),
    title: Yup.string().required("İş başlığı boş bırakılamaz!"),
    description: Yup.string().required("İş açıklaması boş bırakılamaz!"),
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
        .then((result) => toast.success("İş ilanı eklendi, personelin onayının ardından yayınlanacaktır."));
      alert("İş ilanı eklendi, personelin onayı ardından listelenecektir");
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
                  <h3 className="formHeader">İş İlanı Ekle </h3>
                </Header>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Field>
                    <label style={{ position: "relative", float: "left" }}>
                      Şehir
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
                      placeholder="Şehir seçiniz"
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
                      İş pozisyonu
                      {formik.errors.jobId && formik.touched.jobId ? (
                        <Label style={{ marginLeft: "2em" }}>
                          <Label.Detail style={{ color: "red" }}>
                            {formik.errors.jobId}
                          </Label.Detail>
                        </Label>
                      ) : null}
                    </label>
                    <Form.Select
                      placeholder="Pozisyon seçiniz"
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
                      Çalışma yerine göre tipi
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
                      placeholder="Çalışma tipini seçiniz"
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
                      Çalışma tipi
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
                      placeholder="Çalışma süresini seçiniz"
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
                        Minimum maaş
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
                        placeholder="Minimum maaşı giriniz"
                        style={{ width: "18em" }}
                        value={formik.values.minSalary}
                        onChange={formik.handleChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label style={{ position: "relative", float: "left" }}>
                        Maximum maaş
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
                        placeholder="Maximum maaşı giriniz"
                        style={{ width: "18em" }}
                        value={formik.values.maxSalary}
                        onChange={formik.handleChange}
                      />
                    </Form.Field>
                  </Form.Group>
                  <Form.Group>
                    <Form.Field>
                      <label style={{ position: "relative", float: "left" }}>
                        Açık Poziyon Sayısı
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
                        placeholder="Açık pozisyon sayısını giriniz"
                        style={{ width: "18em" }}
                        value={formik.values.numberOfPosition}
                        onChange={formik.handleChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label style={{ position: "relative", float: "left" }}>
                        Son başvuru tarihi
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
                        İş başlığı
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
                        placeholder="İş başlığını giriniz"
                        style={{ width: "37em" }}
                        value={formik.values.title}
                        onChange={formik.handleChange}
                      />
                    </Form.Field>
                  <Form.Field>
                    <label style={{ position: "relative", float: "left" }}>
                      Açıklama
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
                      placeholder="Açıklama giriniz"
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
                      İlanı Ekle
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
