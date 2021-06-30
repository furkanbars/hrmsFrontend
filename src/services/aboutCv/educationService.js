import axios from "axios"

export default class EducationService{
    apiUrl="http://localhost:8080/api/educations"

    add(cvEducation){
        return axios.post(this.apiUrl+"/add",cvEducation);
    }

    getByCvId(cvId){
        return axios.get(this.apiUrl+"/getbycvid",cvId);
    }
}