
import firebase from "firebase";
import "firebase/firestore";
import {Alert} from "react-native";

export async function registration(email, password, lastName, firstName) {
  try {
    console.log("Email" + email);
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;
    console.log("Email" + currentUser);
    const db = firebase.firestore();
    db.collection("users")
      .doc(currentUser.uid)
      .set({
        email: currentUser.email,
        lastName: lastName,
        firstName: firstName,
      });
  } catch (err) {
    console.log("Error" + err.message);
    Alert.alert("There is something wrong!!!!", err.message);
  }
}

export async function resetPassword(email) {
  try{
    await firebase
    .auth()
    .sendPasswordResetEmail(email);
    console.log("SENT");
    } catch (err) {
    console.log("Error" + err.message);
    Alert.alert("There is something wrong!!!!", err.message);
  }
}

export async function signIn(email, password) {
  try {
   await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.log("Error" + err.message);
    Alert.alert("There is something wrong!", err.message);
  }
}

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    console.log("Error" + err.message);
    Alert.alert('There is something wrong!', err.message);
  }
}