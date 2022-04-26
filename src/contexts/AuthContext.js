import React, { useContext, useState } from 'react';

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  return <AuthContext.Provider>{!loading && children}</AuthContext.Provider>;
}
