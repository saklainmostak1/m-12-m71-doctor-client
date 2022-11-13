import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true)

const [user, setUser] = useState(null)

    const createUser = (email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
  const signIn = (email ,password) =>{
    setLoading(true)
  return    signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () =>{
    setLoading(true)
      return signOut(auth)
  }

  const updateUser = (userInfo) =>{
    setLoading(true)
   return updateProfile(user, userInfo)
  }

  useEffect(() =>{
  const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
    setUser(currentUser)  
    setLoading(false) 
    })
    return () => unsubscribe()
  }, [])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        updateUser,
        loading,

    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;