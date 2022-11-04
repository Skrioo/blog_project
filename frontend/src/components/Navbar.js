import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <nav>
      <div>
        {/* <img height={32} width={45} src="" alt="logos" /> */}
        <div>
          {user ? (
            <>
              <Link to="/">Home</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/protected">Protected Page</Link>
              <button onClick={logoutUser}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
