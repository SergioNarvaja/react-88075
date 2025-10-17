import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB8lZOLLKv04rYmdUZjoYcQ2OESsxSMpBA",
  authDomain: "serzen-react-carro.firebaseapp.com",
  projectId: "serzen-react-carro",
  storageBucket: "serzen-react-carro.firebasestorage.app",
  messagingSenderId: "861218157611",
  appId: "1:861218157611:web:d1d6f96926bfde8ce2e66e",
  measurementId: "G-TS5WLS1NVP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);