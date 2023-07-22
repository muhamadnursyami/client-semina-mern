// YANG BARU
import React from "react";
import { Nav } from "react-bootstrap";

function NavLink({ role, roles, action, children }) {
  console.log("role");
  console.log(role);
  console.log("roles");
  console.log(roles);
  // Kalo salah itu 0 kebawah, kalo benar itu 0 dan 0 keatas.
  let isHas = roles.indexOf(role); // di looping untuk mencocokan apakah roles yang di file acces.js itu sama dengan yang didapat dar auth token role. kalo sama tampilkan navlink berikut.
  return <>{isHas >= 0 && <Nav.Link onClick={action}>{children}</Nav.Link>}</>;
}

export default NavLink;
// YANG LAMA
// import React from "react";
// import { Nav } from "react-bootstrap";
// function NavLink({ action, children }) {
//   return <Nav.Link onClick={action}>{children}</Nav.Link>;
// }

// export default NavLink;
