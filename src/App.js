import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/index";
import { listen } from "./redux/listener";
function App() {
  // function ini dia kan menghandle token, dia akan mengset/menambahkan tokennya di local store browser
  // sebelumnya ketika kita sigin token nya hanya di simpan di redux bukan di local storenya
  // listen ini di jalankan menggunakan useEffect karena dia akan berjalan di pertama kali browser di reload.
  useEffect(() => {
    listen();
  }, []);

  // Belajar Redux Dulu sebelum lanjut ke video selanjutnya KEEP STRONG MYSELF
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
