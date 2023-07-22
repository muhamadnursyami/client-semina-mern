import { USER_LOGIN, USER_LOGOUT } from "./constants";

//  TODO : FUNCTION userLogin dan userLogout.
// ini didapat dari file pages/signin/index.js yang
// adalah sebuah dispatch untuk melakukan update atau tindakan
// untuk merubah sebuah state yang ada di file reducers
// tujuan utama dari function adalah action Creater, tujuannya
// hanya mereturn typenya, kemudian komponen yang di perlukan contohnya
// disini token, role. yang didapat dari  hasil respon
// yang ngefetch await postData diurl /cms/auth/signin
// kemudian function ini bersifat global jadi bisa di akses di mana saja
// juga sudah menggunakan redux-thunk, redux thunk digunakan
// untuk ketika seuatu function yang asycicronus dalam sebuah state management
//  redux,
// function ini terlibat di file reducers.js sebagai function actionya
// yang didalam  function ini mengirim kan type nya beserta data-datanya
// sehingga data bisa di tambahkan.
// Penjelasan lengkap ada di YT prawito hudoro MERN basic, action creator dengan redux thunk.
export function userLogin(token, role, refreshToken) {
  return {
    type: USER_LOGIN,
    token,
    role,
    refreshToken,
  };
}

export function userLogout() {
  localStorage.removeItem("auth");
  return {
    type: USER_LOGOUT,
  };
}
