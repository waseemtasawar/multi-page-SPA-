import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  let title = "An error occure";
  let message = "Some thing went wrong";

  if (error.status === 500) {
    message: JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title: "Not Found!";
    message: "could noe find a Page";
  }

  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
};

export default Error;
