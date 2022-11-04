import { useContext } from "react";
import UserInfo from "../components/UserInfo";
import AuthContext from "../context/AuthContext";
import img from "../components/logo.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  return (
    <section>
      {user ? <UserInfo user={user} /> : navigate("/login")}

      <img src={img} alt="occult" />
      <h1>this is home page</h1>
    </section>
  );
};

export default Home;
