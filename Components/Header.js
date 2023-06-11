import foodnestLogo from "../Images/foodnest_logo.png";

import { useState } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom"; // imported Link for client side routing
import { useNavigate } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src={foodnestLogo}
      alt="Food nest log"
      title="Food Nest Logo"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(true);
  const navigate = useNavigate();

  const cartItems=useSelector(Store=>Store.cart.items);
  return (
    <div className="header">
      <Title />
      <h1 className="qoutes">
            <i className="qoutes1"> FoodNest <i className="..">...</i> </i>
            
            Find Your Favourite Food</h1>
      <div className="nav-items">
        <ul>
         

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <Link to="/cart">
          <li className="cartTop1">Cart-<i className="cartTop">{cartItems.length}</i></li>
            </Link>
          <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;