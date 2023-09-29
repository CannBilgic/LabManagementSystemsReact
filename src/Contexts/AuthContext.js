import { useState, createContext, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const login = (data) => {
    setLoggedIn(true);
    setUser(data.payload);
    console.log(data.payload)
  };
const logout= async ()=>{
    setLoggedIn(false);
    setUser(null);
    
}



  const values = {
    loggedIn,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
