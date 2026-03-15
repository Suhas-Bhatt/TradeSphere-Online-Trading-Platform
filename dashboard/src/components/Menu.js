import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="Logo" />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? "active" : "menu"}>
                <i className="fa fa-tachometer me-2" aria-hidden="true"></i> Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? "active" : "menu"}>
                <i className="fa fa-list-ul me-2" aria-hidden="true"></i> Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? "active" : "menu"}>
                <i className="fa fa-briefcase me-2" aria-hidden="true"></i> Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? "active" : "menu"}>
                <i className="fa fa-crosshairs me-2" aria-hidden="true"></i> Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? "active" : "menu"}>
                <i className="fa fa-money me-2" aria-hidden="true"></i> Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? "active" : "menu"}>
                <i className="fa fa-th me-2" aria-hidden="true"></i> Apps
              </p>
            </Link>
          </li>
          <li>
            <a
              style={{ textDecoration: "none" }}
              href="http://localhost:3000"
              className="menu-exit"
            >
              <p className="menu">
                <i className="fa fa-external-link me-2" aria-hidden="true"></i> Back to Website
              </p>
            </a>
          </li>
        </ul>
        <hr className="my-3" />
        <div className="profile" onClick={() => handleMenuClick(6)}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
