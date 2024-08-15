import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
     <div className="div">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
            <p>{error.statusText || error.message} ,<Link 

            to={"./ "}
                style={{
                    color: '#007bff',
                 
                }}
            >You may go back to the main page</Link></p>
        </p>
     </div>
    </div>
  );
}