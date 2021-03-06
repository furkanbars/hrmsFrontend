import React, { useEffect, useState } from "react";
import { Button, Modal, FormField, Select, FormInput } from "semantic-ui-react";
import { Formik, Form } from "formik";
import EducationGraduateService from "../../services/aboutCv/educationGraduateService.js";
import EducationSchoolService from "../../services/aboutCv/educationSchoolService";
import EducationFacultyService from "../../services/aboutCv/educationFacultyService";
import * as Yup from "yup";
import EducationService from "../../services/aboutCv/educationService";
import EducationDepartmentService from "../../services/aboutCv/educationDepartmentService";
import "../cvUpdateAdd.css";
import FormSelect from "../../utilities/FormSelect.jsx";

export default function AddEducationModal() {
  const [open, setOpen] = React.useState(false);

  const [graduates, setGraduates] = useState([]);
  const [schools, setSchools] = useState([]);
  const [faculties, setFaculties] = useState([]);
  const [departments, setDepartments] = useState([]);

  const educationService = new EducationService();

  useEffect(() => {
    let educationGraduateService = new EducationGraduateService();
    educationGraduateService
      .getAll()
      .then((response) => setGraduates(response.data.data));

    let schoolService = new EducationSchoolService();
    schoolService.getAll().then((response) => setSchools(response.data.data));

    let facultyService = new EducationFacultyService();
    facultyService
      .getAll()
      .then((response) => setFaculties(response.data.data));

    let departmentService = new EducationDepartmentService();
    departmentService
      .getAll()
      .then((response) => setDepartments(response.data.data));
  }, []);

  let graduateOptions = graduates.map((graduate, index) => ({
    key: index,
    text: graduate.name,
    value: graduate.id,
  }));

  let schoolOptions = schools.map((school, index) => ({
    key: index,
    text: school.name,
    value: school.id,
  }));

  let facultyOptions = faculties.map((faculty, index) => ({
    key: index,
    text: faculty.name,
    value: faculty.id,
  }));

  let departmentOptions = departments.map((department, index) => ({
    key: index,
    text: department.departmentName,
    value: department.id,
  }));

  const initialValues = {
    graduateId: "",
    schoolId: "",
    facultyId: "",
    departmentId: "",
    startDate: "",
    endDate: "",
  };

  const schema = Yup.object({
    graduateId: Yup.number().required("E??itim durumu bo?? b??rak??lamaz"),
    schoolId: Yup.number().required("Okul bilgisi bo?? b??rak??lamaz"),
    facultyId: Yup.number().required("Fak??lte bilgisi bo?? b??rak??lamaz"),
    departmentId: Yup.number().required("B??l??m bilgisi bo?? b??rak??lamaz"),
    startDate: Yup.date()
      .min(new Date(), "Ba??lama tarihi bug??nden ??nce olmal??d??r")
      .required("Ba??lama tarihi bilgisi bo?? b??rak??lamaz"),
  });

  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button basic className="profilJobSeekerEducationAddButton">
            Yeni E??itim Ekle
          </Button>
        }
      >
        <Modal.Header>Yeni E??itim Ekle</Modal.Header>
        <Modal.Content>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <FormSelect
                className="educationSelect"
                name="graduateId"
                search
                selection
                placeholder="E??itim Durumu"
                clearable
                options={graduateOptions}
                style={{ position:"relative", float:"left" }}
              />

              <FormSelect
                className="schoolSelect"
                name="schoolId"
                search
                selection
                placeholder="??niversite"
                clearable
                options={schoolOptions}
                style={{position:"relative", float:"left" }}
              />

              <FormSelect
                className="facultySelect"
                name="facultyId"
                search
                selection
                placeholder="Fak??lte"
                clearable
                options={facultyOptions}
                style={{  position:"relative", float:"left" }}
              />

              <FormSelect
                className="departmentSelect"
                name="departmentId"
                search
                selection
                placeholder="B??l??m"
                clearable
                options={departmentOptions}
                style={{ marginLeft: "4em", marginLeft: "2em", position:"relative", float:"left" }}
              />
              <div style={{marginTop:"1em"}}>
                <label>Ba??lang???? Tarihi </label>
                <FormInput
                  name="startDate"
                  type="date"
                  placeholder="Ba??lang???? Tarihi"
                  //style={{ marginTop: "2em" }}
                />
              </div>

              <div style={{ marginLeft: "16em", marginTop: "-4em" }}>
                <label>Biti?? Tarihi</label>
                <FormInput
                  name="endDate"
                  type="date"
                  placeholder="Biti?? Tarihi"
                />
              </div>
            </Form>
          </Formik>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            ??ptal
          </Button>
          <Button
            content="Ekle"
            labelPosition="right"
            icon="checkmark"
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
}
