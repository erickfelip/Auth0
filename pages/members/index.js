import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export const members = () => {
  return <h1>Apenas membros!</h1>;
};

export default members;

export const getServerSideProps = withPageAuthRequired();

//Protecting Page
