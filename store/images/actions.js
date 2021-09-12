import axios from "axios";
const API_BASE_URL = "https://heliumartworks.herokuapp.com";

export default {
    async getRecentsImages({ commit }) {
        axios.get(API_BASE_URL + "/files/ressources?resource_type=images").then(data => {
            console.log(data.data)
            var recentsImages = data.data
            commit('SET_RECENTS_IMAGES', { recentsImages })
        })
    },


    async downloadImage({ commit }, imageId, userId) {
        var request_url =
            url + '/download?file_id=' + imageId + '&user_id=' + userId
        axios.get(request_url).then(data => {
            var result = data.data

            var file_path = 'host/path/file.ext';
            var a = document.createElement('A');
            a.href = file_path;
            a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        })
    }

}