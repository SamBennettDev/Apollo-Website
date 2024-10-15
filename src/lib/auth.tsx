import { AuthState } from "@/types";
import { useState } from "react";

export const useAuth = (): [
  AuthState,
  React.Dispatch<React.SetStateAction<AuthState>>
] => {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  });

  return [auth, setAuth];
};
