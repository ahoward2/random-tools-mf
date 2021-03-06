import Link from "next/link";

const Header = (props) => (
  <div
    style={{
      backgroundColor: "darkgreen",
      color: "white",
      width: "100%",
      padding: "1em",
      display: "flex",
    }}
  >
    <div style={{ flex: 3 }}>
      <h1>{props.title}</h1>
    </div>
    <div style={{ flex: 1 }}></div>
  </div>
);

export default Header;
