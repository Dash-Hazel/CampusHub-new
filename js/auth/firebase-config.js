

const firebaseConfig = {
    apiKey: "AIzaSyBoW791sZAolr1yZizsh2ASwTVUnYbid_o",
    authDomain: "account-checker-6aa7f.firebaseapp.com",
    projectId: "account-checker-6aa7f",
    storageBucket: "account-checker-6aa7f.firebasestorage.app",
    messagingSenderId: "801294791031",
    appId: "1:801294791031:web:2696780088e7929c3d3172",
    measurementId: "G-6241B9Y3WE"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database(); 
const auth = firebase.auth();   

auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
        console.log("✅ Auth persistence set to LOCAL");
    })
    .catch((error) => {
        console.error("Error setting auth persistence:", error);
    });

window.db = db;
window.auth = auth;

