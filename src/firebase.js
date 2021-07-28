import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAnBnvV6xkJWhu8yTmlvdDnEA9CLhNpzhs",
    authDomain: "linkedin-clone-yt-eaf07.firebaseapp.com",
    projectId: "linkedin-clone-yt-eaf07",
    storageBucket: "linkedin-clone-yt-eaf07.appspot.com",
    messagingSenderId: "287571910997",
    appId: "1:287571910997:web:d39d4ad67a97178d364fdc"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};