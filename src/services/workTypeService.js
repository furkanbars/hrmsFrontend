import axios from 'axios'

export default class WorkTypeService{
    getWorkingTypes(){
        return axios.get("http://localhost:8080/api/workingtypes/getall")
    }
}