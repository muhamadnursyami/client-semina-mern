import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import SAlert from "../../components/Alert";
import { useNavigate } from "react-router-dom";
import { postData } from "../../utils/fetch";
import SForm from "./form";
import { useDispatch } from "react-redux"; // Setiap kali ada perubahan di redux nya harus menggunakana useDispath
import { userLogin } from "../../redux/auth/actions";
function PageSignin() {
  const dispatch = useDispatch();

  //state
  // const token = localStorage.getItem("token");

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
      const res = await postData(
        `/cms/auth/signin`,
        // ini ada adalah payloadnya
        form
      );

      // // nyimpan token ke localstorage, setItem ada 2 paramater , 1: KEY, 2: VALUENYA.
      // localStorage.setItem("token", res.data.data.token);
      // Cara baru untuk menganti yang diatas jadi redux.
      dispatch(userLogin(res.data.data.token, res.data.data.role));
      // jika dia sukses signin maka akan di kembalikan menjadi false
      setIsLoading(false);
      // untuk pindah ke halaman dashboard
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

  //ini diganti jadi redux
  // //jika tokennya ada maka dia langsung direct ke dasboard
  // if (token) return <Navigate to="/" replace={true} />;
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
          <SForm
            handleChange={handleChange}
            isLoading={isLoading}
            handleSubmit={handleSubmit}
            form={form}
          />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignin;
