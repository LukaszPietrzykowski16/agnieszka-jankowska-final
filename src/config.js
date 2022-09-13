import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';


export { projectStorage};
const firebaseConfig = {
    apiKey: "AIzaSyA3SNdtsjUTcGt01abCp79CKyM26Qk3ycs",
    authDomain: "agnieszka-jankowska-33066.firebaseapp.com",
    projectId: "agnieszka-jankowska-33066",
    storageBucket: "agnieszka-jankowska-33066.appspot.com",
    messagingSenderId: "672350312156",
    appId: "1:672350312156:web:12645cf604ad2f528dc619",
    measurementId: "G-8603EG9CS4"
  };
  


initializeApp(firebaseConfig);
const projectStorage = getStorage();

