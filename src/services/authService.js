import axios from "axios"

export default class AuthService{
    apiUrl="http://localhost:8080/api/auth"

    registerEmployer(employer){
        return axios.post(this.apiUrl+"/registeremployer",employer)
    }

    retgisterJobSeeker(jobSeeker){
        return axios.post(this.apiUrl+"/registerjobseeker",jobSeeker)
    }

}