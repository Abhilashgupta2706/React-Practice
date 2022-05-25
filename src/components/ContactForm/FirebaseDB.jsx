import app from 'firebase/app';
import 'firebase/database';

const { REACT_APP_API_KEY,
    REACT_APP_AUTH_DOMAIN,
    REACT_APP_STORAGE_BUCKET,
    REACT_APP_MESSAGING_SENDER_ID,
    REACT_APP_APP_IS,
    REACT_APP_MEASUREMENT_ID } = process.env;

const firebaseConfig = {
    apiKey: REACT_APP_API_KEY,
    authDomain: REACT_APP_AUTH_DOMAIN,
    projectId: "all-react-practice",
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
    appId: REACT_APP_APP_IS,
    measurementId: REACT_APP_MEASUREMENT_ID
};

app.initializeApp(firebaseConfig);
const databasse = app.database();

export default databasse;
