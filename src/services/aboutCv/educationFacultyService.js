import axios from "axios";

export default class EducationFacultyService{
    apiUrl="http://localhost:8080/api/educationfaculties"

    getAll(){
        return axios.get(this.apiUrl+"/getall")
    }
}