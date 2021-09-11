<template>
    <div>
      <SidebarAccount></SidebarAccount>
      <div class="page-content bg-gray">
         <form class="form-group form-decoration container grid-sm">
           <label class="form-label" for="username">Nom de l'image ou du fichier à uploader</label>
           <input class="form-input" type="text" id="username" placeholder="Nom d'utilisateur">
           <label class="form-label" for="select-format">Format du fichier</label>
           <div class="form-group">
             <select class="form-select">
               <option>Choisir un format</option>
               <option>JPEG</option>
               <option>PNG</option>
               <option>PSD</option>
             </select>
           </div>
           <label class="form-label" for="tags">Tags</label>
           <input class="form-input" type="text" id="tags" placeholder="Saisir tags">
           <label class="form-label" for="files">Sélectionner les images à uploader</label>
           <input class="form-input mb-2" type="file" id="files">


           <button href="#" class="btn btn-cta-y my-2 font-500 btn-block">Uploader</button>
         </form>
       </div>
   </div>
 </template>

<script>
import SidebarAccount from '~/components/SidebarAccount.vue'
export default {
  name: 'Upload',
  components: {
    SidebarAccount
  }
}
</script>

<style scoped>
.page-content {
  margin-left: 260px;
  height: 100vh;
  padding: 1px 16px;
}

.form-decoration {
  background: #fff;
  padding: 1em;
  border-radius: 1em;
}
</style>
