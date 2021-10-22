export default {
    SET_RECENTS_IMAGES: (state, { recentsImages }) => {

        state.recentsImages = recentsImages
    },

    SET_SEARCH_IMAGES: (state, { images }) => {
        console.log("mutate search", images)
        state.searchImages = images
    },

    SWITCH_SEARCHING_BOOL: (state, { is_searching }) => {
        console.log("is search", is_searching)
        state.isSearching = is_searching
    },
}