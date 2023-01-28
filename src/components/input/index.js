import React from "react";
import PropTypes from "prop-types";
export default function Input({ type, value, name, onChange }) {
  return <input type={type} value={value} name={name} onChange={onChange} />;
}
// jika attributenya namenya tidak dikirim akan terjadi error, ini kita bisa atasi dengan memberikan value default
Input.defaultProps = {
  name: "name",
};

// contoh membuat type data input dengan menggunakan propType module
Input.propTypes = {
  name: PropTypes.string.isRequired, // maksudnya, name akan bertipe string dan isrequired artinya di wajib di isi
  onChange: PropTypes.func.isRequired, // dan onChange itu harus pertipe funtion dan wajib di isi.
};
