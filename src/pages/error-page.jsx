import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError()
  console.log(error)

  return (
    <div>
      <h1>Oops!</h1>
      <p>Error occured</p>
      <p>{error.statusText || error.message }</p>
    </div>
  )
}

export default ErrorPage;