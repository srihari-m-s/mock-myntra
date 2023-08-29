import { useRouteError } from "react-router-dom";

/**
 * Error Page
 * Displays Error message.
 */
export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page" className="container-lg">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}