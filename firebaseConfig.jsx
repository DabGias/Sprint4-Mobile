import { initializeApp } from "firebase/app"
import { initializeAuth, getReactNativePersistence, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore"

import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const app = initializeApp({
    apiKey: "AIzaSyBHRNrFjfw6dYMEgaHdBBqO_JY39UVWDyA",
    authDomain: "sprint4-mobile.firebaseapp.com",
    projectId: "sprint4-mobile",
    storageBucket: "sprint4-mobile.appspot.com",
    messagingSenderId: "444523642641",
    appId: "1:444523642641:web:9b9282e4b2779aa954d6b0"
})



const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})

export async function login(user) {
    await signInWithEmailAndPassword(auth, user["email"], user["password"])
        .then((userCredentials) => {
            console.debug("Logando usuário com o email: " + JSON.stringify(userCredentials["user"]["email"]))
        })
        .catch(async (error) => {
            console.debug("Error " + error.code + ": " + error.message)

            await register(user)
        })
}

async function register(user) {
    await createUserWithEmailAndPassword(auth, user["email"], user["password"])
        .then(async (userCredentials) => {
            console.debug("Criando usuário com o email: " + JSON.stringify(userCredentials["user"]["email"]))

            await login(user)
        })
        .catch((error) => {
            console.debug("Error " + error.code + ": " + error.message)
        })
}

export function getUser() {
    return auth["currentUser"]
}



const db = getFirestore(app)

export async function insertIntoCart(data) {
    await addDoc(collection(db, "cart"), data)
        .catch((error) => {
            console.debug(error)
        })
}

export async function selectProdts() {
    const snapshot = await getDocs(query(collection(db, "prodts")))
    const prodts = []

    snapshot.forEach((doc) => {
        prodts.push(doc)
    })

    return prodts
}

export async function selectCart() {
    const snapshot = await getDocs(query(
        collection(db, "cart"),
        where("user_email", "==", auth["currentUser"]["email"])
    ))
    const cart = []

    snapshot.forEach((doc) => {
        cart.push(doc)
    })

    return cart
}

export async function removeFromCart(prodtId) {
    const snapshot = await getDocs(query(
        collection(db, "cart"),
        where("id_prodt", "==", prodtId)
    ))

    snapshot.forEach(async (docSnap) => {
        await deleteDoc(doc(db, "cart", docSnap["id"]))
    })
}
