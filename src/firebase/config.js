// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYUXFiGq8r_j1UhoCv8FFDbd4ISH5lVlA",
  authDomain: "ringaclothes.firebaseapp.com",
  projectId: "ringaclothes",
  storageBucket: "ringaclothes.appspot.com",
  messagingSenderId: "882418666527",
  appId: "1:882418666527:web:1f1bf80d71420f2a37992a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);