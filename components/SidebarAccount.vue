<template>
  <div class="hidden">
    <vs-sidebar absolute open>
      <vs-sidebar-item id="images">
        <template #icon>
          <i class="icon icon-photo"></i>
        </template>
        Mes images
      </vs-sidebar-item>
      <vs-sidebar-item id="historique">
        <template #icon>
          <i class="icon icon-time"></i>
        </template>
        Historique
      </vs-sidebar-item>
      <vs-sidebar-item id="solde">
        <template #icon>
          <i class="icon icon-more-horiz"></i>
        </template>
        Solde
      </vs-sidebar-item>
      <vs-sidebar-item id="upload">
        <template #icon>
          <i class="icon icon-upload"></i>
        </template>
        Uploader
      </vs-sidebar-item>
      <vs-sidebar-item id="logout" >
        <template #icon>
          <i class="icon icon-upload"></i>
        </template>
        Déconnexion
      </vs-sidebar-item>
      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar class="avatar avatar-lg" data-initial="HT">
            <img src="/avatars/avatar-5.png" alt="" />
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      try {
        await this.$fire.auth.signOut()
        const noti = this.$vs.notification({
          color: 'warning',
          position: 'top-right',
          title: 'Déconnexion Réussi',
          text: 'Vous avez été déconnecter avec succès. Nous espérons vous revoir!',
        })
      } catch (error) {
        const noti = this.$vs.notification({
          color: 'warning',
          position: 'top-right',
          title: 'Echec de la déconnexion',
          text: error,
        })
      }
    },
  },
}
</script>

<style scoped>
</style>
