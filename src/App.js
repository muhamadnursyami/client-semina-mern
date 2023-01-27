import { useState } from "react";
import "./App.css";
import Button from "./components/button";

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
  return (
    <>
      <h2>Couter :{cout}</h2>
      <Button onClick={() => setCout(cout + 1)}>Click</Button>

      <form>
        <br />
        Name:{" "}
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <br />
        <br />
        Tempat Tanggal Lahir:{" "}
        <input
          type="number"
          value={form.tempatTanggalLahir}
          onChange={(e) =>
            setForm({ ...form, tempatTanggalLahir: e.target.value })
          }
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
