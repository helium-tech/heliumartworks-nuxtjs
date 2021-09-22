export default {
    SET_RECENTS_IMAGES: (state, { recentsImages }) => {

        state.recentsImages = recentsImages
    },

    SET_SEARCH_IMAGES: (state, { images }) => {
        console.log("mutate search", images)
        state.searchImages = images
    },
}