import store from "./store";

let currentAuth;

function listener() {
  let previousAuth = currentAuth;

  // currentAuth akan mengambil semua store yang bernama auth. di file store dan folder auth
  //   karena isi auth, semua ada di folder auth
  currentAuth = store.getState().auth;

  // jika cuurentAuth tidak sama dgn previousAuth maka token akan di simpan kedalam local storage
  // dengan nama auth
  if (currentAuth !== previousAuth) {
    localStorage.setItem("auth", JSON.stringify(currentAuth));
  }
}

function listen() {
  // artinya store akan memakai function listener yang sudah kita buat di atas.
  store.subscribe(listener);
}

export { listen };
