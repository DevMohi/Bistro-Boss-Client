// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   measurementId: import.meta.env.ITE_measurementId,
//   appId: import.meta.env.VITE_appId,
// };

// export const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBD4V_8Vuqjc1GomSEvtfNOQ9_vjPHHgiI",
  authDomain: "bistro-boss-73dd1.firebaseapp.com",
  projectId: "bistro-boss-73dd1",
  storageBucket: "bistro-boss-73dd1.firebasestorage.app",
  messagingSenderId: "43678972217",
  appId: "1:43678972217:web:05e2ef935d0011a72190e8",
  measurementId: "G-RD77M0QZK1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
