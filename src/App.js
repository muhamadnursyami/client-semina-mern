import { useState } from "react";
import "./App.css";
import Button from "./components/button";

function App() {
  const [cout, setCout] = useState(0);
  const [name, setName] = useState("");
  const [tempatTanggalLahir, setTempatTanggalLahir] = useState("");
  return (
    <>
      <h2>Couter :{cout}</h2>
      <Button onClick={() => setCout(cout + 1)}>Click</Button>

      <form>
        <br />
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Tempat Tanggal Lahir:{" "}
          <input
            type="text"
            value={tempatTanggalLahir}
            onChange={(e) => setTempatTanggalLahir(e.target.value)}
          />
        </label>
      </form>
    </>
  );
}

export default App;
