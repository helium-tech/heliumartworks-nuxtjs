import initialState from './state'

export default {
  RESET_STORE: (state) => {
    Object.assign(state, initialState())
  },

  SET_AUTH_USER: (state, { authUser }) => {
    state.authUser = {
      uid: authUser.uid,
      email: authUser.email,
      isAnonymous: authUser.isAnonymous,
      phoneNumber: authUser.phoneNumber,
      displayName: authUser.displayName,
      photoURL: authUser.photoURL,
      emailVerified: authUser.emailVerified,
      balance: authUser.balance,
      id: authUser.id,
      followers: authUser.followers,
      roles: authUser.roles,
      is_certified: authUser.is_certified
    }
  }
}
