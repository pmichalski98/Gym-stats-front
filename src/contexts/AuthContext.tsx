import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { User } from "../types/auth";

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);
export function useAuth() {
  return useContext(AuthContext);
}
interface Props {
  children: React.ReactNode;
}
interface AuthContextType {
  currentUser: User | undefined;
  setCurrentUser: Dispatch<SetStateAction<User | undefined>>;
}
function AuthProvider({ children }: Props) {
  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value: AuthContextType = {
    currentUser,
    setCurrentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
