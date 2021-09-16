<template>
  <div>
    <vs-button @click="logout()">Déconnexion</vs-button>
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