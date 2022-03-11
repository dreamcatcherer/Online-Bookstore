import React from 'react'
import css from "./BookIntro.module.css";

const BookIntroduction = props => {
  return (
    <div className = {css.introductionStyle}>
      <h2>Introduction</h2>
      {props.introduction}
    </div>
  );
};

export default BookIntroduction;