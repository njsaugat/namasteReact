import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>OOPS! Something went wrong.</h1>
      <h2>Please try again later.</h2>
      <h2>
        {err.status + " : "+err.statusText}
      </h2>
    </>
  );
};

export default Error;
