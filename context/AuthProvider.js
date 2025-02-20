"use client";

import { GetMe } from "@/services/AuthService";
import { useQuery } from "@tanstack/react-query";
import { createContext,useContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["me"],
    queryFn: GetMe,
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        refetch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)

export default AuthProvider;
