import { H1 } from "@/components/Typography";
import { navbarHeight } from "@/utils/sizes";

export const FOFPage = () => {
  return (
    <div
      id="fof-page"
      className="flex justify-center items-center"
      style={{ height: `calc(100vh - ${navbarHeight}px)` }}
    >
      <H1>404</H1>
    </div>
  );
};
