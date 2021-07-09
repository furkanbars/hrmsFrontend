import axios from "axios"

export default class EmployerService{
    apiUrl="http://localhost:8080/api/employers"

    getAllNotConfirm(){
        return axios.get(this.apiUrl+"/getallnotconfirm");
    }

    updateConfirmStatus(id){
        return axios.get(this.apiUrl+"/updateconfirmstatus?id="+id);
    }

    updateisactive(id){
        return axios.get(this.apiUrl+"/updateisactive?id="+id)
    }
}