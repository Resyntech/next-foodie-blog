import { initializeApp } from 'firebase/app'
import { getFirestore, collection, setDoc, updateDoc, doc, deleteDoc, query, orderBy, addDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseApp = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
})

export const auth = getAuth(firebaseApp) // Authentication
// Firestore DB
const db = getFirestore(firebaseApp)

// Collection and Document
export const colRef = (basePath) => collection(db, basePath)
export const docRef = (basePath, id) => doc(db, basePath, id)
export const queryRef = (colRef) => query(colRef, orderBy('rating', 'desc'))

// CRUD
export const addDocument = async(docRef, data) => await addDoc(docRef, data)
export const setDocument = async(docRef, data) => await setDoc(docRef, data)
export const updateDocument = async(docRef, data) => updateDoc(docRef, data)
export const deleteDocument = async(docRef) => deleteDoc(docRef)

// Foods/id/comments

/* FOODS STRUCTURE

ID => FOOD-ORIG-MMDDYYYY
  FOOD: Food name
  ORIG: Origin
  MM: Month Created
  DD: Day Created
  YYYY: Year Created

Description: string
Date Added: timestamp
Date Updated: timestamp
Ingredients: Array
Rating: number
Comments: Object */