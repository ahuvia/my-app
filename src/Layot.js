import {Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Map">Map</Link>
          </li>
          <li>
            <Link to="/QR">QR</Link>
          </li>
        </ul>
      </nav>

      L
    </>
  )
};

export default Layout;