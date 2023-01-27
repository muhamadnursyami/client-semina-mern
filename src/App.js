import { useState } from "react";
import "./App.css";
import Button from "./components/button";
import Input from "./components/input";

function App() {
  //APP FORM VALIDASI
  const [cout, setCout] = useState(0);
  // const [name, setName] = useState("");
  // const [usia, setUsia] = useState("");
  // const [tempatTanggalLahir, setTempatTanggalLahir] = useState("");
  //Manipulasi State menggunakan Object
  const [form, setForm] = useState({
    name: "",
    usia: "",
    tempatTanggalLahir: "",
  });

  // Handling error form
  const [error, setError] = useState("");

  const handleClick = () => {
    if (form.name === "") {
      setError("Kolom name harus diisi !");
    } else if (form.tempatTanggalLahir === "") {
      setError("Kolom tempatlahir harus diisi !");
    } else {
      setForm({ ...form, usia: 2022 - form.tempatTanggalLahir });
    }
  };

  const handleChange = (e) => {
    setError("");
    if (e.target.name === "name") {
      if (e.target.value.length < 3) {
        setError("Minimal 3 Karakter");
      }
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2>Couter :{cout}</h2>
      <Button onClick={() => setCout(cout + 1)}>Click</Button>
      <h2>Aplikasi Form Validasi</h2>
      <form>
        <br />
        Name:{" "}
        <Input
          type="text"
          value={form.name}
          name="name"
          onChange={handleChange}
        />
        <br />
        <br />
        Tempat Tanggal Lahir:{" "}
        <Input
          type="number"
          value={form.tempatTanggalLahir}
          name="tempatTanggalLahir"
          onChange={handleChange}
        />
        <br />
        <br />
        Umur saya : {form.usia}
        <br />
        <br />
        <Button
          onClick={(e) => {
            handleClick();
            e.preventDefault();
          }}
        >
          Click
        </Button>
      </form>

      <p style={{ color: "red" }}>{error}</p>
    </>
  );
}

export default App;
