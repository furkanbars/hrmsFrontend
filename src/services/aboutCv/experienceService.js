import axios from "axios"

export default class ExperienceService{
    apiUrl="http://localhost:8080/api/experiences"

    add(cvExperience){
        return axios.post(this.apiUrl+"/add",cvExperience)
    }

    getByCvId(cvId){
        return axios.get(this.apiUrl+"/getbycvid",cvId)
    }
}