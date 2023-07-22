import React from "react";
import { Container } from "react-bootstrap";
import SBreadCrumb from "../../components/Breadcrumb";
export default function Dashboard() {
  // Ngambil token dari localStorage, mengggunakan getItem (KEYnya) saja
  // const token = localStorage.getItem("token"); // ganti jadi redux
  // console.log("token");
  // console.log(token);
  // Ngecek jika tokennya nggak ada maka redirect ke halaman signin.

  // if (!token) return <Navigate to="/signin" replace={true} />;
  return (
    <Container className="mt-3">
      <SBreadCrumb />
    </Container>
  );
}
