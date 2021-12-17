<template>
  <div>
   <ComingSoon></ComingSoon>
  </div>
</template>

<script>
// import Tab from '~/components/Tab.vue'
// import Tabs from '~/components/Tabs.vue'
// import axios from 'axios'
// import { mapState } from 'vuex'
// const url = 'https://heliumartworks.herokuapp.com/files/add'
import ComingSoon from '~/components/ComingSoon.vue'
export default {
  name: 'Account',
  components: {
    ComingSoon
  },

  data() {
    return {
      formValues: {},
      file: '',
    }
  },

  // computed: {
  //   ...mapState({
  //     user_id: (state) => state.auth.authUser.uid,
  //     // user_name: (state) => state.auth.authUser.displayName,
  //     // user_email: (state) => state.auth.authUser.email,
  //     // user_balance: (state) => state.auth.authUser.balance,
  //     // user_followers: (state) => state.auth.authUser.followers,
  //   }),
  // },

  // methods: {
  //
  //   async onFileChange(e) {
  //     let files = e.target.files || e.dataTransfer.files
  //     let preview = document.getElementById("img__preview")
  //     if (!files.length) return
  //     let src = URL.createObjectURL(files[0])
  //     this.file = files[0]
  //     preview.src = src
  //   },
  //
  //   async uploadFile() {
  //     let formData = new FormData()
  //     formData.append('file', this.file)
  //     formData.append('title', this.formValues.title)
  //     try {
  //       const res = await axios.post(
  //         url + '?resource_type=images' + '&user_id=' + this.user_id,
  //         formData,
  //         {
  //           headers: { 'Content-Type': 'multipart/form-data' },
  //         }
  //       )
  //     } catch (e) {
  //       console.error(e)
  //     }
  //   },
  // },

}
</script>

<style>
.formulate-input-upload-area input {
  border: none;
}
.formulate-input-error {
  color: red;
  font-size: 14px;
}
.formulate-files {
  list-style: none;
}
</style>
