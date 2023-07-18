"use client";
import React, { ReactNode } from "react";
import { onAuthStateChanged, getAuth, User } from "firebase/auth";
import firebase_app from "@/firebase/config";

const auth = getAuth(firebase_app);

interface ContextState {
  user: User | null;
}

export const AuthContext = React.createContext({
  user: null,
} as ContextState);

export const useAuthContext = () => React.useContext(AuthContext);

interface AuthContextProps {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
