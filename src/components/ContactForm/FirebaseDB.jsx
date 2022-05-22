import app from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAhgVfT17xGre3IhucR_qO6hiLFxcovLQE",
    authDomain: "all-react-practice.firebaseapp.com",
    projectId: "all-react-practice",
    storageBucket: "all-react-practice.appspot.com",
    messagingSenderId: "419330545362",
    appId: "1:419330545362:web:c15841cb1898c45e0b7f0b",
    measurementId: "G-P09TSK13Y8"
};

app.initializeApp(firebaseConfig);
const databasse = app.database();

export default databasse;
