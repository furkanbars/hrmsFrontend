import axios from "axios"

export default class LanguageService{
    apiUrl="http://localhost:8080/api/languages"

    add(cvLanguage){
        return axios.post(this.apiUrl+"/add",cvLanguage);
    }

    getByCvId(cvId){
        return axios.get(this.apiUrl+"/getbycvid",cvId);
    }

}