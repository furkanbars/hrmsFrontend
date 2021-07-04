import axios from "axios"

export default class JobAdvertisementFavoriteService{
    apiUrl="http://localhost:8080/api/jobseekerfavorites"

    add(jobAdvertisementFavorite){
        return axios.post(this.apiUrl+"/add",jobAdvertisementFavorite)
    }

    delete(userId,jobAdvertisementId){
        return axios.delete(this.apiUrl+"/delete?userId="+userId+"&jobAdvertisementId="+jobAdvertisementId)
    }

    getByUserId(userId){
        return axios.get(this.apiUrl+"/getbyuserid?userId="+userId);
    }

}