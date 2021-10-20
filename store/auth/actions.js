import firebase from 'firebase/app'
import axios from 'axios'
const API_BASE_URL = "https://heliumartworks.herokuapp.com";

async function initUserWithID(uid) {
    axios.post(API_BASE_URL + `/users/save?uid=${uid}`).then(data => {

    })
}

async function listenToAuthUser(commit, authUser) {
    const userRef = firebase.firestore()
        .collection('users')
        .doc(authUser.uid)
    try {
        const snapshot = await userRef.get()
        const doc = snapshot.data()
        if (!doc) {
            const user = {
                uid: authUser.uid,
                email: authUser.email,
                isAnonymous: authUser.isAnonymous,
                phoneNumber: authUser.phoneNumber,
                displayName: authUser.displayName,
                photoURL: authUser.photoURL,
                emailVerified: authUser.emailVerified,
                balance: 0.0,
                followers: 0,
                roles: ['user'],
                is_certified: false,
            }

            await userRef.set(user)



            listenToAuthUser(commit, authUser)
        }

        if (!doc.id) {
            await initUserWithID(doc.uid)
        }

        userRef.onSnapshot(snapshot => {
            authUser = snapshot.data()
            commit('SET_AUTH_USER', { authUser })
        })

    } catch (e) {
        alert(e)
    }
}





export default {
    async nuxtServerInit({ dispatch }, ctx) {
        // INFO -> Nuxt-fire Objects can be accessed in nuxtServerInit action via this.$fire___, ctx.$fire___ and ctx.app.$fire___'

        /** Get the VERIFIED authUser on the server */
        if (ctx.res && ctx.res.locals && ctx.res.locals.user) {
            const { allClaims: claims, ...authUser } = ctx.res.locals.user

            console.info(
                'Auth User verified on server-side. User: ',
                authUser,
                'Claims:',
                claims
            )

            await dispatch('onAuthStateChanged', {
                authUser,
                claims,
            })
        }
    },

    async onAuthStateChanged({ commit }, { authUser }) {
        if (!authUser) {
            commit('RESET_STORE')
            return
        }
        if (authUser && authUser.getIdToken) {
            try {
                const idToken = await authUser.getIdToken(true)
            } catch (e) {
                console.error(e)
            }
        }

        commit('SET_AUTH_USER', { authUser })

        await listenToAuthUser(commit, authUser)


    },

    checkVuexStore(ctx) {
        if (this.$fire.auth === null) {
            throw 'Vuex Store example not working - this.$fire.auth cannot be accessed.'
        }

        alert(
            'Success. Nuxt-fire Objects can be accessed in store actions via this.$fire___'
        )
    },
}