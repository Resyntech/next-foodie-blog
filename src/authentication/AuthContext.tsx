"use client";
// TODO Add try catch in each async functions to avoid crash.
import React, { useContext, useState, useEffect } from "react";
import { auth } from "@/utils/firebase";
import {
  type AuthProvider as AP,
  type User,
  type UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
  onAuthStateChanged,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import type { Children } from "@/app/layout";

type InitialState = {
  currentUser: User | null;
  loading: boolean;
};
type AuthContextProps = {
  signup: (email: string, password: string) => Promise<UserCredential>;
  signin: (email: string, password: string) => Promise<UserCredential>;
  signinFacebook: (provider: AP) => ReturnType<typeof signinFacebook>;
  signinGoogle: (provider: AP) => ReturnType<typeof signinGoogle>;
  signout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  upEmail: (user: User, email: string) => Promise<void>;
  upPassword: (user: User, password: string) => Promise<void>;
} & InitialState;

const initialState: InitialState = {
  currentUser: null,
  loading: true,
};

async function signup(email: string, password: string) {
  return await createUserWithEmailAndPassword(auth, email, password);
}
async function signin(email: string, password: string) {
  return await signInWithEmailAndPassword(auth, email, password);
}
async function signinFacebook(provider: AP) {
  return await signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential?.accessToken;

      return { user, credential, accessToken };
    })
    .catch((error) => {
      const credential = FacebookAuthProvider.credentialFromError(error);
      console.log(credential);
    });
}

async function signinGoogle(provider: AP) {
  return void signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const accessToken = credential?.accessToken;

      return { user, credential, accessToken };
    })
    .catch((error) => {
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(credential);
    });
}
async function signout() {
  await signOut(auth);
}
async function resetPassword(email: string) {
  return await sendPasswordResetEmail(auth, email);
}
async function upEmail(user: User, email: string) {
  return await updateEmail(user, email);
}
async function upPassword(user: User, password: string) {
  return await updatePassword(user, password);
}

const AuthContext = React.createContext({
  ...initialState,
  signup,
  signin,
  signinFacebook,
  signinGoogle,
  signout,
  resetPassword,
  upEmail,
  upPassword,
} satisfies AuthContextProps);

export const useAuth = () => useContext(AuthContext);
export function AuthProvider({ children }: Children) {
  const [state, setState] = useState(initialState);

  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setState((prevState) => ({
      ...prevState,
      currentUser: user,
      loading: false,
    }));
  });

  useEffect(() => {
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signup,
        signin,
        signinFacebook,
        signinGoogle,
        signout,
        resetPassword,
        upEmail,
        upPassword,
      }}
    >
      {!state.loading && children}
    </AuthContext.Provider>
  );
}
