import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWcDwpjpB25LGa1TM-ioz36XKTHjWVvIk",
  authDomain: "whatsapp-web-clone-5b700.firebaseapp.com",
  projectId: "whatsapp-web-clone-5b700",
  storageBucket: "whatsapp-web-clone-5b700.appspot.com",
  messagingSenderId: "1096214047139",
  appId: "1:1096214047139:web:42027dc94190f403bf5216",
  measurementId: "G-J1DM627ZEF",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
