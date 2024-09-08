import React from "react";
import Container from "./Container";

const Footer = () => {
  const date = new Date();
  return (
    <Container className={"mx-auto mt-auto"}>
      <footer className=" bg-indigo-400 py-2 text-center mt-10 text-slate-50 rounded mx-auto justify-center">
        @ {date.getFullYear()}{" "}
        <a href="https://mms-it.com" className=" underline text-indigo-900">
          MMS IT.
        </a>{" "}
        All rights reserved.
      </footer>
    </Container>
  );
};

export default Footer;
