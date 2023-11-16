import { FaShoppingCart } from "react-icons/fa";

import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const [cart] = useCart();

  const handleSignOutUser = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>

      <li>
        <Link to="/signUp">Sign Up</Link>
      </li>
      <li>
        <Link to="/dashboard/cart">
          <button className="btn btn-ghost">
            <FaShoppingCart className="mr-2 text-2xl"></FaShoppingCart>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <button
            onClick={handleSignOutUser}
            className="btn btn-active btn-ghost"
          >
            LogOut
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar bg-black bg-opacity-30 max-w-screen-xl fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 lg:text-white items-center"
            >
              {navMenu}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl text-white">
            Bistro Boss
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 lg:text-white items-center">
            {navMenu}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
