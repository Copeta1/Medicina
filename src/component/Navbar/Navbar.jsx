import Logo from "../../assets/images/Logo.png";
import "./navbar.css";
import Button from "../../widgets/Button";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate("/");
    console.log('token remove');
  }

  return (
    <div className="navbar_container dark">
      <div className="navbar_inner">
        <div className="navbar_logo_container">
          <img
            className="main_logo"
            src={Logo}
            alt="Logo"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
      
        {window.location.pathname === "/" && (
          <div className="navbar_links">
            <Button text="Login" to="/login" />
            <Button text="Register" to="/register" />
          </div>
        )}
        {window.location.pathname === "/register" && (
          <div className="navbar_links">
            <Button text="Login" to="/login" />
            <Button text="Back" to="/" />
          </div>
        )}
        {window.location.pathname === "/login" && (
          <div className="navbar_links">
            <Button text="Register" to="/register" />
            <Button text="Back" to="/" />
          </div>
        )}
        {window.location.pathname === "/mainpage" && (
          <div className="navbar_links">
            <button className="logout_button" onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}
