import React, { useState, useEffect, useContext, createContext } from 'react'
import firebase from 'lib/firebase'
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'

interface userContext {
  user: firebase.User
  signinGoogle: () => Promise<firebase.auth.UserCredential | null>
  signinFacebook: () => Promise<firebase.auth.UserCredential | null>
  signout: () => Promise<void>
}

const authContext = createContext<userContext>(undefined!)

export const AuthProvider: React.FC = ({ children }) => {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}

function useProvideAuth() {
  const [user, setUser] = useState<any>(null)
  const googleProvider = new GoogleAuthProvider()
  const facebookProvider = new FacebookAuthProvider()

  const signinGoogle = async () => {
    return await firebase.auth().signInWithPopup(googleProvider)
  }
  const signinFacebook = async () => {
    return await firebase.auth().signInWithPopup(facebookProvider)
  }

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false)
      })
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(false)
      }
    })

    return () => unsubscribe()
  }, [])

  return {
    user,
    signinGoogle,
    signinFacebook,
    signout
  }
}
