import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import SButton from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWIthLabel";
import axios from "axios";
import SAlert from "../../components/Alert";
import { useNavigate } from "react-router-dom";

function PageSignin() {
  //state

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log("e.target.name");
    // console.log(e.target.name);
    // console.log("e.target.value");
    // console.log(e.target.value);
    // Arti dibawah ini, berarti kita copy object formnya  kemudian yang kita cari itu
    // namenya apa, dan kita ambil value dari name yang kita cari.
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [alert, setAlert] = useState({
    status: false,
    message: "",
    type: "",
  });

  // State ini dibuat supaya user tidak bisa merequest terlalu banyak
  // dimana bisa mengakibatkna server down, jadi user hanya bisa klik 1 kali

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      //jika di submit maka loading nya true
      setIsLoading(true);
      const res = await axios.post(
        "http://localhost:9000/api/v1/cms/auth/signin",
        {
          email: form.email,
          password: form.password,
        }
      );
      // jika dia sukses signin maka akan di kembalikan menjadi false
      setIsLoading(false);
      navigate("/");
      console.log(res.data.data.token);
    } catch (err) {
      setIsLoading(false); // jika error tombol submitnya bisa.
      setAlert({
        status: true,
        // Maksudnya ada error nggak? terus ngecek, apa ada response? terus apa ada data?
        // terus kalo data data ada msg/ messagenya nggak?
        // kita juga bisa kasih nilai defaultnya seperti ini, interval server error
        message: err?.response?.data?.msg || "Interval Server Error",
        type: "danger",
      });
    }
  };

  return (
    <Container md={12} className="my-5">
      <div className="m-auto" style={{ width: "50%" }}>
        {/* Artinya jika alert statusnya true maka dia akan nampil dibawah ini
        jika false dia tidak nampil apa apa.
        */}
        {alert.status && <SAlert message={alert.message} type={alert.type} />}
      </div>
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
            {/* kita button di klik maka dia akan loading, button nya tidak bisa dklik
                artinya button nya itu disabled == true, tetapi jika, loadingnya false
                dapat dari isLoading NILAI TRUE OR FALSE.
                maka  tombol bisa di klik artinya disabeldnya itu == false,
            */}
            <SButton
              loading={isLoading}
              disabled={isLoading}
              action={handleSubmit}
              variant="primary"
            >
              Submit
            </SButton>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignin;
