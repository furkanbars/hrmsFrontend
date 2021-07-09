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
    graduateId: Yup.number().required("Eğitim durumu boş bırakılamaz"),
    schoolId: Yup.number().required("Okul bilgisi boş bırakılamaz"),
    facultyId: Yup.number().required("Fakülte bilgisi boş bırakılamaz"),
    departmentId: Yup.number().required("Bölüm bilgisi boş bırakılamaz"),
    startDate: Yup.date()
      .min(new Date(), "Başlama tarihi bugünden önce olmalıdır")
      .required("Başlama tarihi bilgisi boş bırakılamaz"),
  });

  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button basic className="profilJobSeekerEducationAddButton">
            Yeni Eğitim Ekle
          </Button>
        }
      >
        <Modal.Header>Yeni Eğitim Ekle</Modal.Header>
        <Modal.Content>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <Select
                className="educationSelect"
                name="graduateId"
                search
                selection
                placeholder="Eğitim Durumu"
                clearable
                options={graduateOptions}
              />

              <Select
                className="schoolSelect"
                name="schoolId"
                search
                selection
                placeholder="Üniversite"
                clearable
                options={schoolOptions}
                style={{ marginLeft: "2em" }}
              />

              <Select
                className="facultySelect"
                name="facultyId"
                search
                selection
                placeholder="Fakülte"
                clearable
                options={facultyOptions}
                style={{ marginLeft: "2em" }}
              />

              <Select
                className="departmentSelect"
                name="departmentId"
                search
                selection
                placeholder="Bölüm"
                clearable
                options={departmentOptions}
                style={{ marginLeft: "4em", marginLeft: "2em" }}
              />
              <div style={{marginTop:"1em"}}>
                <label>Başlangıç Tarihi </label>
                <FormInput
                  name="startDate"
                  type="date"
                  placeholder="Başlangıç Tarihi"
                  //style={{ marginTop: "2em" }}
                />
              </div>

              <div style={{ marginLeft: "16em", marginTop: "-4em" }}>
                <label>Bitiş Tarihi</label>
                <FormInput
                  name="endDate"
                  type="date"
                  placeholder="Bitiş Tarihi"
                />
              </div>
            </Form>
          </Formik>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            İptal
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
