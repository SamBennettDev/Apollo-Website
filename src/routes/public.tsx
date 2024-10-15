import { PublicHome } from "@/features/home";
import { Plans } from "@/features/plans";

export const publicRoutes = [
  {
    path: "/",
    element: <PublicHome />,
  },
  {
    path: "/Plans",
    element: <Plans />,
  },
];
