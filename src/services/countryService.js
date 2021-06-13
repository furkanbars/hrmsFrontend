import axios from "axios"

export default class CountryService{
    getCountries(){
        return axios.get("http://localhost:8080/api/countries/getall")
    }
}