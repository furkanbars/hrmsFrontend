import axios from "axios";

export default class EducationDepartmentService{
    apiUrl = "http://localhost:8080/api/educationdepartments";

    getAll(){
        return axios.get(this.apiUrl+"/getall");
    }
}