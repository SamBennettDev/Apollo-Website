import { navbarHeight } from "@/utils/sizes";

export const ProtectedHome = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{ height: `calc(100vh - ${navbarHeight}px)` }}
    >
      <h1>Protected</h1>
    </div>
  );
};
