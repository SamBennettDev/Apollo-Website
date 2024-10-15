import { ProtectedHome } from "@/features/home";

export const protectedRoutes = [
  {
    path: "/",
    element: <ProtectedHome />,
  },
];
