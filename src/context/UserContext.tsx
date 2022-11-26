import React, { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../libs/Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

interface UserType {
  email: string | null
  uid: string | null
}

interface AuthContextData {
  user: UserType | undefined
  signIn(email: string, senha: string): Promise<boolean>
  signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const useAuth = () => useContext<AuthContextData>(AuthContext)

export const AuthContextProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<UserType>({ email: null, uid: null })

  async function signIn(email: string, password: string) {
    try {
      const r = await signInWithEmailAndPassword(auth, email, password)

      return true
    } catch (error) {
      return false
    }
  }

  async function signOut() {
    await auth.signOut()
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid
        })
      } else {
        setUser({ email: null, uid: null })
      }
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
