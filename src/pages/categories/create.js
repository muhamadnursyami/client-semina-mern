import React, { useState } from "react";
import { Container } from "react-bootstrap";
import SAlert from "../../components/Alert";
import { useNavigate } from "react-router-dom";
import Form from "./form";
import SBreadCrumb from "../../components/Breadcrumb";
import axios from "axios";
import { config } from "../../config";
import SNavbar from "../../components/Navbar";
export default function CategoryCreate() {
  //buat ngambil token yang ada di localStorage
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // kalo post itu memiliki bisa 3 paramater yaitu: url, headers dan form -> payloadnya
      await axios.post(`${config.api_host_dev}/cms/categories`, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/categories");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setAlert({
        ...alert,
        status: true,
        type: "danger",
        message: error.response.data.msg,
      });
    }
  };
  return (
    <>
      <SNavbar />
      <Container>
        <SBreadCrumb
          textSecound={"Categories"}
          urlSecound={"/categories"}
          textThird="create"
        />
        {alert.status && <SAlert type={alert.type} message={alert.message} />}
        <Form
          form={form}
          isLoading={isLoading}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Container>
    </>
  );
}
