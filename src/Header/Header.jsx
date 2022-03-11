import React from "react";
import logo from "../images/logo.png";
import Categories from "../Categories/Categories";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <div>
          <Link to="/">
            <img className={styles.logo} alt="Bookstore's logo" src={logo} />
          </Link>
        </div>
        <Categories />
      </nav>
    </header>
  );
};

export default Header;
/**/
