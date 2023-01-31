// contoh membuat component
const Subtitle = (props) => {
  return `Nama : ${props.name}`;
};
// cara memberi nilai default
Subtitle.defaultProps = {
  name: "Joko",
};
module.exports = { Subtitle };
