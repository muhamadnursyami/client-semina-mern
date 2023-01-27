import { useState } from "react";
import "./App.css";
import Button from "./components/button";

function App() {
  const [cout, setCout] = useState(0);
  const [name, setName] = useState("");
  const [usia, setUsia] = useState("");
  const [tempatTanggalLahir, setTempatTanggalLahir] = useState("");
  const handleClick = () => {
    setUsia(2022 - tempatTanggalLahir);
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        Tempat Tanggal Lahir:{" "}
        <input
          type="number"
          value={tempatTanggalLahir}
          onChange={(e) => setTempatTanggalLahir(e.target.value)}
        />
        <br />
        <br />
        Umur saya : {usia}
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
