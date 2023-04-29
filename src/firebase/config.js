import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import {getStorage } from "firebase/storage"

export const firebaseConfig = {
apiKey: "AIzaSyCyv5fml8rvaVhQUawnelK5YFp0MF81eEM",
authDomain: "ecommerce-4d97b.firebaseapp.com",
projectId: "ecommerce-4d97b",
storageBucket: "ecommerce-4d97b.appspot.com",
messagingSenderId: "410579041245",
appId: "1:410579041245:web:e2244c993bb9361aa51434"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const db= getFirestore(app)
export const storage= getStorage(app)

export default app;