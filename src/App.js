import { useState } from "react";
import "./App.css";
import Button from "./components/button";
import Input from "./components/input";

function App() {
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
  const handleClick = () => {
    setForm({ ...form, usia: 2022 - form.tempatTanggalLahir });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h2>Couter :{cout}</h2>
      <Button onClick={() => setCout(cout + 1)}>Click</Button>

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
    </>
  );
}

export default App;
