import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { createContext } from "react";
import { app } from "../firebase/firebase.config";
import loginRequest from "./Authentication.service";

const AuthenticationContext = createContext();

const AuthenticationProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const auth = getAuth(app);

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    setError("");
    loginRequest(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, repeatPassword) => {
    setIsLoading(true);
    setError("");
    if (password !== repeatPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password, repeatPassword)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential.user);

        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  };

  const onLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setError(null);
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: user,
        isLoading,
        user,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationContext, AuthenticationProvider };
