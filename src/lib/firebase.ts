import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCtOrEY6QRLkhACi-B9C1q95l-dmz2XjFA",
  authDomain: "login-ded3d.firebaseapp.com",
  projectId: "login-ded3d",
  storageBucket: "login-ded3d.appspot.com",
  messagingSenderId: "658821971471",
  appId: "1:658821971471:web:094c2eeb37b853ecb36d7a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);