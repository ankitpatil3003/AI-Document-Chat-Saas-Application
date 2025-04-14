import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBSCQiZKL76AhHKmCZ5IzsjgDMZBvUUN8Q",
    authDomain: "ai-document-chat-saas-app.firebaseapp.com",
    projectId: "ai-document-chat-saas-app",
    storageBucket: "ai-document-chat-saas-app.firebasestorage.app",
    messagingSenderId: "583953593890",
    appId: "1:583953593890:web:ede3ea9eff2864eb06bc7b"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };