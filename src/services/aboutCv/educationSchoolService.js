import axios from "axios";

export default class EducationSchoolService{
    apiUrl="http://localhost:8080/api/educationschools"

    getAll(){
        return axios.get(this.apiUrl+"/getall")
    }
}