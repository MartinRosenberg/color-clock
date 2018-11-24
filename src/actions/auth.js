import { firebase, googleAuthProvider } from '../firebase/firebase'

export const logIn = (uid) => ({
  type: 'LOG_IN',
  uid,
})

export const startLogIn = () => () =>
  firebase.auth().signInWithPopup(googleAuthProvider)

export const logOut = () => ({
  type: 'LOG_OUT',
})

export const startLogOut = () => () => {
  firebase.auth().signOut()
}
