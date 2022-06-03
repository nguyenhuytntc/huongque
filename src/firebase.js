// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDNIDtnsJf7DhfyAmiBLPDLtUjLwNSRU-s',
    authDomain: 'thaoduochuongque-38761.firebaseapp.com',
    projectId: 'thaoduochuongque-38761',
    storageBucket: 'thaoduochuongque-38761.appspot.com',
    messagingSenderId: '755076419854',
    appId: '1:755076419854:web:26462a5479877e56b6875f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
