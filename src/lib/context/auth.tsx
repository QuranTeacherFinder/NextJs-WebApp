import React, { useState, useEffect, useContext, createContext } from 'react'
import firebase from 'lib/clients/firebase'
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'
import nookies from 'nookies'
import { faunaClient } from 'lib/clients/fauna'
import { Get, Index, Match } from 'faunadb'
import { User } from 'lib/graphql/generated'
import { faunaRes } from 'lib/models/faunaRes'

interface userContext {
  user: User
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
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken()
        const dbUser: faunaRes<User> = await faunaClient.query(Get(Match(Index('findUserByUID'), user.uid)))
        console.log(dbUser.data)
        setUser(dbUser.data)
        nookies.set(undefined, 'firebaseAuthToken', token, { path: '/' })
      } else {
        setUser(false)
        nookies.set(undefined, 'firebaseAuthToken', '', { path: '/' })
      }
    })

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    const handle = setInterval(async () => {
      const user = firebase.auth().currentUser
      if (user) await user.getIdToken(true)
    }, 10 * 60 * 1000)

    // clean up setInterval
    return () => clearInterval(handle)
  }, [])

  return {
    user,
    signinGoogle,
    signinFacebook,
    signout
  }
}
