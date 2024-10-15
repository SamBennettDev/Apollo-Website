import { AppProvider } from "@/providers/app";
import { AppRoutes } from "@/routes";
import { DesktopNav } from "./components/DesktopNav";
// import { AppNav } from "./components/AppNav";
import { MobileNav } from "./components/MobileNav";

function App() {
  return (
    <AppProvider>
      <DesktopNav />
      <MobileNav />
      <AppRoutes />
      {/* <AppNav /> */}
    </AppProvider>
  );
}

export default App;
