import axios from "axios"

export default class TechnologyService{
    apiUrl="http://localhost:8080/api/technologies"

    add(cvTechnology){
        return axios.post(this.apiUrl+"/add",cvTechnology);
    }

    getByCvId(cvId){
        return axios.get(this.apiUrl+"/getbycvid",cvId);
    }
}