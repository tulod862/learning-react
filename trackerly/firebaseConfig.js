import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "API_Key", 
  authDomain: "trackerly-158c3.firebaseapp.com",
  projectId: "trackerly-158c3",
  storageBucket: "trackerly-158c3.appspot.com",
  messagingSenderId: "446547574518",
  appId: "1:446547574518:web:010e8ef01ef5a8127976d7",
};

const app = initializeApp(firebaseConfig);

export default app; 