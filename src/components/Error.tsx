import { useRouteError } from "react-router-dom";
import React from "react";

const Error: React.FC = (): any => {
  const err: any = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Ooops! Something went wrong</h1>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
