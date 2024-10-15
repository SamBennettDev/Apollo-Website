import { useAuth } from "./auth";

export const login = (email: string, password: string) => {
  // Modify this to use API call to get user
  const user = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
  };

  const [, setAuthState] = useAuth();
  setAuthState({
    user,
    isAuthenticated: true,
  });
};

export const logout = () => {
  const [, setAuthState] = useAuth();
  setAuthState({
    user: null,
    isAuthenticated: false,
  });
};
