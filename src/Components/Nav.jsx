import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="navbar bg-blue-950 text-white lg:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="text-black menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
              <NavLink to="/">
                <a>
                  <i class="fa-solid fa-house"></i> Home
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <a>
                  <i class="fa-regular fa-address-card"></i> About
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/edu">
                <a>
                <i class="fa-solid fa-award"></i> Edu/Exp
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/plan">
                <a>
                <i class="fa-solid fa-screwdriver-wrench"></i> Service
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/team">
              <a>
              <i class="fa-solid fa-people-group"></i> Teams
              </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">
              <a>
              <i class="fa-solid fa-briefcase"></i> Portfolio
              </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
              <a>
                <i class="fa-solid fa-phone-volume"></i> Contact
              </a>
              </NavLink>
            </li>
            </ul>
          </div>
          <div className="flex items-center">
            <div className="rounded-full border p-1 hidden lg:block">
            <img className="w-10" src="https://i.ibb.co/9bq6Wd2/logo.png" alt="" />
            </div>
            
            <a className="btn btn-ghost lg:text-2xl">Abdullah Al Noman</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">
                <a>
                  <i class="fa-solid fa-house"></i> Home
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <a>
                  <i class="fa-regular fa-address-card"></i> About
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/edu">
                <a>
                <i class="fa-solid fa-award"></i> Edu/Exp
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/plan">
                <a>
                <i class="fa-solid fa-screwdriver-wrench"></i> Service
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/team">
              <a>
              <i class="fa-solid fa-people-group"></i> Teams
              </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">
              <a>
              <i class="fa-solid fa-briefcase"></i> Portfolio
              </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
              <a>
                <i class="fa-solid fa-phone-volume"></i> Contact
              </a>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to="/login">
          <button className="btn">
            <i class="fa-solid fa-laptop-code"></i>
            Work Together
          </button>
          </NavLink>
          
        </div>
      </div>
    </div>
  );
};

export default Nav;
