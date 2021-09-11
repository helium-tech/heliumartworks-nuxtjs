export default {
    SET_RECENTS_IMAGES: (state, {recentsImages}) => {
        console.log("mutation set_recents images")
        state.recentsImages = recentsImages
    },
}