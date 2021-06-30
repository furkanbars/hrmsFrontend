import axios from "axios"


export default class JobAdvertisementService{ 
    apiUrl="http://localhost:8080/api/jobadvertisements"
    getJobAdvertisements(){
        return axios.get(this.apiUrl+"/getall")
    }

    getAllSorted(pageNo,pageSize){
        return axios.get(this.apiUrl+"/getallsorted?pageNo="+pageNo+"&pageSize="+pageSize);
    }

    addJobAdvertisement(jobAdvertisement){
        return axios.post(this.apiUrl+"/add",jobAdvertisement);
    }

    getById(id){
        return axios.get(this.apiUrl+"/getbyid?id="+id);
    }

    getAllNotComfirmed(){
        return axios.get(this.apiUrl+"/getallnotconfirmed");
    }

    updateConfirmStatus(id){
        return axios.get(this.apiUrl+"/updateconfirmstatus?id="+id);
    }

    updateIsActive(id){
        return axios.get(this.apiUrl+"/updateisactive?id="+id);
    }
}