import React from "react";
import { Link } from "react-router-dom";
import styles from "./Categories.module.css";

const Categories = function() {
	return(
		<div className={styles.navbar}>
			<Link to="/" className ={styles.category}>
				Home
			</Link>

			<Link to="/allbooks" className ={styles.category}>
				All Books
			</Link>

      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>
          Books By Category <i className="fa fa-caret-down"></i>
        </button>
        <div className={styles.dropdownContent}>
          <Link to="/classics" className={styles.subCategoryItem}>
            Classics
          </Link>
          <Link to="/adventure" className={styles.subCategoryItem}>
            Adventure
          </Link>
          <Link to="/scifi" className={styles.subCategoryItem}>
            Sci-Fi
          </Link>
          <Link to="/fantasy" className={styles.subCategoryItem}>
            Fantasy
            </Link>
        </div>
      </div>

			<Link to="/aboutUs" className = {styles.category}>
				About Us
			</Link>

         
          <Link to="/feedback" className={styles.optionLink}>
          Feedback
        </Link>
          <Link to="/contactUs" className={styles.optionLink}>
          Contact Us
        </Link>
          <Link to="/thankyou" className={styles.optionLink}>
          Thank You
        </Link>
		</div>



	);
};

export default Categories;