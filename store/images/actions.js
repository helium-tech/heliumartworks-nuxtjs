import axios from "axios";
const API_BASE_URL = "https://heliumartworks.herokuapp.com";

export default {
    async getRecentsImages({commit}){
        axios.get(API_BASE_URL+"/files/ressources?resource_type=images").then(data => {
            console.log(data.data)
            var recentsImages = data.data
            commit('SET_RECENTS_IMAGES', { recentsImages })
        })
    }
}