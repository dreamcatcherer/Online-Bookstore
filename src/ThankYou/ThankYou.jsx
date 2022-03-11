import React from "react";
import thankYou from "../images/ThankYou.jpg";
import styles from "./ThankYou.module.css";

const ThankYou = () => {
  return (
    <div className={styles.container}>
      <img src={thankYou} alt="Thank you" className={styles.image} />
      
     <div className={styles.text}>
     <b> Thank you for visiting our bookstore! </b>
    </div>
    </div>
  );
};

export default ThankYou;
