import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../utils/firebase'
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    updateEmail,
    updatePassword,
    onAuthStateChanged,
    FacebookAuthProvider,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'

const AuthContext = React.createContext()

export const useAuth = () => useContext(AuthContext)
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState('')
    const [loading, setLoading] = useState(true)

    const signup = async(email, password) => await createUserWithEmailAndPassword(auth, email, password)
    const signin = async(email, password) => await signInWithEmailAndPassword(auth, email, password)
    const signinFacebook = async(provider) => await signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user
            const credential = FacebookAuthProvider.credentialFromResult(result)
            const accessToken = credential.accessToken
        
            return ({user, credential, accessToken})
        })
        .catch((error) => {
            const credential = FacebookAuthProvider.credentialFromError(error)
            console.log(credential)
        })
    const signinGoogle = (provider) => signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const accessToken = credential.accessToken
        
            return ({user, credential, accessToken})
        })
        .catch((error) => {
            const credential = GoogleAuthProvider.credentialFromError(error)
            console.log(credential)
        })
    const signout = async() => await signOut(auth)
    const resetPassword = async(email) => await sendPasswordResetEmail(auth, email)
    const upEmail = async(email) => await updateEmail(currentUser, email)
    const upPassword = async(password) => await updatePassword(currentUser, password)

    const unsubscribe = onAuthStateChanged(auth, user => {
        setCurrentUser(user)
        setLoading(false)
    })
    
    useEffect(() => {
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        signin,
        signinFacebook,
        signinGoogle,
        signout,
        resetPassword,
        upEmail,
        upPassword
    }

    return (
        <AuthContext.Provider value={ value }>
            {!loading && children}
        </AuthContext.Provider>
    )
}