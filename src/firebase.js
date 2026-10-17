import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAazbyo9hm-9a6B3KRiT8BWgPaTo_2PIS8",
  authDomain: "vue-kultura360.firebaseapp.com",
  projectId: "vue-kultura360",
  storageBucket: "vue-kultura360.firebasestorage.app",
  messagingSenderId: "608141759249",
  appId: "1:608141759249:web:2afcf55e4cbff9106bb2b0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };