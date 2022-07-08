import React, { useState, createContext, useEffect, useReducer } from 'react';

export const AuthContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DataRequest':
      return { ...state, loading: true };
    case 'DataSuccess':
      return { ...state, loading: false };
    case 'DataFailed':
      return { ...state, loading: false };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false,
  });

  const [currentUser, setCurrentUser] = useState({});
  const [see, setSee] = useState('Hello');

  useEffect(() => {
    localStorage.getItem('smartuser')
      ? setCurrentUser(JSON.parse(localStorage.getItem('smartuser')))
      : setCurrentUser({});
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, see, loading, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
