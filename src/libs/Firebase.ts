import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuDqCtSfKii0dDARi7Uw-1MC6yvdFW3f4",
  authDomain: "pca-introducao-web.firebaseapp.com",
  projectId: "pca-introducao-web",
  storageBucket: "pca-introducao-web.appspot.com",
  messagingSenderId: "651854992772",
  appId: "1:651854992772:web:335dd6f2a50ee1aba9f9d1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
