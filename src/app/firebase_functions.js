import { setUser, logOut } from "../pages/login-out/userSlice";
import store from './store'
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebase_config";
export default firebase.initializeApp(firebaseConfig);


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.warn(user, " has signed in");
    // const userPayload = { email: user.email, uid: user.uid, displayName: user.displayName };
    store.dispatch(setUser(user));
  }
});
