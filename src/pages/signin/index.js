import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import SButton from "../../components/button";
import TextInputWithLabel from "../../components/TextInputWIthLabel";
import axios from "axios";
import SAlert from "../../components/Alert";

function PageSignin() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log("e.target.name");
    // console.log(e.target.name);
    // console.log("e.target.value");
    // console.log(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const result = await axios.post(
        "http://localhost:9000/api/v1/cms/auth/signin",
        {
          email: form.email,
          password: form.password,
        }
      );
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  return (
    <Container md={12}>
      <SAlert message={"TEST"} type={"danger"} />
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          <Card.Title>Form Login</Card.Title>
          <Form>
            <TextInputWithLabel
              label={"Email Address"}
              name="email" //ini name nya
              value={form.email}
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
            />

            <TextInputWithLabel
              label={"Password"}
              name="password" //ini name nya
              value={form.password}
              type="password"
              placeholder="Enter password"
              onChange={handleChange}
            />

            <SButton action={handleSubmit} variant="primary">
              Submit
            </SButton>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignin;
