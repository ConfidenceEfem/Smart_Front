import React, { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [see, setSee] = useState('Hello');

  useEffect(() => {
    localStorage.getItem('smartuser')
      ? setCurrentUser(JSON.parse(localStorage.getItem('smartuser')))
      : setCurrentUser({});
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, see }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
