import React from "react";
import pageNotFoundImage from "../images/404PageNotFound.jpg";
import styles from "./ErrorPage.module.css";

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <div>
        <img
          src={pageNotFoundImage}
          alt="404 Page Not Found"
          className={styles.image}
        />
      </div>
    </div>
  );
};
export default PageNotFound;