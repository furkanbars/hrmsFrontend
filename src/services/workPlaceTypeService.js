import axios from 'axios'

export default class WorkPlaceTypeService{
    getWorkingPlaceTypes(){
        return axios.get("http://localhost:8080/api/workingplacetypes/getall")
    }
}