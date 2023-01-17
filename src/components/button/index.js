import React from "react";

export default function Sbutton({ onClick, children }) {
  return <button onClick={onClick}>{children} </button>;
}
