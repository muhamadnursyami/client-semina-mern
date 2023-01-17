import "./App.css";
import { Judul } from "./title";
import { Subtitle } from "./author";
import Button from "./components/button";
import Table from "./components/Table";

function App() {
  // Jika data nya array
  const data = ["Joko", "Eko", "Yonko"];
  // Jika data nya Object
  const users = [
    {
      _id: 1,
      name: "Rikzy",
      age: 19,
      status: true,
    },
    {
      _id: 2,
      name: "Budi",
      age: 32,
      status: false,
    },
    {
      _id: 3,
      name: "Iki",
      age: 25,
      status: true,
    },
  ];

  const isLogin = true;
  return (
    <>
      {/* Percobaan 1 */}
      <ul>
        <li>Home</li>
        <li>Users</li>
        <li>{isLogin ? "Sudah login" : "Login"}</li>
      </ul>
      <h3>
        {/*  mennggunakan component */}
        <Judul title="Software Engineer" />
      </h3>
      <Subtitle name="Muhamad Nur Syami" />
      <br />
      <Subtitle />
      <br />
      <Button onClick={() => alert("Sudah tersave")}>Save</Button>
      <br />
      <br />
      {/* Data Array dengan Penulisan () tanpa return Cara Kedua*/}
      <ul>
        {data.map((user, index) => (
          <li key={index}> {`Nama Berdasarkan Array: ${user}`}</li>
        ))}
      </ul>

      {/* Data Object  Dengan Penulisan menggunakan {} menggunakan return Cara Pertama*/}
      <ul>
        {users.map((user) => {
          return <li>{`Nama berdasakan object :   ${user.name}`}</li>;
        })}
      </ul>
      {/* Condisional Component */}
      <ul>
        {users.map((user) => (
          <>
            {user.status && (
              <li>{`Nama berdasakan object :   ${user.name}`}</li>
            )}
          </>
        ))}
      </ul>

      <Table users={users} />
    </>
  );
}

export default App;
