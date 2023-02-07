import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninPage from "./pages/signin";
import DashboardPage from "./pages/dashboard";
import CategoriesPage from "./pages/categories";
import CategoriesCreate from "./pages/categories/create";
import CategoriesEdit from "./pages/categories/edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />}></Route>
        <Route path="signin" element={<SigninPage />}></Route>
        <Route path="categories" element={<CategoriesPage />}></Route>
        <Route path="categories/create" element={<CategoriesCreate />}></Route>
        <Route path="categories/edit" element={<CategoriesEdit />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
