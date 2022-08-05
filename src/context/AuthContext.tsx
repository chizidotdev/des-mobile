import { createContext, useState } from "react";

// interface IAuthContext {}
interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const value = {
    isLoggedIn,
    onLogout: handleLogout,
    onLogin: handleLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
