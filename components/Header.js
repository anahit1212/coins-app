import Link from "next/link";

const linkStyle = {
  marginRight: 15,
  textDecoration: "none",
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>CoinStats App</a>
    </Link>
  </div>
);

export default Header;
