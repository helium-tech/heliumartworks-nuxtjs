import axios from "axios";
const API_BASE_URL = "https://heliumartworks.herokuapp.com";

export default {
    async getRecentsImages({ commit }) {

        axios.get(API_BASE_URL + "/files/ressources?resource_type=images").then(data => {
            let response = data.data
            let recentsImages = response.slice(0, 20);
            commit('SET_RECENTS_IMAGES', { recentsImages })
        })
    },


    async searchImages({ commit }, keyword, page, limit) {
        let is_searching = true;
        commit('SWITCH_SEARCHING_BOOL', { is_searching })

        if (page == null || !Number.isInteger(page)) {
            page = 1
        }
        if (limit == null || !Number.isInteger(limit)) {
            limit = 20
        }
        let url = 'https://heliumartworks.herokuapp.com/files/search'
        var searchUrl = url + '?keyword=' + keyword + '&page=' + page + '&limit=20'
        axios
            .get(searchUrl)
            .then((response) => {
                var images = response.data.data;
                commit('SET_SEARCH_IMAGES', { images })

                is_searching = false;
                commit('SWITCH_SEARCHING_BOOL', { is_searching })
            })
            .catch((error) => {
                console.log(error)

                is_searching = false;
                commit('SWITCH_SEARCHING_BOOL', { is_searching })
            })

    },

}
