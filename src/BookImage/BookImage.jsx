import React from "react";
import styles from "./BookImage.module.css"

const BookImage = ({url, title}) => {
  return (
    <div className = {styles.imageStyle}>
      <img src={url} alt={title} />
    </div>
  );
};

export default BookImage;