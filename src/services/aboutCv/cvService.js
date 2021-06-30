import axios from "axios"

export default class CvService{
    apiUrl="http://localhost:8080/api/cvs"

    getCvs(){
        return axios.get(this.apiUrl+"/getall");
    }

    getByJobSeekerId(jobSeekerId){
        return axios.get(this.apiUrl+"/getbyjobseekerid?jobSeekerId="+jobSeekerId);
    }
}