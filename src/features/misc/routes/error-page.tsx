import { navbarHeight } from "@/utils/sizes";
import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  const errorDetails = error as { statusText?: string; message?: string };

  console.error(error);

  return (
    <div
      id="error-page"
      className="flex justify-center items-center"
      style={{ height: `calc(100vh - ${navbarHeight}px)` }}
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorDetails.statusText || errorDetails.message}</i>
      </p>
    </div>
  );
};
