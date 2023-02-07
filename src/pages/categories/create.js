import React, { useState } from "react";
import { Container } from "react-bootstrap";
import SAlert from "../../components/Alert";
import { useNavigate, Navigate } from "react-router-dom";
import Form from "./form";
import SBreadCrumb from "../../components/Breadcrumb";
export default function CategoryCreate() {
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
  );
}
