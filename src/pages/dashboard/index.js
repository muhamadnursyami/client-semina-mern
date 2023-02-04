import React from "react";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  // Ngambil token dari localStorage, mengggunakan getItem (KEYnya) saja
  const token = localStorage.getItem("token");
  // console.log("token");
  // console.log(token);
  // Ngecek jika tokennya nggak ada maka redirect ke halaman signin.

  if (!token) return <Navigate to="/signin" replace={true} />;
  return <div>Dashboard</div>;
}
