import firebase from "firebase.app";
import "firebase/auth";


export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyAkAq9NuSvNFEPAAgz3v06bIKD_3_hrtqU",
    authDomain: "chat-app-137bd.firebaseapp.com",
    projectId: "chat-app-137bd",
    storageBucket: "chat-app-137bd.appspot.com",
    messagingSenderId: "734957451418",
    appId: "1:734957451418:web:551da83a3a6df2759b4723",
    measurementId: "G-ET122HBYZD"
}).auth();