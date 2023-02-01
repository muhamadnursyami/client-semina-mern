import Alert from "react-bootstrap/Alert";
import React from "react";

function SAlert({ message, type }) {
  return <Alert variant={type}>{message}</Alert>;
}

export default SAlert;
