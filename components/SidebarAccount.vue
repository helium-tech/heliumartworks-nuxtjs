<template>
   <div class="hidden">
     <vs-sidebar
        absolute
        v-model="active"
        open
       >
       <vs-sidebar-item id="images">
         <template #icon>
           <i class='icon icon-photo'></i>
         </template>
         Mes images
       </vs-sidebar-item>
       <vs-sidebar-item id="historique">
         <template #icon>
           <i class='icon icon-time'></i>
         </template>
         Historique
       </vs-sidebar-item>
       <vs-sidebar-item id="solde">
         <template #icon>
           <i class='icon icon-more-horiz'></i>
         </template>
         Solde
       </vs-sidebar-item>
       <vs-sidebar-item id="upload">
         <template #icon>
           <i class='icon icon-upload'></i>
         </template>
         Uploader
       </vs-sidebar-item>
       <template #footer>
         <vs-row justify="space-between">
           <vs-avatar class="avatar avatar-lg" data-initial="HT">
             <img src="/avatars/avatar-5.png" alt="">
           </vs-avatar>
         </vs-row>
       </template>
     </vs-sidebar>
   </div>
 </template>

<script>
export default {
  name: 'SidebarAccount'
}
</script>

<style scoped>

</style>
