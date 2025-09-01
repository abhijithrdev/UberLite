import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyA0KjGUzaccTFrlwOrlsqoJE12OdKrlZfU",
  authDomain: "uberlite-b4006.firebaseapp.com",
  projectId: "uberlite-b4006",
  messagingSenderId: "290933584758",
  appId: "1:290933584758:android:9ea4bd660a10d342ecc057",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const messaging = getMessaging(app);
