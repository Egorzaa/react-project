import firebase from "firebase";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCq242nzf1rJecRVBwBFZ-IIpnOR9CrutY",
  authDomain: "my-react-app-4a399.firebaseapp.com",
  projectId: "my-react-app-4a399",
  storageBucket: "my-react-app-4a399.appspot.com",
  messagingSenderId: "662592858756",
  appId: "1:662592858756:web:f201c3d70e5cb26e5570d1",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
