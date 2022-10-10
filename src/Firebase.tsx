// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUdCwFyBeSITnARWb3mOHb1kSJ7673eGg",
  authDomain: "keepalive-a4e4c.firebaseapp.com",
  projectId: "keepalive-a4e4c",
  storageBucket: "keepalive-a4e4c.appspot.com",
  messagingSenderId: "585165206908",
  appId: "1:585165206908:web:8cff1d2c0e0ba33d93a0f9",
  measurementId: "G-X78TFD2227"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);