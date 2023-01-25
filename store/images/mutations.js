export default {
    SET_RECENTS_IMAGES: (state, { recentsImages }) => {

        state.recentsImages = recentsImages
    },

    SET_SEARCH_IMAGES: (state, { images }) => {

        state.searchImages = images
    },

    SWITCH_SEARCHING_BOOL: (state, { is_searching }) => {

        state.isSearching = is_searching
    },
}