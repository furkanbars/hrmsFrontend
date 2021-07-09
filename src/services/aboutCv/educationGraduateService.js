import axios from "axios";

export default class EducationGraduateService{
    apiUrl="http://localhost:8080/api/educationgraduates"

    getAll(){
        return axios.get(this.apiUrl+"/getall");
    }
}