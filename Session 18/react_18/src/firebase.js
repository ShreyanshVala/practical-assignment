import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // Firebase API Key
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,

  // Firebase Auth Domain
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,

  // Firebase Project ID
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,

  // Firebase Storage Bucket
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,

  // Firebase Sender ID
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,

  // Firebase App ID
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export default app;
