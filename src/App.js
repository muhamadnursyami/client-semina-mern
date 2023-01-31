import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";

const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};
const Home = () => {
  return <h1>Hello Im Home </h1>;
};
const About = () => {
  return <h1>Hello Im About </h1>;
};
const Categories = () => {
  const query = useQuery();
  console.log(query.get("page"));
  return (
    <>
      <h1>Hello Im Categories </h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Categories</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <Link to="/categories/123456789">Seminar</Link>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <Link to="/categories/987654321">Podcast</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
const CategoriesDetails = () => {
  let { id } = useParams();

  return <h1>Hello Im Categories Details id: {id} </h1>;
};

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Login</h1>
      <button onClick={() => navigate("/")}>submit</button>
    </>
  );
};
function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/categories">Categoris</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="categories" element={<Categories />}></Route>
        <Route path="categories/:id" element={<CategoriesDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
